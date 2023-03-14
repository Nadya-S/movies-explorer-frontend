import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return(
    <label class="filter-checkbox">
      <input type="checkbox" className='filter-checkbox__button'></input>
      <span className='filter-checkbox__title'>Короткометражки</span>
    </label>
  )
};

export default FilterCheckbox;