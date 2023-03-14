import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import BookmarkButton from "../components/CommonElements/BookmarkButton/BookmarkButton";
// import Preloader from "../components/Preloader/Preloader";
// import NoSearchResult from "../components/NoSearchResult/NoSearchResult";
import MoreButton from "../components/MoreButton/MoreButton";
import Footer from "../components/Footer/Footer";

const Movies = ({onPopupNavigation}) => {
  return (
    <div className="movies">
      <Header><Navigation onPopupNavigation={onPopupNavigation}/></Header>
      <Content>
        <SearchForm />
        {/* <Preloader /> */}
        {/* <NoSearchResult /> */}
        <MoviesCardList buttonType={<BookmarkButton />}/>
        <MoreButton status='_active'/>
      </Content>
      <Footer />
    </div>
  )
};

export default Movies;