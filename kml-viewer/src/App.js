import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <h1>KML File Viewer</h1>
      <input type="file" accept=".kml" onChange={handleFileUpload} />
      {file && <p>File uploaded: {file.name}</p>}
    </div>
  );
}

export default App;