import "./FilterCheckbox.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import MyLocalStorage from "../../utils/MyLocalStorage";

const FilterCheckbox = ({ setIsShort, isShort, getCardsList }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleClick = (e) => {
    setIsShort(e.target.checked);
    getCardsList(
      MyLocalStorage.getItem(`searchText${currentUser._id}`),
      e.target.checked
    );
  };

  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        className="filter-checkbox__button"
        onChange={handleClick}
        checked={isShort}
      ></input>
      <span className="filter-checkbox__title">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
