import "./AuthorizationButtons.css";
import { Link } from "react-router-dom";

const AuthorizationButtons = () => {
  return (
    <section className="authorization-buttons">
      <Link to="/signup">
        <button className="button authorization-buttons__reg">
          Регистрация
        </button>
      </Link>
      <Link to="/signin">
        <button className="button authorization-buttons__login">Войти</button>
      </Link>
    </section>
  );
};

export default AuthorizationButtons;
