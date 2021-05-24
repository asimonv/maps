import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../WebSocket";
import FlightInfo from "./FlightInfo";

const Flights = () => {
  const { socket } = useContext(WebSocketContext) || {};

  const {
    flights: { flights: flightsData },
  } = useSelector(({ flights }) => ({ flights }));

  const onClickGetInfo = () => {
    if (socket) {
      socket.emit("FLIGHTS");
    }
  };

  return (
    <div>
      <p>Flights</p>
      <button onClick={onClickGetInfo}>Get info</button>
      <div style={{ height: "calc(100vh - 500px)", overflow: "scroll" }}>
        {flightsData.map(flight => (
          <FlightInfo flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default Flights;
