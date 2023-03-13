import './PopupNavigation.css';
import { Link } from 'react-router-dom';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import NavigationProfile from '../NavigationProfile/NavigationProfile';

const PopupNavigation = ({isOpen, onClose}) => {
  return (
    <section className={`popup-navigation ${isOpen && "popup-navigation_opened"}`}>
        <div className='popup-navigation__container'>
          <button className='button popup-navigation__button-close' onClick={onClose}></button>
          <div className='popup-navigation__links'>
            <Link to='/' className='link popup-navigation__link'>Главная</Link> 
            <NavigationLinks />
          </div>
          <NavigationProfile />
        </div>
    </section>
  )
};

export default PopupNavigation;