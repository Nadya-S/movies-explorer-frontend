import React from "react";
import './AuthorizationForm.css';
import LogoLink from "../CommonElements/LogoLink/LogoLink";

const AuthorizationForm = ({
  title,
  children,
  buttonText,
}) => {
  return (
    <section className="authorization">
      <div className="authorization__logo">
        <LogoLink />
      </div>
      <h2 className="authorization__title">{title}</h2>
      <form className="authorization__form">{children}</form>
      <button className="button authorization__button" type="submit">
        {buttonText}
      </button>
  </section>
  );
};

export default AuthorizationForm;
