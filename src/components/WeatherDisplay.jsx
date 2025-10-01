// ============================================
// src/components/WeatherDisplay.jsx
// ============================================
// Componente principal de visualización del clima
// Muestra:
// - Temperatura actual
// - Condiciones climáticas
// - Ubicación
// - Información adicional (sensación térmica, humedad, viento)
// Recibe props con los datos del clima actual

function WeatherDisplay({ weather }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      padding: '40px',
      borderRadius: '25px',
      color: 'white',
      textAlign: 'center',
      minWidth: '450px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '36px', marginBottom: '5px', fontWeight: 'bold' }}>
        {weather.city}, {weather.country}
      </h2>
      <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '20px', textTransform: 'capitalize' }}>
        {weather.description}
      </p>
      
      <h1 style={{ fontSize: '72px', margin: '20px 0', fontWeight: 'bold' }}>
        {weather.temperature}°C
      </h1>
      
      <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '30px' }}>
        Sensación térmica: {weather.feelsLike}°C
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginTop: '25px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          padding: '20px',
          borderRadius: '15px'
        }}>
          <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>💧 Humedad</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{weather.humidity}%</p>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          padding: '20px',
          borderRadius: '15px'
        }}>
          <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>💨 Viento</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{weather.wind} km/h</p>
        </div>
      </div>

      <p style={{ fontSize: '12px', opacity: 0.7, marginTop: '20px' }}>
        📍 Coordenadas: {weather.coordinates.lat.toFixed(2)}, {weather.coordinates.lon.toFixed(2)}
      </p>
    </div>
  );
}

export default WeatherDisplay;