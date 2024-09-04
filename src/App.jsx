import Nav from "./components/Nav/Nav";
import Carrusel from "./components/Carrusel/Carrusel";
import LocationSection from "./sections/LocationSection";
import HabitacionesYSuites from "./sections/HabitacionesYSuites";
import Carrusel2 from "./components/Carrusel2/Carrusel2";
import {CarruselImages1} from "./data"
import MasterSuites from "./sections/MasterSuites";

function App() {
  return (
    <>
      <Nav />
      <Carrusel />
      <LocationSection />
      <HabitacionesYSuites />
      <Carrusel2 images={CarruselImages1} />
      <MasterSuites/>
      <div className="h-[200vh] w-[10vw]" />
    </>
  );
}

export default App;
