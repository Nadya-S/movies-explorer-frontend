import './NavigationProfile.css';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';

const NavigationProfile = () => {
  return (
    <div className='navigation-profile'>
      <Link to='/profile' className='link navigation-profile__container'>
        <p className='navigation-profile__title'>Аккаунт</p>
        <img src={profileIcon} alt='profile icon' className='navigation-profile__icon'></img>
      </Link>
    </div>
  )
};

export default NavigationProfile;