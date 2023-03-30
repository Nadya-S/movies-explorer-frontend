import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const useValidation = (value, validations) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (!value) {
      setError(true);
      setErrorMessage("Поле не может быть пустым");
    } else {
      setError(false);
    }

    if (value) {
      for (const validation in validations) {
        switch (validation) {
          case "minLength":
            if (value.length < validations[validation]) {
              setError(true);
              setErrorMessage(
                `В поле должно быть не менее ${validations[validation]} символов`
              );
            }
            break;
          case "maxLength":
            if (value.length > validations[validation]) {
              setError(true);
              setErrorMessage(
                `В поле должно быть не более ${validations[validation]} символов`
              );
            }
            break;
          case "isEmail":
            const regEmail =
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (regEmail.test(String(value).toLowerCase())) {
              setError(false);
            } else {
              setError(true);
              setErrorMessage("Некорректный email");
            }
            break;
          case "isName":
            const regName = /^[а-яА-яa-zA-Z\-\s]*$/i;
            if (regName.test(String(value).toLowerCase())) {
              setError(false);
            } else {
              setError(true);
              setErrorMessage("Некорретные символы в имени");
            }
            break;
          case "isSameName":
            if (value === currentUser.name) {
              setError(true);
              setErrorMessage("Поле осталось прежним");
            }
            break;
          case "isSameEmail":
            if (value === currentUser.email) {
              setError(true);
              setErrorMessage("Поле осталось прежним");
            }
            break;
          default:
            break;
        }
      }
    }
  }, [value]);

  return {
    error,
    errorMessage,
    setError,
  };
};

export default useValidation;
