import React from "react";
import logo from './logo.svg';
import './App.css';
import KmlUploader from "./KmlUploader";
import SummaryTable from "./SummaryTable";
import DetailTable from "./DetailTable";
import MapView from "./MapView";

function App() {
  return (
    <div>
      <h2>KML File Viewer</h2>
      <KmlUploader onKmlParsed={setGeojson} />
      <button onClick={() => console.log(geojson)}>Log Data</button>
      <SummaryTable geojson={geojson} />
      <DetailTable geojson={geojson} />
      <MapView geojson={geojson} />
    </div>
  );
}

export default App;
