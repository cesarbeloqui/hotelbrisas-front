import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const LoadComponent = ({  loading, useShow }) => {
  const [show, setShow] = useShow;
  const loadingCount = useSelector((state) => state.loading.loadingCount);  // Hook incondicional
  const [isVisible, setIsVisible] = useState(true);
  const [previousLoadingCount, setPreviousLoadingCount] = useState(0);
  const [hasDetectedFirstZero, setHasDetectedFirstZero] = useState(false);


  useEffect(() => {
/*     if (previousLoadingCount > 0 && loadingCount === 0) {
      if (hasDetectedFirstZero) {
        setShow(true)
      } else {
        setHasDetectedFirstZero(true);
      }
    }
    setPreviousLoadingCount(loadingCount); */
    if (loadingCount > 0 ) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        setShow(true);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [loadingCount]);


  /* 
  
      if (loadingCount > 0) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        setShow(true);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  */

  return (
    <>
      {/* Renderizado incondicional basado en isVisible */}
      {isVisible && (
        <div
          className={`fade-${loadingCount > 0
            ? ""
            : "exit fade-exit-active"
            }`}
        >
          {typeof loading === 'function' ? loading() : loading}
        </div>
      )}

    </>
  );
};

export default LoadComponent;