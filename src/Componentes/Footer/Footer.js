import React from "react";
import "boxicons";
const Footer = () => {
  return (
    <footer>
      <div className="containfooter">
        <p>TraderPRo</p>
        <div className="footer-a">
          <a href="tel:543814982513">Numero</a>
          <a href="mailto:alexxxfernandez50@gmail.com">
            Correo
          </a></div>
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

