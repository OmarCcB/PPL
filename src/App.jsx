import React, { useState } from 'react';
import Auth from './Auth';
import Upload from './Upload';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <>
          <Upload />
          <Dashboard />
        </>
      )}
    </div>
  );
}

export default App;
