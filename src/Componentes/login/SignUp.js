import React, { useState } from "react";
export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ fname, lname, email, password }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Usario creado correctamente");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "/LoginComponent";
        }
      });
  };
  return (
    <form className="w-50 mx-auto bg-light" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Apellido</label>
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
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
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
       Ya esta registrado? <a href="/LoginComponent">Ingresar</a>
      </p>
    </form>
  );
}
