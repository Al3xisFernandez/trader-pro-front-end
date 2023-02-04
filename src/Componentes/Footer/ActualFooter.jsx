import React from "react";
import "boxicons";
import { Link } from "react-router-dom";


const ActualFooter = () => {
  return (
    <>
    <footer>
        <div className="row">
        <p className="col-12 col-md-7 col-lg-9  text-center  h4 d-flex align-self-center ">Manténgase informado y tome decisiones informadas con nosotros</p>
        <div className="col-12 col-md-5 col-lg-3 d-flex align-self-center justify-content-center"> <img src={require("../../images/logo.png")} className=" w-50" alt="TRADER PRO" /></div>
        </div>
        <div> <div className="footer-a d-flex justify-content-around flex-wrap text-center row">
            <Link className="col-12 col-md-4 col-lg-3 p-3 mt-2" to="/">Inicio</Link>
            <Link className="col-12 col-md-4 col-lg-3 p-3 mt-2" to="/QuienesSomos">QuienesSomos</Link>
          <a className="col-12 col-md-4 col-lg-3 p-3 mt-2" href="tel:543814982513">Numero</a>
          <a  className="col-12 col-md-4 col-lg-3 p-3 mt-2" href="mailto:alexxxfernandez50@gmail.com">
            Correo
          </a>
          </div>
          </div>
    </footer>
</>

  );
};
export default ActualFooter;