import React from "react";
import "boxicons";
import { Link } from "react-router-dom";


const Footerv2 = () => {
  return (
    <>
    <div className="social-icons">
        <a href="#!">
          <i className="fab fa-twitter "></i>
        </a>
        <a href="#!">
          <i className="fab fa-facebook "></i>
        </a>
        <a href="#!">
          <i className="fab fa-instagram "></i>
        </a>
        <a href="#!">
          <i className="fab fa-github "></i>
        </a>
      </div>
      <div className="copyright__text">&copy; Copyright 2019</div>
</>

  );
};
export default Footerv2;