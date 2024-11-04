//Config
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
//Paginas
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';
//Components
import Sidebar from './components/Sidebar';
//Style
import './styles/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Sidebar />
          <div className="content">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/clientes" element={<Clientes />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
