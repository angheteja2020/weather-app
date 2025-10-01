// ============================================
// src/components/SearchBar.jsx
// ============================================
// Barra de búsqueda para ciudades
// Funcionalidades:
// - Input controlado para ingresar nombre de ciudad
// - Botón de búsqueda
// - Manejo de submit (Enter + click)
// - Validación básica de input
// Emite evento onSearch al componente padre

import { useState } from 'react';

function SearchBar({ onSearch }) {
  // Estado local para controlar el valor del input
  const [inputValue, setInputValue] = useState('');

  // Maneja el cambio en el input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Maneja el clic en el botón de búsqueda
  const handleSearchClick = () => {
    // Solo envía si hay texto
    if (inputValue.trim()) {
      // Levanta el valor al componente padre
      onSearch(inputValue.trim());
      // Limpia el input después de buscar
      setInputValue('');
    }
  };

  // Maneja la tecla Enter en el input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      marginBottom: '30px'
    }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Escribe el nombre de una ciudad..."
        style={{
          padding: '14px 20px',
          fontSize: '16px',
          borderRadius: '25px',
          border: '2px solid rgba(255,255,255,0.3)',
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: 'white',
          width: '350px',
          outline: 'none'
        }}
      />
      <button
        onClick={handleSearchClick}
        style={{
          padding: '14px 35px',
          fontSize: '16px',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: 'rgba(255,255,255,0.9)',
          color: '#667eea',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'white'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.9)'}
      >
        🔍 Buscar
      </button>
    </div>
  );
}

export default SearchBar;