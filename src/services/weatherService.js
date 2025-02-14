import axios from "axios";

const API_KEY = "SUAKEY";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city, neighborhood = "") => {
  const location = neighborhood ? `${city},${neighborhood}` : city;

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
