import React from "react";
import HomeBanner from "../home/home-comp";

import CursosBoxes from "../cursosBoxes/cursos"
import RightModal from "../modal/modal-login";

const Inicio = () => {
  return (
    <main>
     <HomeBanner />
     <CursosBoxes />
     <RightModal />
    </main>
  );
};
export default Inicio;
