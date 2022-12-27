import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import axios from 'axios';

function Provider({ children }) {
  const [data, setData] = useState([]);
 const [movies, setMovie] = useState([]);
 const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  useEffect(() => {
    axios(process.env.REACT_APP_BASE_URL)
    .then(response => {
      setMovie(response.data);
      setData(response.data)
    })
    .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((actualFilter, index) => {
        const { comparison, value } = actualFilter;
        const array = index === 0 ? movies : data;
        const filtro = array.filter((movie) => {
          if (comparison === 'Ano de Lancamento') {
            return Number(movie.year).sort(function(a, b) {
              return a - b;
            });
          }
          if (comparison === 'Nome') {
            return movie.name.sort(function(a, b) {
              return a - b;
            });
          }
          return Number(movie.country) === Number(value);
        });
        setData(filtro);
        console.log(data);
      });
    }
  }, []);

  const contextValue = {
    movies,
    setMovie,
    filterByNumericValues,
    setfilterByNumericValues,
    data, 
    setData
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
