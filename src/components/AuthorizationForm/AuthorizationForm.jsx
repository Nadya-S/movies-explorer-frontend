import React from "react";
import './AuthorizationForm.css';
import LogoLink from "../CommonElements/LogoLink/LogoLink";

const AuthorizationForm = ({
  title,
  children,
  buttonText,
  handleSubmit,
  error
}) => {
  return (
    <section className="authorization">
      <div className="authorization__logo">
        <LogoLink />
      </div>
      <h2 className="authorization__title">{title}</h2>
      <form className="authorization__form" noValidate onSubmit={handleSubmit}>{children}
      <button disabled={error} className="button authorization__button" type="submit">
        {buttonText}
      </button></form>
  </section>
  );
};

export default AuthorizationForm;
