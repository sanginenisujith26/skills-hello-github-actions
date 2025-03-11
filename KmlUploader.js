import React, { useState } from "react";
import { parseString } from "xml2js";
import * as toGeoJSON from "@mapbox/togeojson";

const KmlUploader = ({ onKmlParsed }) => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();

      reader.onload = (e) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(e.target.result, "text/xml");
        const geojson = toGeoJSON.kml(kml);
        onKmlParsed(geojson);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".kml" onChange={handleFileUpload} />
      {fileName && <p>Uploaded: {fileName}</p>}
    </div>
  );
};

export default KmlUploader;
