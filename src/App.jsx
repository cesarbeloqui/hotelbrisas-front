import Nav from "./components/Nav/Nav";
import Carrusel from "./components/Carrusel/Carrusel";
import LocationSection from "./sections/LocationSection";

function App() {
  return (
    <>
      <Nav />
      <Carrusel />
      <LocationSection />
      <div className="h-[200vh] w-[10vw]" />
    </>
  );
}

export default App;
