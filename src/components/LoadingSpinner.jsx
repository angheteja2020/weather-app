// ============================================
// src/components/LoadingSpinner.jsx
// ============================================
// Spinner animado de carga
// Se muestra mientras se obtienen datos de la API
// Puede incluir:
// - Animación CSS de spinner
// - Mensaje de "Cargando..."
// - Diseño centrado y con overlay opcional
function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center', padding: '40px', color: 'white' }}>
      <div style={{
        border: '4px solid rgba(255,255,255,0.3)',
        borderTop: '4px solid white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite',
        margin: '0 auto'
      }}></div>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>Cargando clima...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default LoadingSpinner;