import React from "react";
 const CursosBoxes = () => {
   return (
    <section className="cursos-section">
   
   <div className="container text-center">
  <div className="row">
    <div className="col-lg-4 col-md-12">
      <a href="/Intro" className="btn-a"> <span className="btn-span">Introduccion al trading</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-lg-3 col-md-12">
    <a href="/InstrumentosFinancieros" className="btn-a"> <span className="btn-span">Instrumentos Financieros</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-lg-4 col-md-12">
    <a href="/AbrirCuentaEnBroker" className="btn-a"> <span className="btn-span">Abrir cuenta en un broker</span> <i className="btn-i"></i> </a>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6 col-md-12">
    <a href="/AnalisisTecnico" className="btn-a"> <span className="btn-span">Analisis Tecnico</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-lg-3 col-md-12">
    <a href="/VelasJaponesas" className="btn-a"> <span className="btn-span">Velas Japonesas</span> <i className="btn-i"></i> </a>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-12">
    <a href="/Tendencias" className="btn-a"> <span className="btn-span">Las tendencias</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-lg-4 col-md-12">
    <a href="/Acciones" className="btn-a"> <span className="btn-span "> Las Acciones</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-lg-4 col-md-12">
    <a href="/OpcionesFinancieras" className="btn-a"> <span className="btn-span">Opciones Financieras</span> <i className="btn-i"></i> </a>
    </div>
  </div>
</div>

      </section>)
  }
  export default CursosBoxes;