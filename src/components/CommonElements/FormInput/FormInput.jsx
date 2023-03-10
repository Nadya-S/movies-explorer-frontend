import './FormInput.css';

const FormInput = ({ name, type, placeholder, id }) => {
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
      ></input>
      <span className="form-input__input-error">Что-то пошло не так...</span>
    </label>
  )
};

export default FormInput;