import HomeBanner from "../home/home-comp";
import CursosBoxes from "../cursosBoxes/cursos"
import CarouselComponent from "../slider/Slider";
// import NoBoxes from "../cursosBoxes/NoBoxes";

const Inicio = () => {
  // const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <main>
      <HomeBanner />
      {/* {isLoggedIn ? ( */}
            {/* <> */}
              <CarouselComponent />
              <CursosBoxes />
            {/* </> */}
          {/* ) : ( */}
            {/* // <NoBoxes/> */}
          {/* )} */}
    </main>
  );
};
export default Inicio;
