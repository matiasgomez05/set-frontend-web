import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(response => {
        setData(response.data);
        setError(null);
      })
      .catch(err => {
        setError('Error al obtener los datos. Por favor, intenta nuevamente o contacte al administrador.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;