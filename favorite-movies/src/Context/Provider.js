import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import axios from 'axios';

function Provider({ children }) {
  const [movies, setMovie] = useState([]);
  const [value, setValue] = useState('year');
  const [filter, setFilter] = useState();

  useEffect(() => {
    axios(process.env.REACT_APP_BASE_URL)
    .then(response => {
      setMovie(response.data);
    })
    .catch(err => console.error(err));
  }, []);

    useEffect(() => {
      const newMovies = movies.sort((a, b) => {
        return a[filter] - b[filter];
      });
      setMovie(newMovies);
    }, [movies, filter]);

  useEffect(() => {
    if(filter){
      movies.filter((item) => 
        item.name.toLowerCase().indexOf( filter.toLowerCase()))
    };
  }, [filter, movies]);

  const contextValue = {
    movies, setMovie, value, setValue, filter, setFilter
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
