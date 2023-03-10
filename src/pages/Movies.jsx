import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import BookmarkButton from "../components/CommonElements/BookmarkButton/BookmarkButton";
// import Preloader from "../components/Preloader/Preloader";
// import NoSearchResult from "../components/NoSearchResult/NoSearchResult";
import MoreButton from "../components/MoreButton/MoreButton";
import Footer from "../components/Footer/Footer";

const Movies = () => {
  return (
    <div className="movies">
      <Header><Navigation /></Header>
      <SearchForm />
      {/* <Preloader /> */}
      {/* <NoSearchResult /> */}
      <MoviesCardList buttonType={<BookmarkButton />}/>
      <MoreButton />
      <Footer />
    </div>
  )
};

export default Movies;