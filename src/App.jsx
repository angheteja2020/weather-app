// ============================================
// src/App.jsx
// ============================================
// Componente raíz de la aplicación
// Responsable de:
// - Gestionar el estado global de la app (ciudad, datos del clima, loading, errores)
// - Orquestar la búsqueda de clima
// - Renderizar los componentes principales
// - Aplicar gradientes dinámicos según el clima

import { useState } from "react";
import SearchBar from './components/SearchBar';
import { getWeatherData } from "./services/weatherAPI";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorDisplay from "./components/ErrorDisplay";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  // Función que recibe la ciudad desde SearchBar
  const handleSearch = async (cityName) => {
    setCity(cityName)
    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      console.log('Buscando clima para:', cityName);
      
      // Llamar al servicio de API
      const data = await getWeatherData(cityName);
      
      console.log('Datos procesados:', data);
      
      // Actualizar el estado con los datos obtenidos
      setWeatherData(data);
      
    } catch (err) {
      // Manejar errores
      console.error('Error al buscar clima:', err);
      setError(err.message || 'Error al obtener el clima. Intenta nuevamente.');
      
    } finally {
      // Siempre desactivar el loading
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1 style={{
        color: 'white',
        marginBottom: '40px',
        fontSize: '52px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
      }}>
        ☀️ Weather App
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && !loading && <ErrorDisplay message={error} />}

      {weatherData && !loading && !error && (
        <WeatherDisplay weather={weatherData} />
      )}

      {/* Mensaje inicial */}
      {!weatherData && !loading && !error && (
        <p style={{
          color: 'white',
          fontSize: '18px',
          opacity: 0.9,
          marginTop: '20px',
          textAlign: 'center'
        }}>
          👆 Busca una ciudad para ver su clima actual
        </p>
      )}
    </div>
  );
}

export default App;