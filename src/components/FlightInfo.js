import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  margin: 5px;
  padding: 10px;
`;

const FlightInfo = ({
  flight: { code, airline, plane, seats, passengers },
}) => {
  return (
    <Container>
      <p style={{ fontWeight: "bold", fontSize: "large" }}>{code}</p>
      <span>{`${plane} - ${airline}`}</span>
      <p>Pasajeros: {seats}</p>
      {passengers.map(({ name, age }) => (
        <div>{`${name} - ${age}`}</div>
      ))}
    </Container>
  );
};

export default FlightInfo;
