import { useState, useEffect } from 'react';
import axios from 'axios';
import endpoints from '../api/config'; // Importa los endpoints

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
        setCargando(true);
      try {
        const respuesta = await axios.get(endpoints.productos);
        setProductos(respuesta.data);
        setError(null);
      } catch (err) {
        setError('Error al obtener los productos.');
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  const filtrarProductos = (query) => {
    return productos.filter(producto => {
        const minusculas = query.toLowerCase();
        return (
            producto.descripcion.toLowerCase().includes(minusculas) || 
            producto.id.toString().includes(minusculas)
        );
    });
  };


  return { productos, cargando, error, filtrarProductos };
};

export default useProductos;