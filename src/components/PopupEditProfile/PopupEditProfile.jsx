import './PopupEditProfile.css';
import FormInput from "../CommonElements/FormInput/FormInput";

const PopupEditProfile = () => {
  return (
    <div className='popup-edit-profile'>
      <form className='popup-edit-profile__container'>
        <button class="button popup-edit-profile__button-close" type="button"></button>
        <h2 class="popup-edit-profile__title">Редактировать профиль</h2>
        <FormInput 
          name="Имя"
          type="text"
          placeholder="Имя"
          id="name-input"
        />
        <FormInput 
          name="email"
          type="email"
          placeholder="Email"
          id="email-input"
          />
        <button class="button popup-edit-profile__button-save" type="submit" disabled>Сохранить изменения</button>
      </form>
    </div>
  ) 
};

export default PopupEditProfile;