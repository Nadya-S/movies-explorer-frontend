import "./FormInput.css";

const FormInput = ({
  name,
  type,
  placeholder,
  id,
  value,
  onChange,
  onBlur,
  error,
  isDirty,
  errorMessage
}) => {
  return (
    <label className="form-input">
      <p className="form-input__title">{placeholder}</p>
      <input
        className={`form-input__input ${isDirty && error && 'form-input__input-error'}`}
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        required
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      ></input>
      <span
        className={`form-input__error ${isDirty && error && "form-input__error_active"}`}
      >{errorMessage}
      </span>
    </label>
  );
};

export default FormInput;
