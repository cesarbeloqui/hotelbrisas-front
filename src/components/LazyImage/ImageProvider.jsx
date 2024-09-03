import LoadComponent from "./LoadComponent";

import { useState } from "react";
import "./index.css"

const ImageProvider = ({ children, loading }) => {
  const [show, setShow] = useState(false)
  return (
    /*     <Provider store={store}> */
    <>
      <LoadComponent loading={loading} useShow={[show, setShow]}>
      </LoadComponent>
      {show && children}
    </>
    /*     </Provider> */
  );
};
export default ImageProvider;
