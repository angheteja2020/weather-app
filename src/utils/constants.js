// ============================================
// src/utils/constants.js
// ============================================
// Constantes de configuración de la aplicación
// Incluye:
// - API_KEY: clave de OpenWeatherMap u otra API
// - BASE_URL: URL base de la API
// - UNITS: sistema de unidades (metric/imperial)
// - DEFAULT_CITY: ciudad por defecto al cargar
// - ENDPOINTS: rutas de los endpoints


const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const API_CONFIG = {
    KEY: apiKey,
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    ENDPOINTS: {
        CURRENT_WEATHER: '/weather',
        FORECAST: '/forecast'
    }
};

export const APP_CONFIG = {
    UNITS: 'metric',
    DEFAULT_CITY: 'Phoenix'
}