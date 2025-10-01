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

function App() {
  // Estado para almacenar la ciudad actual buscada
  const [city, setCity] = useState('');

  // Función que recibe la ciudad desde SearchBar
  const handleSearch = (cityName) => {
    console.log('Ciudad recibida en App:', cityName);
    // Actualiza el estado con la nueva ciudad
    setCity(cityName);
    // Aquí más adelante haremos la llamada a la API
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

      {/* Pasamos la función handleSearch como prop al SearchBar */}
      <SearchBar onSearch={handleSearch} />

      {/* Mostramos la ciudad actual si existe */}
      {city && (
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          padding: '30px 50px',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center',
          marginTop: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>
            Ciudad seleccionada:
          </h2>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: 0 }}>
            📍 {city}
          </p>
        </div>
      )}

      {/* Mensaje inicial si no hay ciudad */}
      {!city && (
        <p style={{
          color: 'white',
          fontSize: '18px',
          opacity: 0.9,
          marginTop: '20px',
          textAlign: 'center'
        }}>
          👆 Busca una ciudad para ver su clima
        </p>
      )}
    </div>
  );
}

export default App;