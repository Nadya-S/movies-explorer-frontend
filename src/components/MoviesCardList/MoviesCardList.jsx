import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  serverError,
  cards,
  saveMyCard,
  deleteCardButton,
  deleteMyCard,
}) => {
  if (serverError) {
    return (
      <h2 className="movie-card-list__error">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </h2>
    );
  }

  return (
    <section className="movie-card-list">
      <ul className="movie-card-list__list">
        {cards.map((card) => (
          <MoviesCard
            card={card}
            key={card.movieId || card.id}
            saveMyCard={saveMyCard}
            deleteCardButton={deleteCardButton}
            deleteMyCard={deleteMyCard}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
