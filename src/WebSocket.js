import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import wsConfig from "./config/ws";
import { useDispatch } from "react-redux";
import { receiveMessage } from "./actions/chat";
import { receivePosition, receiveFlights } from "./actions/flights";

const WebSocketContext = createContext(null);

export { WebSocketContext };

const WebSocketProvider = ({ children }) => {
  const [ws, setWs] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(wsConfig.WS_BASE, { path: wsConfig.WS_PATH });

    socket.on("CHAT", payload => {
      console.warn(payload);
      dispatch(receiveMessage(payload));
    });

    socket.on("POSITION", payload => {
      dispatch(receivePosition(payload));
    });

    socket.on("FLIGHTS", payload => {
      dispatch(receiveFlights(payload));
    });

    setWs({ socket });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [dispatch]);

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
