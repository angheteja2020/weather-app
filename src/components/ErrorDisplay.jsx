// ============================================
// src/components/ErrorDisplay.jsx
// ============================================
// Componente para mostrar mensajes de error
// Casos de uso:
// - Ciudad no encontrada
// - Error de red
// - API key inválida
// - Otros errores
// Recibe props: mensaje de error y opcionalmente tipo de error

function ErrorDisplay({ message }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255, 100, 100, 0.3)',
      border: '2px solid rgba(255, 100, 100, 0.5)',
      padding: '25px',
      borderRadius: '15px',
      color: 'white',
      textAlign: 'center',
      maxWidth: '500px'
    }}>
      <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>❌ Error</h3>
      <p style={{ fontSize: '16px', margin: 0 }}>{message}</p>
    </div>
  );
}

export default ErrorDisplay;