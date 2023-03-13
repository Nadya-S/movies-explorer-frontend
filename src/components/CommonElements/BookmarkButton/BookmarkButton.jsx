import './BookmarkButton.css';
import { useState } from 'react';

const BookmarkButton = () => {
  const [ active, setActive ] = useState(false);
  const buttonClassName = `button ${active? "bookmark-button bookmark-button_active" : "bookmark-button"}`;

  const handleButton = () => {
    if(!active) {
      setActive(true)
    } else {
      setActive(false);
    }
  }

  return (
    <button className={buttonClassName} onClick={handleButton}></button>
  )
};

export default BookmarkButton;