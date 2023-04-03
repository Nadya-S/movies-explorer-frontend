import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <h3 className="not-found__text">Страница не найдена</h3>
      <a href="javascript:history.back()" className="not-found__button">
        Назад
      </a>
    </div>
  );
};

export default NotFound;
