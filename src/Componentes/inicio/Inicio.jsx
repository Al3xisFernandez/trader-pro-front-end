import React from "react";
import HomeBanner from "../home/home-comp";
import CursosBoxes from "../cursosBoxes/cursos"
const Inicio = () => {
  return (
    <main>
     <HomeBanner />
     <CursosBoxes />
     <HomeBanner />
    </main>
  );
};
export default Inicio;
