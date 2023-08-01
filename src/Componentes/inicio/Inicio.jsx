import React from "react";
import HomeBanner from "../home/home-comp";
import CursosBoxes from "../cursosBoxes/cursos"
import NoBoxes from "../cursosBoxes/NoBoxes";

const Inicio = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <main>
      <HomeBanner />
      {isLoggedIn ? (
            <>
              <CursosBoxes />
            </>
          ) : (
            <NoBoxes/>
          )}
    </main>
  );
};
export default Inicio;
