// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// Importa otros componentes de páginas aquí

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Añadir otras rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
