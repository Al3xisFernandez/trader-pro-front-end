import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function SignUp({ handleRegistrationSuccess }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    number: false,
    specialCharacter: false,
    uppercase: false,
    lowercase: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(
    false
  );
  const [registrationError, setRegistrationError] = useState("");
  const passwordInputRef = useRef(null);

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
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.data);
          handleRegistrationSuccess();
        } else if (data.error) {
          setRegistrationError(data.error);
        }
      });
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordStrength(checkPasswordStrength(passwordValue));
  };

  const checkPasswordStrength = (password) => {
    const strength = {
      length: password.length >= 8,
      number: /\d/.test(password),
      specialCharacter: /\W/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
    };

    return strength;
  };

  const handlePasswordInputFocus = () => {
    setShowPasswordRequirements(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getPasswordInputType = () => {
    return showPassword ? "text" : "password";
  };

  useEffect(() => {
    if (passwordInputRef.current === document.activeElement) {
      setShowPasswordRequirements(true);
    }
  }, []);

  return (
    <div >
      <form className="form-signup" onSubmit={handleSubmit}>
        <h3>Registrarse</h3>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            required
            autoFocus
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            required
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {registrationError && (
            <p className="error-message">{registrationError}</p>
          )}
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            ref={passwordInputRef}
            type={getPasswordInputType()}
            className="form-control"
            placeholder="***********"
            required
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$"
            autoComplete="on"
            onChange={handlePasswordChange}
            onFocus={handlePasswordInputFocus}
          />
          {registrationError && (
            <p className="error-message">{registrationError}</p>
          )}
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        {showPasswordRequirements && (
          <div className="password-requirements">
            <p className="small-text">
              La contraseña debe tener:
              <br />
              <span
                className={`validation-message ${passwordStrength.length ? "valid" : "invalid"
                  }`}
              >
                {passwordStrength.length ? "✔" : "✖"}
              </span>
              <span className="validation-text">más de 8 caracteres</span>
              <br />
              <span
                className={`validation-message ${passwordStrength.number ? "valid" : "invalid"
                  }`}
              >
                {passwordStrength.number ? "✔" : "✖"}
              </span>
              <span className="validation-text">Un número</span>
              <br />
              <span
                className={`validation-message ${passwordStrength.specialCharacter ? "valid" : "invalid"
                  }`}
              >
                {passwordStrength.specialCharacter ? "✔" : "✖"}
              </span>
              <span className="validation-text">Un caracter especial</span>
              <br />
              <span
                className={`validation-message ${passwordStrength.uppercase ? "valid" : "invalid"
                  }`}
              >
                {passwordStrength.uppercase ? "✔" : "✖"}
              </span>
              <span className="validation-text">Una letra mayúscula</span>
              <br />
              <span
                className={`validation-message ${passwordStrength.lowercase ? "valid" : "invalid"
                  }`}
              >
                {passwordStrength.lowercase ? "✔" : "✖"}
              </span>
              <span className="validation-text">Una letra minúscula</span>
            </p>
          </div>
         )}
        
        <div className="d-grid">
          <button type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
