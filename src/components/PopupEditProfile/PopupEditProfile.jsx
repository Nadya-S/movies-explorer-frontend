import "./PopupEditProfile.css";
import React, { useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useInput from "../../hooks/useInput";
import FormInput from "../CommonElements/FormInput/FormInput";

const PopupEditProfile = ({ isOpen, onClose, onUpdateUser, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);

  const name = useInput("", {
    isEmpty: true,
    isName: true,
    isSameName: true,
    minLength: 2,
    maxLength: 30,
  });
  const email = useInput("", {
    isEmpty: true,
    isEmail: true,
    isSameEmail: true,
    minLength: 4,
    maxLength: 30,
  });

  const handleClick = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      name.setValue(currentUser.name);
      email.setValue(currentUser.email);
      name.setError(true);
      email.setError(true);
      name.setDirty(false);
      email.setDirty(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(name.value, email.value);
  };

  return (
    <div
      className={`popup-edit-profile ${isOpen && "popup-edit-profile_opened"}`}
    >
      <form className="popup-edit-profile__container" onSubmit={handleSubmit}>
        <button
          className="button popup-edit-profile__button-close"
          type="button"
          onClick={handleClick}
        ></button>
        <h2 className="popup-edit-profile__title">Редактировать профиль</h2>
        <FormInput
          name="name"
          type="text"
          placeholder="Имя"
          id="name-input"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          isDirty={name.isDirty}
          error={name.error}
          errorMessage={name.errorMessage}
        />
        <FormInput
          name="email"
          placeholder="Email"
          id="email-input"
          value={email.value}
          onChange={email.onChange}
          error={email.error}
          onBlur={email.onBlur}
          isDirty={email.isDirty}
          errorMessage={email.errorMessage}
        />
        <button
          className="button popup-edit-profile__button-save"
          type="submit"
          disabled={name.error || email.error}
        >
          {isLoading ? "Сохранение..." : "Сохранить изменения"}
        </button>
      </form>
    </div>
  );
};

export default PopupEditProfile;
