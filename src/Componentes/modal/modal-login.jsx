import React, { useState } from 'react';
import LoginComponent from '../login/LoginComponent';
function RightModal() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggle}>Registrarse</button>

      {isOpen && (
        <div className="modal-right">
          <div className="modal-content">
           <button onClick={toggle}>X</button>
        <LoginComponent />
           
          </div>
        </div>
      )}
    </div>
  );
}

export default RightModal;
