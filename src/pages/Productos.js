//Config
import React, { useState } from 'react';
//Hooks
import useProductos from '../hooks/useProductos';
//Componentes
import LoadingSpinner from "../components/LoadingSpinner";
//CSS
import "../styles/Productos.css";

function Productos() {
  const { productos, cargando, error, filtrarProductos } = useProductos();
  const [buscar, setBuscar] = useState('');

  if (cargando) return <div className='loading'><LoadingSpinner /></div>
  if (error)  return <div className="error">{error}</div>;
  const productosFiltrados = filtrarProductos(buscar);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <input
        type="text"
        placeholder="Buscar producto"
        value={buscar}
        onChange={e => setBuscar(e.target.value)}
      />
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            {producto.id} - {producto.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
