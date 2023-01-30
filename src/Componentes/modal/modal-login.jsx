import React, { useState } from 'react';
import LoginComponent from '../login/LoginComponent';

function RightModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggle}>Ayuda</button>

      {isOpen && (
        <div className="modal-right">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <LoginComponent />
            <button onClick={toggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightModal;
