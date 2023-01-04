import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CerrarSesion from '../login/CerrarSesion';
import Login from '../login/Login';
import Perfil from '../perfiles/Perfil';
import { useAuth0 } from '@auth0/auth0-react';

function Navb() {
  const {isAuthenticated} = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">TraderPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Quienes somos</Nav.Link>
            <NavDropdown title="Contactos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Numero</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Numero
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ayuda
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          {isAuthenticated ? <>
           <Perfil />
            <CerrarSesion />
            </>
            : <Login />
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;