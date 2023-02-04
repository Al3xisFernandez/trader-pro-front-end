import React from "react";
import "boxicons";
import { Link } from "react-router-dom";


const ActualFooter = () => {
  return (
    <>
    <footer>
        <div className="row w-100 m-0">
        <p className="col-12 col-md-7 col-lg-9  text-center  h4 d-flex align-self-center p-0">Manténgase informado y tome decisiones informadas con nosotros</p>
        <div className="col-12 col-md-5 col-lg-3 d-flex align-self-center justify-content-center p-0"> <img src={require("../../images/logo.png")} className=" w-50" alt="TRADER PRO" /></div>
        </div>
        <div> <div className="footer-a d-flex justify-content-around flex-wrap text-center row w-100">
            <Link className="col-12 col-md-4 col-lg-3 mt-2 p-0" to="/">Inicio</Link>
            <Link className="col-12 col-md-4 col-lg-3 mt-2 p-0" to="/QuienesSomos">QuienesSomos</Link>
          <a className="col-12 col-md-4 col-lg-3 mt-2 p-0" href="tel:543814982513">Numero</a>
          <a  className="col-12 col-md-4 col-lg-3  mt-2 p-0" href="mailto:alexxxfernandez50@gmail.com">
            Correo
          </a>
          </div>
          </div>
    </footer>
</>

  );
};
export default ActualFooter;