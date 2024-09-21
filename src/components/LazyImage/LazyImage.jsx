import { useState } from 'react';
import { useEffect } from 'react';
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
  useEffect(() => {
    const testWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;

      const isSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      return isSupported;
    };
    setisSupported(testWebP());
  }, []);
  useEffect(() => {
    // Usamos directamente el objeto importado
    if (imagesData && imagesData[fileWithExtension]) {
      setImageSizes(imagesData[fileWithExtension].dimensions);
    }
  }, []);
  useEffect(() => {
    if (imageSizes.length > 0) {
      const srcSet = imageSizes
        .map((size, index) => {
          // extraer extension del archivo:
          const extension = fileWithExtension.split('.')[1];
          const [width, height] = size.split('×').map(Number);

          const fileNameWithoutNumber = fileName.split('-')[0];

          if (directory.includes(fileNameWithoutNumber)) {
            return `${directory}/${fileName}/${width}.${extension} ${width}w`;
          } else {
            return `${directory}/${fileNameWithoutNumber}/${fileName}/${width}.${extension} ${width}w`;
          }
        })
        .join(', ');
      const srcSetWebp = srcSet.replace(/\.(jpg|png)/g, '.webp');
      const srcWebp = src.replace(/\.(jpg|png)/g, '.webp')
      console.log(srcWebp);
      setSrcWebp(srcWebp)
      setSrcSetWebp(srcSetWebp);
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
      {loaded && srcSet !== '' && (
        <img
          /*           loading="lazy" */
          srcSet={/* isSupported ? srcSetWebp : */ srcSet}
          sizes={imagesData[fileWithExtension]?.sizes}
          //src={/* isSupported ? srcWebp :  */src}
          alt={alt}
          className={className}
        />
      )}
    </>
  );
};
export default LazyImage;
