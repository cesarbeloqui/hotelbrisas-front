import React, { useEffect, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";

const CustomPopup = ({ isActive}) => {
    const [refReady, setRefReady] = useState(false);
    let popupRef = useRef();

    useEffect(() => {
        if (refReady && isActive) {
            popupRef.openOn(map);
        }
    }, [isActive, refReady]);

    return (
        <Marker position={data.position}>
            <Popup
                ref={(r) => {
                    popupRef = r;
                    setRefReady(true);
                }}
            >
                Yupperz
            </Popup>
        </Marker>
    );
};

export default CustomPopup;