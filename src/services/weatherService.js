import axios from "axios";

// Substitua pela sua chave de API
const API_KEY = "a91cdbf66c25352d7634297350876661";

// URL base correta da OpenWeatherMap
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city, neighborhood = "") => {
  const location = neighborhood ? `${city},${neighborhood}` : city;

  // Construir a URL com o endpoint correto
  const url = `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric&lang=pt`;

  try {
    const response = await axios.get(url);
    return response.data; // Retorna os dados recebidos da API
  } catch (error) {
    console.error("Erro ao buscar dados do clima", error);
    throw new Error("Erro ao buscar dados do clima");
  }
};

export { getWeather };
