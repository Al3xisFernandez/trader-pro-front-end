// import { React, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Api } from "../../servicio/api";

// const Login = () => {
//   const [formValues, setFormValues] = useState({
//     email: "",
//     password: "",
//   });
//   const handleChange = (event) => {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const ingreso = () => {
//       Api(formValues)
//         .then(() => {
//           console.log("registrado");
//         })
//         .catch((error) => alert("error al registrar"));
//     };
//     ingreso();
//   };
//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="ingrese email"
//           name="email"
//           value={formValues.email}
//           onChange={handleChange}
//           required
//           />
//         <Form.Text className="text-muted"></Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Contraseña</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Contraseña"
//           name="password"
//           value={formValues.password}
//           onChange={handleChange}
//           required
//           />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//       </Form.Group>
//       <div id="btnregistro" >
//       <Button variant="primary" type="submit">
//         Registrar
//       </Button>
//       </div>
//       </Form>
//   )
// };

// export default Login;

import React, { useState } from "react";
import Titulo from "./titulo";
import Label from "./label";
import Input from "./input";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [ hasError, setHasError ] = useState(false);


  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    } else {
      if (value.lenght < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }

  function control(param) {
    if (param.user < 0 && param.password > 0) {
      if (param.user === "hola" && param.password === "123456") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  }
  function handleSubmit() {
    let account = { user, password };
    if (account) {
      control(account);
    }
  }
  return (
    <div className="Login-contain">
      { !isLogin ?
      <h1>¡Hola, {user}!</h1>
      :
      <div className="Login-contenido">
        <Titulo text="Title" />
        {hasError && 
        <label className="label-alert">su contraseña o usuario es incorrecta</label>}

        <Label text="Usuario" />
        <Input
          attribute={{
            id: "usuario",
            name: "usuario",
            type: "text",
            placeholder: "Ingrese email",
          }}
          handleChange={handleChange}
        />
        <Label text="Contraseña" />
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "Ingrese contraseña",
          }}
          handleChange={handleChange}
          param={passwordError}
        />
        { passwordError && 
          <label className="label-error"> Contraseña invalida</label>
        }
        <div className="Button-contenido">
          <button onClick={handleSubmit} className="submit-button">Ingresar</button>
        </div>
      </div>
      }
    </div>
  );
};
export default Login;
