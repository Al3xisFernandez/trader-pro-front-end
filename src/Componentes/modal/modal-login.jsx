import React, { useState } from 'react';
import LoginComponent from '../login/LoginComponent';
import SignUp from '../login/SignUp';

function RegisterModal() {
  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowSignUp(false);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleRegistrationSuccess = () => {
    setRegistrationSuccess(true);
    toggleModal();
  };

  return (
    <div>
      {registrationSuccess && (
        <div className="modal-right">
          <div className="modal-content">
            <button onClick={toggleModal}>X</button>
            <LoginComponent />
            <button className="btnregister" onClick={toggleSignUp}>
              Registrar
            </button>
          </div>
        </div>
      )}
      {!registrationSuccess && (
        <div>
          <button className="btnregisternav" onClick={toggleModal}>
            Ingresar
          </button>

          {showModal && (
            <div className="modal-right">
              <div className="modal-content">
                <button onClick={toggleModal}>X</button>
                {showSignUp ? (
                  <>
                    <SignUp handleRegistrationSuccess={handleRegistrationSuccess} />
                    <button id="btnbtnregister" onClick={toggleSignUp}>
                      Ingresar
                    </button>
                  </>
                ) : (
                  <>
                    <LoginComponent />
                    <button id="btnbtnregister"  onClick={toggleSignUp}>
                      Registrar
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RegisterModal;

