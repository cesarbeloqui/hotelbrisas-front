import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { Icon } from "leaflet";
import iconU from "@/assets/iconLocalizacionChico.png";
import { useEffect, useState } from "react";

const altura = 45
const r = 16 / 21

const icon = new Icon({
  iconUrl: iconU,
  iconSize: [altura * r, altura],
  iconAnchor: [altura / 2, altura],
  popupAnchor: [0, -altura],
});

const MapComponent = ({ className }) => {
  const [map, setMap] = useState(null);
  const markers = [
    {
      position: [-34.5910133, -54.1230068],
      href: "https://maps.app.goo.gl/S8obcYR8EDzhWeUR6",
      title: "Brisas de La Pedrera",
      address: "Santa Teresa s/n Esquina Laguna Merín, 27004 La Pedrera, Uruguay",
      hours: "",
      id: "sucursal1",
    },
  ];
  const zoom = 17

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          layer.openPopup();
        }
      });
    }
  }, [map]);

  return (
    <div className={className}>
      <MapContainer
        center={[-34.5910133, -54.1230968]}
        zoom={zoom}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <TileLayer
          attribution=""
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={icon}
            eventHandlers={{
              add: (e) => {
                e.target.openPopup();
              },
            }}
          >
            <Popup>
              <a
                href={marker.href}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="text-left popup" id={marker.id}>
                  <h3 className="text-celeste font-semibold text-lg">
                    {marker.title}
                  </h3>
                  <p className="text-xs font-bold text-gris">
                    {marker.address}
                  </p>
                  <p className="text-base text-letraMarron">{marker.hours}</p>
                  <p className="text-[0.6rem] text-letraMarron">
                    Click Acá para ir a Maps
                  </p>
                </div>
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;