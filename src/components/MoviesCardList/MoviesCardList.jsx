import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import cardImage from '../../images/film_pic_big.png'

const MoviesCardList = ({buttonType}) => {
  return (
    <section className='movie-card-list'>
      <ul className='movie-card-list__list'>
        <MoviesCard cardImage={cardImage} cardTitle='33 слова о дизайне' children={buttonType}/>
        <MoviesCard cardImage={cardImage} cardTitle='33 слова о дизайне' children={buttonType}/>
        <MoviesCard cardImage={cardImage} cardTitle='33 слова о дизайне' children={buttonType}/>
        <MoviesCard cardImage={cardImage} cardTitle='33 слова о дизайне' children={buttonType}/>
        <MoviesCard cardImage={cardImage} cardTitle='33 слова о дизайне' children={buttonType}/>
        <MoviesCard cardImage={cardImage} cardTitle='33 слова о дизайне' children={buttonType}/>
        <MoviesCard cardImage={cardImage} cardTitle='33 слова о дизайне' children={buttonType}/>
      </ul>
    </section>
  )
}

export default MoviesCardList;