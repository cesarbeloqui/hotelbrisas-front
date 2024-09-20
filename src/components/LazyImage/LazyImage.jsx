import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "./redux/loadingSlice";
import imagesData from "../../rize.json"
import { removeLastPartAndExtractFileName } from "./utils";
const LazyImage = ({ src, alt, className, onLoad }) => {
  const { directory, fileName, fileWithExtension } = removeLastPartAndExtractFileName(src)
  const dispatch = useDispatch();
  const [imageSizes, setImageSizes] = useState([]);
  const [srcSet, setSrcSet] = useState("")

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Usamos directamente el objeto importado
    if (imagesData && imagesData[fileWithExtension]) {
      setImageSizes(imagesData[fileWithExtension].dimensions);
    }
  }, []);
  useEffect(() => {
    /* 
    imageSizes = [
    "295×197",
    "1060×706",
    "1460×973",
    "1780×1186",
    "2048×1364"
  ]
    */
    if (imageSizes.length > 0) {
      const srcSet = imageSizes.map((size, index) => {
        // extraer extension del archivo:
        const extension = fileWithExtension.split(".")[1]
        const [width, height] = size.split("×").map(Number);
        return `${directory}/${fileName}/${width}.${extension} ${width}w`;
      }).join(", ");
      setSrcSet(srcSet);
    }
  }, [imageSizes]);

  useEffect(() => {
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
  }, [src]);

  return (
    <>
      {!loaded && <></>}
      {/* Muestra el componente de carga mientras la imagen se carga */}
      {loaded && <img src={src} alt={alt} className={className} srcSet={srcSet} sizes={imagesData[fileWithExtension]?.sizes} />}
    </>
  );
};
export default LazyImage;
