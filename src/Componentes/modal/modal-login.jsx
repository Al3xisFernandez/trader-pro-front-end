import React, { useState } from 'react';
import Login from '../login/Login';

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
            <Login />
            <button onClick={toggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightModal;
