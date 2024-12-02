import React, { useState } from 'react';

function Auth({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setUser({ email }); // Simula el inicio de sesión
    } else {
      alert('Por favor, ingresa un email y contraseña válidos.');
    }
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Auth;
