import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MyVerticallyCenteredModal, App } from '../modal/Modal';
import { App1, MyModal } from '../modal/ModalInicioSesion';
import Perfil from '../perfiles/Perfil';
function Navb() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">TraderPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/QuienesSomos">Quienes somos</Nav.Link>
            <NavDropdown title="Contactos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="tel:543814982513">Numero</NavDropdown.Item>
              <NavDropdown.Item href="mailto:alexxxfernandez50@gmail.com">
                Correo
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="bx bx-help-circle" href="">
                Ayuda
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Nav>
              <MyVerticallyCenteredModal />
              <App />
              <MyModal />
              <App1 />
              <Perfil />
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;