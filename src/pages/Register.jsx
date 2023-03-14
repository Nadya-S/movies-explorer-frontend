import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm";
import FormInput from "../components/CommonElements/FormInput/FormInput";
import GreenLink from "../components/CommonElements/GreenLink/GreenLink";

const Register = () => {
  return (
    <div>
      <AuthorizationForm
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
      >
        <FormInput 
          name="Имя"
          type="text"
          placeholder="Имя"
          id="name-input"
        />
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
      <GreenLink question='Уже зарегистрированы?  ' path='/signin' text='Войти'/>
    </div>
  );
};

export default Register;
