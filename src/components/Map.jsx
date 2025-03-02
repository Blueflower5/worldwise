import { useNavigate, useSearchParams } from "react-router-dom";
import { MapCountainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import { useState } from "react";
import { useCities } from "../Contexts/CitiesContexts";
function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchPrams, setSearchPrams] = useSearchParams();
  const lat = searchPrams.get("lat");
  const lng = searchPrams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lat]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
