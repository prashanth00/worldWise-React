// import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log("lat" + lat);
  console.log("lng" + lng);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h2>
        Position: lat={lat} lng={lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 12, lng: 13 })}>
        change
      </button>
    </div>
  );
}
