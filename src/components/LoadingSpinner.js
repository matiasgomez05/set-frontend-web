import React from 'react';
import '../styles/LoadingSpinner.css'; // Importa los estilos de CSS

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-ball"></div>
      <div className="spinner-ball"></div>
      <div className="spinner-ball"></div>
    </div>
  );
};

export default LoadingSpinner;