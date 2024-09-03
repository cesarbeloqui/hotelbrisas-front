import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SVG from "../SVG";
import { logoBlanco, subLine } from "../../media/media";
import "./index.css";

const EnlaceNav = ({ href, children, isActive }) => {
  return (
    <a
      href={href}
      className={`
        items text-nowrap text-xl transition relative group
        ${isActive ? "font-semibold" : ""}
      `}
    >
      <span className="block group-hover:invisible">
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`
          absolute top-0 left-0 invisible font-semibold text-nowrap
          ${isActive ? "" : "group-hover:visible"}
        `}
        style={{
          clipPath: 'inset(0)',
        }}
      >
        {children}
      </span>
      <span
        className={`
          absolute -left-2 right-0 bottom-1 h-0.5 w-[4.5em] opacity-0
          group-hover:opacity-100 transition-opacity duration-300 ease-out
          ${isActive ? "opacity-100" : ""}
        `}
      >
        <SVG
          svg={subLine}
          className="w-full h-auto fill-celeste group-hover:fill-celeste"
        />
      </span>
    </a>
  )
}
export default function NavegacionHotel() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("");

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "ubicacion",
        "suites",
        "servicios",
        "galeria",
        "historia",
      ];
      let current = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      setSeccionActiva(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full nav px-4 p-0 fixed top-0 left-0 z-40">
      <div className="container mx-auto">
        <div className="flex relative justify-between items-center ">
          <div className="logo">
            <SVG svg={logoBlanco} className="logoSVG" />
          </div>
          <div className="hidden lg:flex space-x-6">
            <EnlaceNav
              href="#ubicacion"
              isActive={seccionActiva === "ubicacion"}
            >
              Ubicación
            </EnlaceNav>
            <EnlaceNav href="#suites" isActive={seccionActiva === "suites"}>
              Suites
            </EnlaceNav>
            <EnlaceNav
              href="#servicios"
              isActive={seccionActiva === "servicios"}
            >
              Servicios
            </EnlaceNav>
            <EnlaceNav href="#galeria" isActive={seccionActiva === "galeria"}>
              Galería
            </EnlaceNav>
            <EnlaceNav href="#historia" isActive={seccionActiva === "historia"}>
              Nuestra Historia
            </EnlaceNav>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="font-cutive bg-celeste text-white buttonReservas px-4 pb-1 pt-2 rounded-full hover:bg-white hover:text-celeste transition-colors">
              RESERVAS
            </button>
            <select className="bg-blanco text-celeste rounded-lg px-2 py-1 border-2 select">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
          <button className="lg:hidden text-" onClick={toggleMenu}>
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuAbierto && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <EnlaceNav
                href="#ubicacion"
                isActive={seccionActiva === "ubicacion"}
              >
                Ubicación
              </EnlaceNav>
              <EnlaceNav href="#suites" isActive={seccionActiva === "suites"}>
                Suites
              </EnlaceNav>
              <EnlaceNav
                href="#servicios"
                isActive={seccionActiva === "servicios"}
              >
                Servicios
              </EnlaceNav>
              <EnlaceNav href="#galeria" isActive={seccionActiva === "galeria"}>
                Galería
              </EnlaceNav>
              <EnlaceNav
                href="#historia"
                isActive={seccionActiva === "historia"}
              >
                Nuestra Historia
              </EnlaceNav>
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <button className="bg-celeste text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors">
                RESERVAS
              </button>
              <select className="bg-blanco text-celeste border-none rounded-lg px-2 py-1">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
