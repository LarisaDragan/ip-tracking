import { useState } from "react";
import IpTrackerComponent from "./components/IpTrackerComponent";
import MapComponent from "./components/MapComponent";
import "./App.css";

const baseURL = import.meta.env.VITE_BASE_URL || "/";

function App() {
  const [ipData, setIpData] = useState();

  return (
    <>
      <div id="container">
        <IpTrackerComponent setIpData={setIpData} />
      </div>

      <div id="background-image">
        <img
          src={`${baseURL}${"./images/pattern-bg-desktop.png"}`}
          alt="background-image"
          id="image"
        />
      </div>

      <div id="map-container">
        <MapComponent ipData={ipData} />
      </div>
    </>
  );
}

export default App;
