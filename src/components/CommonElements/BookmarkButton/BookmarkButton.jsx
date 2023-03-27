import "./BookmarkButton.css";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../../context/CurrentUserContext";
import MyLocalStorage from "../../../utils/MyLocalStorage";

const BookmarkButton = ({ saveMyCard, deleteMyCard, card }) => {
  const [active, setActive] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const buttonClassName = `button ${
    active ? "bookmark-button bookmark-button_active" : "bookmark-button"
  }`;

  useEffect(() => {
    const savedCards = MyLocalStorage.getItem(
      `initialMyCards${currentUser._id}`
    );

    if (savedCards.length > 0) {
      const savedCard = savedCards.find(
        (element) => element.movieId === card.id
      );

      if (savedCard) {
        setActive(true);
      }
    }
  }, []);

  const handleButton = () => {
    if (!active) {
      saveMyCard(card);
      setActive(true);
    } else {
      deleteMyCard(card);
      setActive(false);
    }
  };

  return <button className={buttonClassName} onClick={handleButton}></button>;
};

export default BookmarkButton;
