import "./PopupEditProfile.css";
import FormInput from "../CommonElements/FormInput/FormInput";

const PopupEditProfile = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-edit-profile ${isOpen && "popup-edit-profile_opened"}`}>
      <form className="popup-edit-profile__container">
        <button
          className="button popup-edit-profile__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup-edit-profile__title">Редактировать профиль</h2>
        <FormInput name="name" type="text" placeholder="Имя" id="name-input" />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          id="email-input"
        />
        <button
          className="button popup-edit-profile__button-save"
          type="submit"
          disabled
        >
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};

export default PopupEditProfile;
