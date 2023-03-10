import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/SearchForm/SearchForm";
import Footer from "../components/Footer/Footer";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import DeleteButton from "../components/CommonElements/DeleteButton/DeleteButton";
import MoreButton from "../components/MoreButton/MoreButton";

const SavedMovies = () => {
  return (
    <div className="movies">
      <Header><Navigation /></Header>
      <SearchForm />
      <MoviesCardList buttonType={<DeleteButton />}/>
      <MoreButton />
      <Footer />
    </div>
  )
};

export default SavedMovies;