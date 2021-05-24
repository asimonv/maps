import React from "react";
import {
  MapContainer,
  Polyline,
  TileLayer,
  Circle,
  Marker,
  Tooltip,
} from "react-leaflet";
import { useSelector } from "react-redux";
import { planeIcon } from "./PlaneMarker";

const FlightsMap = () => {
  const {
    flights: { flights: flightsData, positions },
  } = useSelector(({ flights }) => ({ flights }));

  return (
    <MapContainer
      center={[35.6751, 71.543]}
      scrollWheelZoom={false}
      zoom={2}
      style={{ height: 400 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flightsData.map(({ origin, destination, code, color }) => (
        <>
          <Circle center={origin} pathOptions={{ color }} radius={2000} />
          <Polyline
            key={code}
            positions={[origin, destination]}
            pathOptions={{
              dashArray: [10, 10],
              color,
            }}
          />
          <Circle center={destination} pathOptions={{ color }} radius={2000} />
        </>
      ))}
      {[...positions.keys()].map(x => {
        const flightLocation = positions.get(x);
        if (flightLocation) {
          return (
            <Marker
              icon={planeIcon}
              position={{
                lat: flightLocation[0],
                lng: flightLocation[1],
              }}
            >
              <Tooltip>{x}</Tooltip>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  );
};

export default FlightsMap;
