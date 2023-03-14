import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/SearchForm/SearchForm";
import Footer from "../components/Footer/Footer";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import DeleteButton from "../components/CommonElements/DeleteButton/DeleteButton";
import MoreButton from "../components/MoreButton/MoreButton";

const SavedMovies = ({onPopupNavigation}) => {
  return (
    <div className="movies">
      <Header><Navigation onPopupNavigation={onPopupNavigation}/></Header>
      <Content>
        <SearchForm />
        <MoviesCardList buttonType={<DeleteButton />}/>
        <MoreButton status=''/>
      </Content>
      <Footer />
    </div>
  )
};

export default SavedMovies;