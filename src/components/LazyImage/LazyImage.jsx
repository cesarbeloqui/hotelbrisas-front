import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "./redux/loadingSlice";
import imagesData from "../../rize.json";
import { removeLastPartAndExtractFileName } from "./utils";

const LazyImage = ({ src, alt, className, onLoad }) => {
  const { directory, fileName, fileWithExtension } = removeLastPartAndExtractFileName(src);
  const dispatch = useDispatch();
  const [imageSizes, setImageSizes] = useState([]);
  const [srcSet, setSrcSet] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Cargar dimensiones de la imagen desde el archivo JSON
  useEffect(() => {
    if (imagesData && imagesData[fileWithExtension]) {
      setImageSizes(imagesData[fileWithExtension].dimensions);
    }
  }, [fileWithExtension]);

  // Construir el srcSet una vez que se carguen las dimensiones
  useEffect(() => {
    if (imageSizes.length > 0) {
      const newSrcSet = imageSizes.map((size) => {
        const extension = fileWithExtension.split(".")[1];
        const [width] = size.split("×").map(Number);
        return `${directory}/${fileName}/${width}.${extension} ${width}w`;
      }).join(", ");
      setSrcSet(newSrcSet);
    }
  }, [imageSizes, directory, fileName, fileWithExtension]);

  // Manejar la carga de la imagen
  useEffect(() => {
    if (!src) return;

    dispatch(startLoading({ src, alt }));

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      dispatch(stopLoading({ src, alt }));
      if (onLoad) onLoad();
    };

    return () => {
      dispatch(stopLoading({ src, alt }));
    };
  }, [src, alt, dispatch, onLoad]);

  return (
    <>
      {!loaded && <></>}
      {loaded && (
        <img
          src={src}
          alt={alt}
          className={className}
          srcSet={srcSet} // Aseguramos que srcSet esté aquí
          sizes={imagesData[fileWithExtension]?.sizes}
        />
      )}
    </>
  );
};

export default LazyImage;
