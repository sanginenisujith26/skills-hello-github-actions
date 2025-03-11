import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ geojson }) => {
  if (!geojson) return null;

  return (
    <MapContainer center={[20, 78]} zoom={4} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {geojson.features.map((feature, index) => {
        if (feature.geometry.type === "LineString" || feature.geometry.type === "MultiLineString") {
          return (
            <Polyline
              key={index}
              positions={feature.geometry.coordinates.map(([lon, lat]) => [lat, lon])}
              color="blue"
            />
          );
        }
        return null;
      })}
    </MapContainer>
  );
};

export default MapView;
