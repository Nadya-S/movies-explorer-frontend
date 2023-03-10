import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm";
import FormInput from "../components/CommonElements/FormInput/FormInput";
import GreenLink from "../components/CommonElements/GreenLink/GreenLink";

const Login = () => {
  return (
    <div>
      <AuthorizationForm
        title="Рады видеть!"
        buttonText="Войти"
      >
        <FormInput 
          name="email"
          type="email"
          placeholder="Email"
          id="email-input"
        />
        <FormInput 
          name="password"
          type="password"
          placeholder="Пароль"
          id="password-input"
        />
      </AuthorizationForm>
      <GreenLink question='Ещё не зарегистрированы?  ' path='/signup' text='Регистрация'/>
    </div>
  );
};

export default Login;
