import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InicioSesion from '../../inicioSesion/InicioSesion';
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
       <InicioSesion />
      </Modal.Body>
     
    </Modal>
  );
}
export function App1() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
       <Button id="btnreg" variant="primary" onClick={() => setModalShow(true)}>
        Ingresar
      </Button>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
    

