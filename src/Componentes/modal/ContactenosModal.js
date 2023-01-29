import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Contactenos from '../Contactenos/Contactenos';

export function MyModal(props) {
  return (
    <Modal 
      {...props}
      id="btnontent"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body id='modalbody'>
     <Contactenos />
      </Modal.Body>
     
    </Modal>
  );
}
export function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <><div id="btnregi" >
       <a  href="#" onClick={() => setModalShow(true)}>Ayuda
      </a>
      </div>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
    

