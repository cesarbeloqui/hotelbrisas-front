// Logo en SVG
import { useSelector } from "react-redux";
import "./index.css";
import { logoFooter } from "@/media/media";
import { selectLoadingCount } from "../LazyImage/redux/loadingSlice";

const LogoSVG = ({ className }) => (
  <div dangerouslySetInnerHTML={{ __html: logoFooter }} className={className} />
);

// Componente con animación

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] fixed bg-beige z-[60]">
      <span className="relative flex h-60 w-60">
        <span className=" absolute h-full w-full rounded-full bg-beige opacity-75"></span>
        <span className="fade-in-out relative flex items-center justify-center rounded-full h-60 w-60 bg-fondoMarron font-cutive">
          <LogoSVG className="w-60 h-60" />
        </span>
      </span>
    </div>
  );
};

export default Loading;
