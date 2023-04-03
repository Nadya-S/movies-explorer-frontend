import "./Profile.css";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const Profile = ({
  setCurrentUser,
  name,
  email,
  onPopupEditProfile,
  onPopupNavigation,
  setLoggedIn,
}) => {
  const onSignOut = () => {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
  };

  return (
    <div className="profile">
      <Header>
        <Navigation onPopupNavigation={onPopupNavigation} />
      </Header>
      <h2 className="profile__title">Привет, {name}!</h2>
      <div className="profile__fields">
        <div className="profile__field">
          <p className="profile__field-title">Имя</p>
          <p className="profile__field-value">{name}</p>
        </div>
        <div className="profile__field">
          <p className="profile__field-title">E-mail</p>
          <p className="profile__field-value">{email}</p>
        </div>
      </div>
      <button className="profile__edit-button" onClick={onPopupEditProfile}>
        Редактировать
      </button>
      <button className="profile__logout-button" onClick={onSignOut}>
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default Profile;
