import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Params {
  ipData?: Record<string, any>;
}

const MapComponent: React.FC<Params> = ({ ipData }) => {
  const latPosition = ipData?.location?.lat;
  const lngPosition = ipData?.location.lng;

  const SetLocationMarker = () => {
    const map = useMapEvents({
      locationfound: (location) => {
        map.flyTo(location.latlng, map.getZoom());
      },
    });

    if (latPosition && lngPosition) {
      map.flyTo([latPosition, lngPosition], map.getZoom());
    }

    return location === null ? null : (
      <Marker position={[latPosition, lngPosition]}>
        <Popup>
          {ipData?.location.city} <br /> {ipData?.ip}
        </Popup>
      </Marker>
    );
  };

  return (
    <>
      <MapContainer
        id="map"
        center={[latPosition || 51.505, lngPosition || -0.09]}
        zoom={18}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ipData && <SetLocationMarker />}
      </MapContainer>
    </>
  );
};

export default MapComponent;
