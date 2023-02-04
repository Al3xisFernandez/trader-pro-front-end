import React from "react";
 const CursosBoxes = () => {
   return (
    <section className="cursos-section">
   
   <div className="container text-center">
  <div className="row">
    <div className="col-4">
      <a href="/Intro" className="btn-a"> <span className="btn-span">Introduccion</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-4">
      <a href="/PerfilDeInversor" className="btn-a"> <span className="btn-span">Perfil del InVersor</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-4">
    <a href="/AbrirCuentaEnBroker" className="btn-a"> <span className="btn-span">Abrir cuenta en un broker</span> <i className="btn-i"></i> </a>
    </div>
  </div>
  <div className="row">
    <div className="col-3">
    <a href="/InstrumentosFinancieros" className="btn-a"> <span className="btn-span">Instrumentos Financieros</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-6">
    <a href="/AnalisisTecnico" className="btn-a"> <span className="btn-span">Analisis Tecnico</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-3">
    <a href="/VelasJaponesas" className="btn-a"> <span className="btn-span">Velas Japonesas</span> <i className="btn-i"></i> </a>
    </div>
  </div>
  <div className="row">
    <div className="col-4">
    <a href="/Tendencias" className="btn-a"> <span className="btn-span">Las tendencias</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-4">
    <a href="/Acciones" className="btn-a"> <span className="btn-span">Las Acciones</span> <i className="btn-i"></i> </a>
    </div>
    <div className="col-4">
    <a href="/OpcionesFinancieras" className="btn-a"> <span className="btn-span">Opciones Financieras</span> <i className="btn-i"></i> </a>
    </div>
  </div>
</div>

      </section>)
  }
  export default CursosBoxes;