import React from "react";
import HomeBanner from "../home/home-comp";
import CursosBoxes from "../cursosBoxes/cursos";
import ModalLogin from "../modal/modal-login";
const Inicio = () => {
  return (
    <main>
      <HomeBanner />
      <CursosBoxes />
    </main>
  );
};
export default Inicio;
