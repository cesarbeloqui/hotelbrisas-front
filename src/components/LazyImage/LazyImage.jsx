import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from './redux/loadingSlice';
import imagesData from '../../rize.json';
import { removeLastPartAndExtractFileName } from './utils';

const LazyImage = ({ src, alt, className, onLoad }) => {
  const [isSupported, setisSupported] = useState(true);
  const [srcSetWebp, setSrcSetWebp] = useState('');
  const [srcWebp, setSrcWebp] = useState('');
  const { directory, fileName, fileWithExtension } = removeLastPartAndExtractFileName(src);
  const dispatch = useDispatch();
  const [imageSizes, setImageSizes] = useState([]);
  const [srcSet, setSrcSet] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Detección de soporte para WebP
  useEffect(() => {
    const testWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };
    setisSupported(testWebP());
  }, []);

  // Cargar tamaños de imágenes desde el archivo JSON
  useEffect(() => {
    if (imagesData && imagesData[fileWithExtension]) {
      setImageSizes(imagesData[fileWithExtension].dimensions);
    }
  }, [fileWithExtension]);

  // Generar srcSet para las imágenes
  useEffect(() => {
    if (imageSizes.length > 0) {
      const srcSet = imageSizes
        .map((size) => {
          const extension = fileWithExtension.split('.')[1];
          const [width] = size.split('×').map(Number);
          const fileNameWithoutNumber = fileName.split('-')[0];

          // Generar la ruta correcta según la estructura de directorios
          const path = directory.includes(fileNameWithoutNumber)
            ? `${directory}/${fileName}/${width}.${extension}`
            : `${directory}/${fileNameWithoutNumber}/${fileName}/${width}.${extension}`;

          console.log('Ruta generada:', path); // Verificación de la ruta generada

          return `${path} ${width}w`;
        })
        .join(', ');

      const srcSetWebp = srcSet.replace(/\.(jpg|png)/g, '.webp');
      const srcWebp = src.replace(/\.(jpg|png)/g, '.webp');

      setSrcWebp(srcWebp);
      setSrcSetWebp(srcSetWebp);
      setSrcSet(srcSet);
    }
  }, [imageSizes, directory, fileName, fileWithExtension]);

  // Manejo de la carga de imágenes
  useEffect(() => {
    dispatch(startLoading({ src, alt }));

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setLoaded(true);
      dispatch(stopLoading({ src, alt }));
      if (onLoad) onLoad();
    };

    img.onerror = () => {
      console.error(`Error al cargar la imagen: ${src}`);
      dispatch(stopLoading({ src, alt }));
    };

    return () => {
      dispatch(stopLoading({ src, alt }));
    };
  }, [src, alt, dispatch, onLoad]);

  return (
    <>
      {!loaded && <></>}
      {loaded && srcSet !== '' && (
        <picture className={className}>
          {/* Si el navegador soporta WebP, se usará este source */}
          {isSupported && (
            <source srcSet={srcSetWebp} sizes={imagesData[fileWithExtension]?.sizes} type="image/webp" />
          )}
          {/* Imagen original si no se soporta WebP */}
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
            srcSet={srcSet}
            sizes={imagesData[fileWithExtension]?.sizes}
          />
        </picture>
      )}
    </>
  );
};

export default LazyImage;
