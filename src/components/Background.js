import React from "react";
import styled from "styled-components";

// Estilo para o componente de fundo
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  z-index: -1; // Para garantir que fique atrás do conteúdo principal
`;

const Background = ({ weatherCondition }) => {
  // Definindo o fundo com base na condição do tempo
  let backgroundImage;
  if (weatherCondition === "Clear") {
    // Use um GIF ou imagem de céu limpo
    backgroundImage = "/assets/night-sky.gif"; // Caminho para sua imagem ou GIF
  } else if (weatherCondition === "Cloudy") {
    backgroundImage = "/assets/cloudy-sky.gif"; // Outro exemplo de imagem ou gif
  } else {
    backgroundImage = "/assets/default-background.jpg"; // Imagem padrão caso não haja condição específica
  }

  return <BackgroundContainer backgroundImage={backgroundImage} />;
};

export default Background;
