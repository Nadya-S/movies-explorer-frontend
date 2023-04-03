import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__container">
        <p className="footer__date">© 2023</p>
        <nav className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
