import useInput from "../hooks/useInput";
import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm";
import FormInput from "../components/CommonElements/FormInput/FormInput";
import GreenLink from "../components/CommonElements/GreenLink/GreenLink";

const Login = ({ onLogin }) => {
  const email = useInput("", {
    isEmpty: true,
    isEmail: true,
    minLength: 4,
    maxLength: 30,
  });
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 30 });

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(email.value, password.value);
  };

  return (
    <div>
      <AuthorizationForm
        title="Рады видеть!"
        buttonText="Войти"
        handleSubmit={handleSubmit}
        error={email.error || password.error}
      >
        <FormInput
          name="email"
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
        question="Ещё не зарегистрированы?  "
        path="/signup"
        text="Регистрация"
      />
    </div>
  );
};

export default Login;
