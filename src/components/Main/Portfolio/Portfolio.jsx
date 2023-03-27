import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__links">
        <a
          href="https://github.com/Nadya-S/how-to-learn"
          target="_blank"
          className="link portfolio__link"
          rel="noreferrer"
        >
          <p className="portfolio__link-title">Статичный сайт</p>
          <div className="portfolio__link-icon"></div>
        </a>
        <a
          href="https://github.com/Nadya-S/russian-travel"
          target="_blank"
          className="link portfolio__link"
          rel="noreferrer"
        >
          <p className="portfolio__link-title">Адаптивный сайт</p>
          <div className="portfolio__link-icon"></div>
        </a>
        <a
          href="https://github.com/Nadya-S/react-mesto-api-full"
          target="_blank"
          className="link portfolio__link"
          rel="noreferrer"
        >
          <p className="portfolio__link-title">Одностраничное приложение</p>
          <div className="portfolio__link-icon"></div>
        </a>
      </nav>
    </section>
  );
};

export default Portfolio;
