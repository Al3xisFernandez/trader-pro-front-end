import React, { useState } from "react";
export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleSubmit= (e)=> {
        e.preventDefault();
        console.log(fname,lname,email,password);
        fetch("http://localhost:5000/register",{
            method: "POST",
            crossDomain: true,
            headers: {"Content-Type": "application/json", "accept": "application/json",
            "access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({fname,lname,email,password 
        }),
    }).then((res)=> res.json())
    .then((data)=> {
        console.log(data, "userRegister");
    });
}
return (
 <div className="form-wrapper d-flex justify-content-center align-items-center">
    <form className="w-50 mx-auto form-signup"onSubmit={handleSubmit}>
      <h3>Registrarse</h3>
      <div className="mb-3">
        <label>Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Juan"
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Apellido</label>
        <input
          type="text"
          className="form-control"
          placeholder="Perez"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="juan@perez.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="***********"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/LoginComponent">sign in?</a>
      </p>
    </form>
    </div>
  );
}