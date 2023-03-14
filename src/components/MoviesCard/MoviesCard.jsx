import './MoviesCard.css';

const MoviesCard = ({cardTitle, cardImage, children}) => {
  return (
    <li className='movies-card'>
       <div className='movies-card__container'>
         <div className='movies-card__info'>
            <h3 className='movies-card__title'>{cardTitle}</h3>
            <p className='movies-card__duration'>1ч 47м</p>
         </div>
         {children}
       </div>
       <img className='movies-card__image' src={cardImage} alt='Film poster'></img>
    </li>
  )
}

export default MoviesCard;