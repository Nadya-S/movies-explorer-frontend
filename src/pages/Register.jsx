import useInput from "../hooks/useInput";
import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm";
import FormInput from "../components/CommonElements/FormInput/FormInput";
import GreenLink from "../components/CommonElements/GreenLink/GreenLink";

const Register = ({ onRegister }) => {
  const name = useInput("", {
    isName: true,
    minLength: 2,
    maxLength: 30,
  });
  const email = useInput("", {
    isEmail: true,
    minLength: 4,
    maxLength: 30,
  });
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 30 });

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister(name.value, email.value, password.value);
  };

  return (
    <div>
      <AuthorizationForm
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        handleSubmit={handleSubmit}
        error={name.error || email.error || password.error}
      >
        <FormInput
          name="Имя"
          type="text"
          placeholder="Имя"
          id="name-input"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          isDirty={name.isDirty}
          error={name.error}
          errorMessage={name.errorMessage}
        />
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          id="email-input"
          value={email.value}
          onChange={email.onChange}
          error={email.error}
          onBlur={email.onBlur}
          isDirty={email.isDirty}
          errorMessage={email.errorMessage}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Пароль"
          id="password-input"
          value={password.value}
          onChange={password.onChange}
          error={password.error}
          onBlur={password.onBlur}
          isDirty={password.isDirty}
          errorMessage={password.errorMessage}
        />
      </AuthorizationForm>
      <GreenLink
        question="Уже зарегистрированы?  "
        path="/signin"
        text="Войти"
      />
    </div>
  );
};

export default Register;
