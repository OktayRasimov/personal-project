import "./Map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { animate, motion } from "framer-motion";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Map = () => {
  return (
    <motion.div
      className="map-container"
      // animate={{ x: [200, 0], scale: [0.8, 0.8, 0.8, 0.8, 1] }}
      initial={{ opacity: 0 }}
      whileInView={{ x: [200, 0], scale: [0.8, 0.8, 0.8, 0.8, 1], opacity: 1 }}
      transition={{ duration: 1.6 }}
      // initial={{ x: 400, scale: 0.8, opacity: 0 }}
      // whileInView={{ x: 0, scale: 1, opacity: 1 }}
      // transition={{ duration: 1.2, delay: 1 }}
    >
      <MapContainer center={[42.01505123295127, 24.86028316137983]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        <Marker
          position={[42.01505123295127, 24.86028316137983]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>umnite sled 7mi zapisvat kiriloto ne pld</Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
};

export default Map;
