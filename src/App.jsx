import Nav from "./components/Nav/Nav";
import Carrusel from "./components/Carrusel/Carrusel";
import LocationSection from "./sections/LocationSection";
import HabitacionesYSuites from "./sections/HabitacionesYSuites";

function App() {
  return (
    <>
      <Nav />
      <Carrusel />
      <LocationSection />
      <HabitacionesYSuites/>
      <div className="h-[200vh] w-[10vw]" />
    </>
  );
}

export default App;
