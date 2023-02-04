import React from "react";
import HomeBanner from "../home/home-comp";

import CursosBoxes from "../cursosBoxes/cursos"

const Inicio = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <main>
      
      {isLoggedIn ? (
            <>
            <HomeBanner />
              <CursosBoxes />
            </>
          ) : (
            <HomeBanner />
          )}
    </main>
  );
};
export default Inicio;
