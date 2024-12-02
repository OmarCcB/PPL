import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleUpload = () => {
    if (!file || !fileName) {
      alert('Selecciona un archivo y proporciona un nombre.');
      return;
    }

    alert(`Archivo ${fileName} subido correctamente.`);
    // Aquí podrías enviar el archivo al backend con una API.
  };

  return (
    <div>
      <h2>Subir Archivos</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Nombre del archivo"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <button onClick={handleUpload}>Subir</button>
    </div>
  );
}

export default Upload;
