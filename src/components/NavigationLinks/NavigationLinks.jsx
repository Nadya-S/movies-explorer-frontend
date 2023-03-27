import "./NavigationLinks.css";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <nav className="navigation-links">
      <Link to="/movies" className="link navigation-link">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="link navigation-link">
        Сохранённые фильмы
      </Link>
    </nav>
  );
};

export default NavigationLinks;
