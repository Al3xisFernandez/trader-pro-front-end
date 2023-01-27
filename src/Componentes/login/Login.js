import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Api } from "../../servicio/api";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const ingreso = () => {
      Api(formValues)
        .then(() => {
          console.log("registrado");
        })
        .catch((error) => alert("error al registrar"));
    };
    ingreso();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="ingrese email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
          />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <div id="btnregistro" >
      <Button variant="primary" type="submit">
        Registrar
      </Button>
      </div>
      </Form>
  )
};

export default Login;