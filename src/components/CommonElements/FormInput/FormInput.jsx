import './FormInput.css';
import { useState } from 'react';

const FormInput = ({ name, type, placeholder, id }) => {
  const [ value, setValue ] = useState('');
  const [ error, setError ] = useState(false);

  const handleError = () => {
    setError(true);
  }

  const handleValidate = () => {
    if(!document.querySelector(`#${id}`).validity.valid) {
      handleError();
    } else {
      setError(false);
    }
  }

  const onValueChange = (e) => {
    setValue(e.target.value);
    handleValidate();
  }

  return (
    <label className='form-input'>
      <p className='form-input__title'>{placeholder}</p>
      <input
        className="form-input__input"
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        minLength="4"
        maxLength="30"
        required
        onChange={onValueChange}
        value={value || ''}
      ></input>
      <span className={`form-input__input-error ${error && "form-input__input-error_active"}`}>Что-то пошло не так...</span>
    </label>
  )
};

export default FormInput;