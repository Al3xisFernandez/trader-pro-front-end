import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
function Contactenos () {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contactenos</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button  variant="dark">Enviar</Button>
        </Form.Group>
    </Form>
  );
}

export default Contactenos;