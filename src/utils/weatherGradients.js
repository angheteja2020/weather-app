// ============================================
// src/utils/weatherGradients.js
// ============================================
// Mapeo de condiciones climáticas a gradientes de color
// Define paletas de colores para:
// - Clear/Soleado: amarillos, naranjas
// - Clouds/Nublado: grises, azules claros
// - Rain/Lluvia: azules oscuros, grises
// - Snow/Nieve: blancos, azules claros
// - Thunderstorm/Tormenta: morados, grises oscuros
// Retorna strings de CSS gradient

export const weatherGradients = {
  Clear: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  Clouds: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
  Rain: 'linear-gradient(135deg, #4b79a1 0%, #283e51 100%)',
  Snow: 'linear-gradient(135deg, #e6dada 0%, #274046 100%)',
  Thunderstorm: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
  // Más condiciones pendientes
};

export const getGradientByCondition = (condition) => {
  // Implementación pendiente
  return null;
};