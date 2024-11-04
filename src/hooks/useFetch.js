import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (link) => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    axios.get(url)
      .then(respuesta => {
        setDatos(respuesta.data);
        setError(null);
      })
      .catch(err => {
        setError('Error al obtener los datos. Por favor, intenta nuevamente o contacte al administrador.');
      })
      .finally(() => {
        setCargando(false);
      });
  }, [link]);

  return { datos, cargando, error };
};

export default useFetch;