import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div>
      <h1>Título</h1>
      <input 
        type="text" 
        value={imageUrl} 
        onChange={(e) => setImageUrl(e.target.value)} 
        placeholder="Ingrese la URL de la imagen"
      />
      <button onClick={() => console.log('Análisis de imagen')}>Analizar Imagen</button>
      <button onClick={() => console.log('Generación de imagen')}>Generar Imagen</button>
    </div>
  );
}

export default App;