import "./MoviesCard.css";
import BookmarkButton from "../CommonElements/BookmarkButton/BookmarkButton";
import DeleteButton from "../CommonElements/DeleteButton/DeleteButton";

const MoviesCard = ({ card, saveMyCard, deleteCardButton, deleteMyCard }) => {
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{card.nameRU}</h3>
          <p className="movies-card__duration">
            {hours ? hours : ""}
            {hours ? "ч" : ""} {minutes ? minutes : ""}
            {minutes ? "м" : ""}
          </p>
        </div>
        {deleteCardButton ? (
          <DeleteButton card={card} deleteMyCard={deleteMyCard} />
        ) : (
          <BookmarkButton
            card={card}
            saveMyCard={saveMyCard}
            deleteMyCard={deleteMyCard}
          />
        )}
      </div>
      <a
        href={card.trailerLink}
        target="_blank"
        className="link movies-card__link"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={
            card.image.url
              ? `https://api.nomoreparties.co${card.image.url}`
              : card.image
          }
          alt="Film poster"
        ></img>
      </a>
    </li>
  );
};

export default MoviesCard;
