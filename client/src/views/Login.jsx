import {useState} from "react";
import {validar} from "../helpers";
import { Formulario, Label, InputTexto,FormularioFlex,InputSubmit ,InputError,FormularioH1 } from "../layout/layout";
function Login({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Email required", //
    password: "Password required", //
  });

  function inputHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validar({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();

    login(userData);
  }

  function diseableHandler() {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }

    return disabled;
  }

  return (
    
    <FormularioFlex>
      <FormularioH1>The Rick and Morty</FormularioH1>
      <Formulario onSubmit={submitHandler}>
        <div>
          <Label>USERNAME</Label>
          <InputTexto
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="Ej. Correo@correo.com"
          />
          <InputError>{errors.email}</InputError>
        </div>
        <div>
          <Label>PASSWORD</Label>
          <InputTexto
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Password"
          />
        </div>
        {errors.password && <InputError>{errors.password}</InputError>}

        <InputSubmit disabled={diseableHandler()} type="submit">
          Iniciar Sesion
        </InputSubmit>
      </Formulario>
    </FormularioFlex>
    
  );
}

export default Login;
