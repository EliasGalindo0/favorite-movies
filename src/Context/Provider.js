import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Context from "./Context";
import axios from "axios";

function Provider({ children }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios(process.env.REACT_APP_BASE_URL)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const contextValue = {
    movies,
    setMovie,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
