// ============================================
// src/services/weatherAPI.js
// ============================================
// Servicio para interactuar con la API del clima
// Funciones principales:
// - fetchWeatherByCity(city): obtiene clima actual por nombre de ciudad
// - fetchWeatherByCoords(lat, lon): obtiene clima por coordenadas
// - fetchForecast(city): obtiene pronóstico extendido
// Maneja:
// - Construcción de URLs con parámetros
// - Headers y autenticación (API key)
// - Manejo de errores HTTP
// - Transformación de respuestas

import { API_CONFIG, APP_CONFIG} from '../utils/constants'

export const getWeatherData = async (city) => {
  try {
    // Construir la URL con los parámetros necesarios
    const baseUrl = API_CONFIG.BASE_URL;
    const endpoint = API_CONFIG.ENDPOINTS.CURRENT_WEATHER;
    const apiKey = API_CONFIG.KEY;
    const units = APP_CONFIG.UNITS;

    const url = `${baseUrl}${endpoint}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=${units}&lang=es`;
    
    console.log('Llamando a la API:', url.replace(apiKey, 'API_KEY_OCULTA'));
    
    // Hacer la petición a la API
    const response = await fetch(url);
    
    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Ciudad no encontrada. Verifica el nombre e intenta nuevamente.');
      } else if (response.status === 401) {
        throw new Error('API Key inválida. Por favor verifica tu configuración.');
      } else {
        throw new Error(`Error al obtener datos: ${response.status}`);
      }
    }
    
    // Parsear la respuesta JSON
    const data = await response.json();
    
    console.log('Datos recibidos de la API:', data);
    
    // Transformar los datos al formato que necesita nuestra app
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed * 3.6), // Convertir m/s a km/h
      coordinates: {
        lat: data.coord.lat,
        lon: data.coord.lon
      },
      icon: data.weather[0].icon,
      feelsLike: Math.round(data.main.feels_like)
    };
    
  } catch (error) {
    console.error('Error en getWeatherData:', error);
    // Re-lanzar el error para que App.jsx lo maneje
    throw error;
  }
};