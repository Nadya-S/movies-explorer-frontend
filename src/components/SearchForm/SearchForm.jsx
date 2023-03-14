import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <div className='search-form__search-bar'>
          <div className='search-form__icon'></div>
          <button className='button search-form__button'></button>
          <div className='search-form__field'>
            <input type='text' className='search-form__input' placeholder='Фильм'></input>
          </div>
        </div>
        <FilterCheckbox/>
      </form>
    </section>
  )
};

export default SearchForm;