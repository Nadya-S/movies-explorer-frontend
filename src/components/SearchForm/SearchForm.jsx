import "./SearchForm.css";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({
  getCardsList,
  isShort,
  setIsShort,
  searchText,
  setSearchText,
}) => {
  const film = useInput("", {});
  const [emptyError, setEmptyError] = useState(false);

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
    setEmptyError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      getCardsList(searchText, isShort);
    } else {
      setEmptyError(true);
    }
  };

  return (
    <section className="search-form">
      <form
        className="search-form__container"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search-form__search-bar">
          <div className="search-form__icon"></div>
          <button className="button search-form__button" type="submit"></button>
          <div className="search-form__field">
            <input
              name="Фильм"
              type="text"
              className="search-form__input"
              placeholder="Фильм"
              required
              value={searchText || film.value}
              onChange={onChangeSearchText || film.onChange}
              onBlur={film.onBlur}
            ></input>
            <span
              className={`search-form__input_error ${
                emptyError && "search-form__input_error_active"
              }`}
            >
              Нужно ввести ключевое слово
            </span>
          </div>
        </div>
        <FilterCheckbox
          isShort={isShort}
          setIsShort={setIsShort}
          getCardsList={getCardsList}
        />
      </form>
    </section>
  );
};

export default SearchForm;
