import React, { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import SearchBar from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import Background from "./components/Background";
import { getWeather } from "./services/weatherService";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // Adiciona um estado para controlar o carregamento
  const [error, setError] = useState(null); // Adiciona um estado para controlar erros

  const handleSearch = async (city, neighborhood) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getWeather(city, neighborhood);
      console.log("Dados retornados da API:", data); // Verifique a estrutura dos dados retornados
      setWeather(data); // Armazena os dados de clima no estado
    } catch (err) {
      setError("Erro ao buscar dados do clima. Tente novamente!");
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      {/* Atualizado aqui para usar current.condition.text */}
      <Background weather={weather?.current?.condition?.text || "clear"} />
      <SearchBar onSearch={handleSearch} />

      {/* Exibe uma mensagem de carregamento enquanto os dados não chegam */}
      {loading && <p>Carregando...</p>}

      {/* Exibe o erro se houver */}
      {error && <p>{error}</p>}

      {/* Exibe o WeatherCard somente se os dados de clima estiverem disponíveis */}
      {weather && !loading && <WeatherCard weather={weather} />}
    </>
  );
};

export default App;
