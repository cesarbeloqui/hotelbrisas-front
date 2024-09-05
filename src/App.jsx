import Nav from "./components/Nav/Nav";
import Carrusel from "./components/Carrusel/Carrusel";
import LocationSection from "./sections/LocationSection";
import HabitacionesYSuites from "./sections/HabitacionesYSuites";
import Carrusel2 from "./components/Carrusel2/Carrusel2";
import { CarruselImages1, CarruselImages2 } from "./data"
import Suites from "./sections/Suites";
import useLocalizedContent from "@/hooks/useLocalizedContent";

function App() {
  const contentLocalized = useLocalizedContent()
  const { masterSuites, bahiaSuites } = contentLocalized
  return (
    <>
      <Nav />
      <Carrusel />
      <LocationSection />
      <HabitacionesYSuites />
      <Carrusel2 images={CarruselImages1} />
      <Suites contenido={masterSuites} />
      <Carrusel2 images={CarruselImages2} />
      <Suites contenido={bahiaSuites} />
    </>
  );
}

export default App;
