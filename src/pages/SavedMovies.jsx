import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import filterCards from "../utils/SearchFilter";
import MyLocalStorage from "../utils/MyLocalStorage";
import MainApi from "../utils/MainApi";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/SearchForm/SearchForm";
import Footer from "../components/Footer/Footer";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import MoreButton from "../components/MoreButton/MoreButton";
import NoSearchResult from "../components/NoSearchResult/NoSearchResult";

const SavedMovies = ({ onPopupNavigation, setErrorReq }) => {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser._id;
  const [myCards, setMyCards] = useState(
    MyLocalStorage.getItem(`initialMyCards${userId}`) || []
  );
  const [deleteCardButton, setDeleteCardButton] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    if (myCards.length === 0 && userId) {
      setMyCards(MyLocalStorage.getItem(`initialMyCards${userId}`));
    }
  }, [userId]);

  const filterMyCard = (searchText, isShort) => {
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
        {/* {isLoading && <Preloader />} */}
        {noSearchResult ? (
          <NoSearchResult />
        ) : (
          <MoviesCardList
            // serverError={serverError}
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
