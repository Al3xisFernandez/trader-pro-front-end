import React, { useState } from "react"; 

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 function  handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  
    fetch("http://localhost:5000/loginuser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Ingreso correctamente, ir al inicio?");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "/";
        }
      });
  }
  return (
    <form className="formLogin" onSubmit={handleSubmit}>
      <h3>Ingresar</h3>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Ingrese email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Ingrese su contraseña"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Recordarme
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
      <p className="forgot-password text-right">
        <a href="/SignUp">Registrarse</a>
      </p>
    </form>
  );
}