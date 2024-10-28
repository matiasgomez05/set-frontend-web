//Config
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';
//Style
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
