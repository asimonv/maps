import React from "react";
import Chat from "../components/Chat";
import Flights from "../components/Flights";
import FlightsMap from "../components/FlightsMap";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ flexDirection: "column", flex: 1 }}>
          <div style={{ flex: 1, height: "400px" }}>
            <p>Map</p>
            <FlightsMap />
          </div>
          <Flights />
        </div>
        <div style={{ flex: 1 }}>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
