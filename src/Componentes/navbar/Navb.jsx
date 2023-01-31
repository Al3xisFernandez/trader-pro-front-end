import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserDetails from "../login/UserDetails";
import RightModal from "../modal/modal-login";
import Perfil from "../perfiles/Perfil";

function Navb() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container id="navbar-container">
        <Navbar.Brand id="navbar-logo" href="/">
          {" "}
          <img src={require("../../images/logo.png")} alt="TRADER PRO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/QuienesSomos">Quienes somos</Nav.Link>
            <NavDropdown title="Contactos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="tel:543814982513">
                Numero
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:alexxxfernandez50@gmail.com">
                Correo
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/Contactenos"
                target="_blank"
                rel="noreferrer"
                >
                Envíanos un mensaje
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {isLoggedIn ? (
            <>
              <Perfil />
              {/* <UserDetails /> */}
            </>
          ) : (
            <RightModal />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
