import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/user/create", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          const data = res.data;
          if (data.status === true) {
            alert("registro exitoso");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = "/";
          } else {
            alert("registro fallido");
          }
        });
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div className="form-wrapper d-flex justify-content-center align-items-center">
      <form className="w-50 mx-auto form-signup shadow-sharp">
        <h1>Registrarse</h1>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Nombre"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Apellido"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>email</label>
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
          <label>password</label>
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
        <div className="d-grid" id="btnregistro">
          <button type="submit" className="btn btn-primary mt-4" onClick={save}>
            Registrar
          </button>
          <p className="forgot-password text-right">
            Ya esta registrado? <a href="/LoginComponent">Ingrese</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
