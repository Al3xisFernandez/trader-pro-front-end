import React from "react";
import "boxicons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="containfooter">
        <h3>TraderPRo</h3>
        <div className="footer-a">
            <Link to="/">Inicio</Link>
            <Link to="/QuienesSomos">QuienesSomos</Link>
          <a href="tel:543814982513">Numero</a>
          <a href="mailto:alexxxfernandez50@gmail.com">
            Correo
          </a>

          </div>
        <div>
          <ul className="List">
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <box-icon type="logo" name="instagram"></box-icon>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <box-icon type="logo" name="facebook-square"></box-icon>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <box-icon type="logo" name="twitter"></box-icon>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <box-icon type="logo" name="youtube"></box-icon>
              </a>
              <a href="https://www.twitch.com" target="_blank" rel="noreferrer">
                <box-icon type="logo" name="twitch"></box-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p>&copy; Copyright 2022.TraderPRo | Todos los derechos reservados.</p>

    </footer>

  );
};
export default Footer;

