import React from "react";

const calculateLength = (coordinates) => {
  let length = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    const [lon1, lat1] = coordinates[i];
    const [lon2, lat2] = coordinates[i + 1];

    const R = 6371; // Earth radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    length += R * c;
  }
  return length.toFixed(2);
};

const DetailTable = ({ geojson }) => {
  if (!geojson) return null;

  const details = geojson.features
    .filter((f) => f.geometry.type === "LineString" || f.geometry.type === "MultiLineString")
    .map((f, index) => ({
      type: f.geometry.type,
      length: calculateLength(f.geometry.coordinates),
    }));

  return (
    <div>
      <h3>Detailed Information</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Element Type</th>
            <th>Total Length (km)</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.type}</td>
              <td>{detail.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
