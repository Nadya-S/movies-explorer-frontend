import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import filterCards from "../utils/SearchFilter";
import MyLocalStorage from "../utils/MyLocalStorage";
import MainApi from "../utils/MainApi";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/SearchForm/SearchForm";
import Preloader from "../components/Preloader/Preloader";
import Footer from "../components/Footer/Footer";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import MoreButton from "../components/MoreButton/MoreButton";
import NoSearchResult from "../components/NoSearchResult/NoSearchResult";

const SavedMovies = ({ onPopupNavigation, setErrorReq }) => {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser._id;
  const [myCards, setMyCards] = useState(
    MyLocalStorage.getItem(`myCards${userId}`) || []
  );
  const [deleteCardButton, setDeleteCardButton] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const setGetCardError = () => {
    setIsLoading(false);
    setServerError(true);
  };

  useEffect(() => {
    if (myCards.length === 0 && userId) {
      setSearchText(MyLocalStorage.getItem(`searchTextMyCard${userId}`));
      setIsShort(MyLocalStorage.getItem(`isShortMyCard${userId}`));
      setIsLoading(true);
      setServerError(false);

      MainApi.getMyCards()
        .then((cards) => {
          setIsLoading(false);
          MyLocalStorage.setItem(`myCards${userId}`, cards);
          setMyCards(cards);
        })
        .catch((err) => {
          setGetCardError();
          console.error(`Ошибка: ${err}`);
        });
    }
  }, [userId]);

  const filterMyCard = (searchText, isShort) => {
    MyLocalStorage.setItem(`isShortMyCard${userId}`, isShort);
    MyLocalStorage.setItem(`searchTextMyCard${userId}`, searchText);

    const filteredCards = filterCards(
      MyLocalStorage.getItem(`initialMyCards${userId}`),
      searchText,
      isShort
    );
    MyLocalStorage.setItem(`myCards${userId}`, filteredCards);
    if (filteredCards.length > 0) {
      setNoSearchResult(false);
      setMyCards(filteredCards);
    } else {
      setNoSearchResult(true);
    }
  };

  const deleteMyCard = (card) => {
    MainApi.deleteMyCard(card._id)
      .then(() => {
        const newCards = myCards.filter((c) => c._id !== card._id);
        setMyCards(newCards);
        MyLocalStorage.setItem(`initialMyCards${userId}`, newCards);
        MyLocalStorage.setItem(`myCards${userId}`, newCards);
      })
      .catch((err) => {
        setErrorReq(err);
      });
  };

  return (
    <div className="movies">
      <Header>
        <Navigation onPopupNavigation={onPopupNavigation} />
      </Header>
      <Content>
        <SearchForm
          getCardsList={filterMyCard}
          isShort={isShort}
          setIsShort={setIsShort}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {isLoading && <Preloader />}
        {noSearchResult ? (
          <NoSearchResult />
        ) : (
          <MoviesCardList
            serverError={serverError}
            cards={myCards}
            deleteCardButton={deleteCardButton}
            deleteMyCard={deleteMyCard}
          />
        )}
        <MoreButton status="" />
      </Content>
      <Footer />
    </div>
  );
};

export default SavedMovies;
