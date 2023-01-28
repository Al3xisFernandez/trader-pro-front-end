import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginComponent from '../login/LoginComponent';

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
      id="btnontent"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <LoginComponent />
      </Modal.Header>
      <Modal.Body id='modalbody'>
      </Modal.Body>
     
    </Modal>
  );
}
export function Appr() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
       <Button id="btnreg" variant="primary" onClick={() => setModalShow(true)}>
        Registrarse
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
    

