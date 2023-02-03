import Form from "react-bootstrap/Form";
import React from "react";

function ContactoForm() {
  return (
    <Form className="contacto-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contactenos</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribe tu mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default ContactoForm;
