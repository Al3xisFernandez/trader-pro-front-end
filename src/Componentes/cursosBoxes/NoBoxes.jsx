import React from "react";
import "boxicons";


const NoBoxes = () => {
  return (
    <>
    <div className="row w-100 d-flex justify-content-center p-3">
    <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center p-0 m-2"><img src={require("../../images/homeimg.jpeg")} className="w-100" alt="Blocked" /></div>
    <div className="col-12 col-md-6 col-lg-5 d-flex  justify-content-center p-0 m-2"><img src={require("../../images/homeimg2.jpeg")} className="w-100" alt="Blocked" /></div>
    </div>
    <div className="row w-100 d-flex justify-content-center p-3 ">
        <div className="col-12 col-md-6 col-lg-4 d-flex align-self-center justify-content-center p-0 "><img src={require("../../images/block.png")} className="w-25" alt="Blocked" /></div>
        <p className="col-12 col-md-6 col-lg-8 d-flex align-self-center justify-content-center p-0 no-boxes__p--white">POR FAVOR INGRESAR PARA ACCEDER A LOS CURSOS</p>
    </div>
</>

  );
};
export default NoBoxes;