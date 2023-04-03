import "./FilterCheckbox.css";

const FilterCheckbox = ({ setIsShort, isShort, getCardsList, searchText }) => {

  const handleClick = (e) => {
    setIsShort(e.target.checked);
    getCardsList(
      searchText,
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
