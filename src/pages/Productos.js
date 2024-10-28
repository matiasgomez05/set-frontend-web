import React, { useEffect, useState } from "react";
import axios from "axios";
//Componentes
import LoadingSpinner from "../components/LoadingSpinner";
//CSS
import "../styles/Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/productos")
      .then((response) => {
        setProductos(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setError(
          "Error al obtener los productos. Intente nuevamente o contacte al administrador."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />
    //<div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.id} - {producto.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
