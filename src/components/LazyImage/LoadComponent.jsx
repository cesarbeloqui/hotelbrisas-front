import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const LoadComponent = ({ children, loading, setIsLoading, useShow }) => {
  const [show, setShow] = useShow;
  const loadingCount = useSelector((state) => state.loading.loadingCount);  // Hook incondicional
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (loadingCount > 0) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      setShow(true);
      return () => clearTimeout(timeoutId);
    }
  }, [loadingCount, setShow]);

  return (
    <>
      {/* Renderizado incondicional basado en isVisible */}
      {isVisible && (
        <div
          className={`fade-${loadingCount > 0
            ? "enter fade-enter-active"
            : "exit fade-exit-active"
            }`}
        >
          {typeof loading === 'function' ? loading() : loading}
        </div>
      )}
      {/* Renderizado de los children después de que isVisible es falso */}
      {!isVisible && children}
    </>
  );
};

export default LoadComponent;