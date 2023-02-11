import { useState } from "react";
import axios from "axios";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/user/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res);
            const data = res.data;
            if (data.status === true) {
              alert("Ingreso exitoso");
              window.localStorage.setItem("token", data.data);
              window.localStorage.setItem("loggedIn", true);
              window.location.href = "/";
            } else {
              alert("Ingreso fallido");
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="form-wrapper d-flex justify-content-center align-items-center">
      <form className="formLogin">
        <h2>Ingresar</h2>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="****************"
            value={password}
            autoComplete="on"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="dgrid">
          <button type="submit" className="btn btn-primary" onClick={login}>
            Enviar
          </button>
        </div>
        <p className="forgot-password text-right">
          <a className="aregister" href="/SignUp">
            Registrarse
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginComponent;
