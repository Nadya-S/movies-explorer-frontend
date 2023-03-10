import './Navigation.css';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import NavigationProfile from '../NavigationProfile/NavigationProfile';


const Navigation = () => {
  return (
    <section className='navigation'>
      <button className='button navigation__menu-button'></button>
      <div className='navigation__container'>
        <NavigationLinks />
        <NavigationProfile />
      </div>
    </section>
  )
};

export default Navigation;