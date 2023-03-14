import React from 'react';
import './Header.css';
import LogoLink from '../CommonElements/LogoLink/LogoLink';

const Header  = ({children}) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <LogoLink />
      </div>
      <div className='header__navigation'>{children}</div>
    </header>
  )
}

export default Header;