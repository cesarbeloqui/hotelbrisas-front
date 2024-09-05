import Nav from "./components/Nav/Nav";
import Carrusel from "./components/Carrusel/Carrusel";
import LocationSection from "./sections/LocationSection";
import Header from "./sections/Header";
import Carrusel2 from "./components/Carrusel2/Carrusel2";
import { CarruselImages1, CarruselImages2, CarruselImages3, CarruselImages4 } from "./data"
import Suites from "./sections/Suites.jsx";
import useLocalizedContent from "@/hooks/useLocalizedContent";
import Servicios from "./sections/Servicios"
import HotelInfo from "./sections/HotelInfo/HotelInfo";
import HotelGallery from "./sections/HotelGallery";
import Historia from "./sections/Historia";



function App() {
  const contentLocalized = useLocalizedContent()
  const { masterSuites, bahiaSuites, gardenSuites, habitaciones, servicios } = contentLocalized
  const headers = [
    { id: "suites", title: habitaciones.title, subtitle: habitaciones.subtitle, href: "#suites" },
    { id: "servicios", title: servicios.title, subtitle: servicios.subtitle, href: "#servicios" },
  ]
  return (
    <>
      <Nav />
      <Carrusel />
      <LocationSection />
      <Header info={headers[0]} />
      <Carrusel2 images={CarruselImages1} />
      <Suites contenido={masterSuites} />
      <Carrusel2 images={CarruselImages2} />
      <Suites contenido={bahiaSuites} />
      <Carrusel2 images={CarruselImages3} />
      <Suites contenido={gardenSuites} />
      <Header info={headers[1]} />
      <Servicios />
      <HotelInfo />
      <HotelGallery/>
      <Carrusel2 images={CarruselImages4} />
      <Historia/>
    </>
  );
}

export default App;
