import React from "react";
import "boxicons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h4>E-commerce</h4>
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
        <small>
          &copy; Copyright 2022.E-commerce | Todos los derechos reservados.
        </small>
      </div>
    </div>
  );
};
export default Footer;

