import React from "react";

const SummaryTable = ({ geojson }) => {
  if (!geojson) return null;

  const counts = geojson.features.reduce((acc, feature) => {
    const type = feature.geometry.type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h3>Summary</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Element Type</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(counts).map(([type, count]) => (
            <tr key={type}>
              <td>{type}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
