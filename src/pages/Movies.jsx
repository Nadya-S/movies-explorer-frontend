import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import useLimit from "../hooks/useLimit";
import filterCards from "../utils/SearchFilter";
import MoviesApi from "../utils/MoviesApi";
import MainApi from "../utils/MainApi";
import MyLocalStorage from "../utils/MyLocalStorage";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/SearchForm/SearchForm";
import Preloader from "../components/Preloader/Preloader";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import MoreButton from "../components/MoreButton/MoreButton";
import Footer from "../components/Footer/Footer";
import NoSearchResult from "../components/NoSearchResult/NoSearchResult";

const Movies = ({ onPopupNavigation, setErrorReq }) => {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser._id;
  const [cards, setCards] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const { limit, setLimit, countOfAdd } = useLimit();

  useEffect(() => {
    if (userId) {
      setCards(MyLocalStorage.getItem(`cards${userId}`) || []);
    }
  }, [userId]);

  const setGetCardError = () => {
    setIsLoading(false);
    setServerError(true);
  };

  useEffect(() => {
    if (userId) {
      setIsShort(MyLocalStorage.getItem(`isShort${userId}`));
      setSearchText(MyLocalStorage.getItem(`searchText${userId}`));
      MainApi.getMyCards()
        .then((cards) => {
          MyLocalStorage.setItem(`initialMyCards${userId}`, cards);
        })
        .catch((err) => {
          setErrorReq(err);
        });
    }
  }, [userId]);

  const getCards = (searchText, isShort) => {
    MyLocalStorage.setItem(`searchText${userId}`, searchText);
    MyLocalStorage.setItem(`isShort${userId}`, isShort);

    if (cards.length === 0) {
      setIsLoading(true);
      setServerError(false);
      MoviesApi.getCards()
        .then((cards) => {
          setIsLoading(false);
          MyLocalStorage.setItem(`initialCards${userId}`, cards);
          const filteredCards = filterCards(
            cards,
            MyLocalStorage.getItem(`searchText${userId}`),
            isShort
          );
          MyLocalStorage.setItem(`cards${userId}`, filteredCards);

          if (filteredCards.length > 0) {
            setCards(filteredCards);
          } else {
            setNoSearchResult(true);
          }
        })
        .catch((err) => {
          setGetCardError();
          console.error(`Ошибка: ${err}`);
        });
    } else {
      getNextCards(MyLocalStorage.getItem(`searchText${userId}`), isShort);
    }
  };

  const getNextCards = (searchText, isShort) => {
    const filteredCards = filterCards(
      MyLocalStorage.getItem(`initialCards${userId}`),
      searchText,
      isShort
    );
    MyLocalStorage.setItem(`cards${userId}`, filteredCards);
    if (filteredCards.length > 0) {
      setCards(filteredCards);
      setNoSearchResult(false);
    } else {
      setNoSearchResult(true);
    }
  };

  const saveMyCard = (card) => {
    MainApi.saveMyCard(card)
      .then((newCard) => {
        const savedCards = MyLocalStorage.getItem(`initialMyCards${userId}`);
        MyLocalStorage.setItem(`initialMyCards${userId}`, [
          newCard,
          ...savedCards,
        ]);
        MyLocalStorage.setItem(`myCards${userId}`, [newCard, ...savedCards]);
      })
      .catch((err) => {
        setErrorReq(err);
      });
  };

  const deleteMyCard = (card) => {
    const savedCards = MyLocalStorage.getItem(`initialMyCards${userId}`);
    const deletedCard = savedCards.find(
      (element) => element.movieId === card.id
    );

    MainApi.deleteMyCard(deletedCard._id)
      .then(() => {
        const newCards = savedCards.filter((c) => c._id !== deletedCard._id);
        MyLocalStorage.setItem(`myCards${userId}`, newCards);
        MyLocalStorage.setItem(`initialMyCards${userId}`, newCards);
      })
      .catch((err) => {
        setErrorReq(err);
      });
  };

  const showMore = () => {
    setLimit(limit + countOfAdd);
  };

  return (
    <div className="movies">
      <Header>
        <Navigation onPopupNavigation={onPopupNavigation} />
      </Header>
      <Content>
        <SearchForm
          getCardsList={getCards}
          setIsShort={setIsShort}
          isShort={isShort}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {isLoading && <Preloader />}
        {noSearchResult ? (
          <NoSearchResult />
        ) : (
          <MoviesCardList
            serverError={serverError}
            cards={cards?.slice(0, limit)}
            saveMyCard={saveMyCard}
            deleteMyCard={deleteMyCard}
          ></MoviesCardList>
        )}

        {cards.length > limit && (
          <MoreButton status="_active" onClick={showMore} />
        )}
      </Content>
      <Footer />
    </div>
  );
};

export default Movies;
