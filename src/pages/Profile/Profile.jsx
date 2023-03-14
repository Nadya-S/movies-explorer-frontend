import './Profile.css';
import Header from "../../components/Header/Header";
import Navigation from '../../components/Navigation/Navigation';
import GreenLink from '../../components/CommonElements/GreenLink/GreenLink';

const Profile = ({name, email, onPopupEditProfile, onPopupNavigation}) => {
  return (
    <div className='profile'>
      <Header><Navigation onPopupNavigation={onPopupNavigation}/></Header>
      <h2 className='profile__title'>Привет, {name}!</h2>
      <div className='profile__fields'>
        <div className='profile__field'>
          <p className='profile__field-title'>Имя</p>
          <p className='profile__field-value'>{name}</p>
        </div>
        <div className='profile__field'>
          <p className='profile__field-title'>E-mail</p>
          <p className='profile__field-value'>{email}</p>
        </div>
      </div>
      <button className='profile__edit-button' onClick={onPopupEditProfile}>Редактировать</button>
      <GreenLink question='' path='/signin' text='Выйти из аккаунта'/>
    </div>
  )
};

export default Profile;