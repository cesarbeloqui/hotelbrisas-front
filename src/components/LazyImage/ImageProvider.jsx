import LoadComponent from "./LoadComponent";
import { useState } from "react";
import "./index.css"

const ImageProvider = ({ children, loading }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <LoadComponent loading={loading} useShow={[show, setShow]} />
      <div className="hidden23 show23">
        {show && children}
      </div>
    </>
  );
};
export default ImageProvider;
/* 
import { useState, useEffect } from "react";
import LoadComponent from "./LoadComponent";

const ImageProvider = ({ children, loading }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShow(true);
    }, 1000); // Ajusta este tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadComponent loading={loading} />}
      {show && children}
    </>
  );
};

export default ImageProvider;


*/