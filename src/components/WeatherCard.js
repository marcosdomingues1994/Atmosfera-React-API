import React from "react";
import styled from "styled-components";

// Definindo o componente Card estilizado com a prop de background
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$background || "#f9f9f9"}; /* Usando a prop $background */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 20px auto;
`;

export const WeatherCard = ({ weather, background }) => {
  return (
    <Card $background={background}>
      {" "}
      {/* Passando o background como prop transient */}
      <h2>{weather.location?.name}</h2>
      <p>{weather.current?.condition?.text}</p>
      <p>Temperatura: {weather.current?.temp_c}°C</p>
      <p>Umidade: {weather.current?.humidity}%</p>
      <p>Vento: {weather.current?.wind_kph} km/h</p>
    </Card>
  );
};
