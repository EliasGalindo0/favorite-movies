import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import Context from "../Context/Context";

function MovieCard() {
  const [filter, setFilter] = useState("year");

  const { movies } = useContext(Context);

  const handler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <nav>
        <div className='navbar'>
          <h2>Filtrar por:</h2>
          <label htmlFor='filters' className='select'>
            <select id='filters' onChange={handler}>
              <option value='year'>Ano de Lancamento</option>
              <option value='name'>Nome do Filme</option>
              <option value='country'>País</option>
            </select>
          </label>
        </div>
      </nav>
      <div className='movies-container'>
        {movies.length > 0 &&
          movies
            .sort((a, b) => (a[filter] > b[filter] ? 1 : -1))
            .map((movie) => (
              <div key={movie.name} className='movie-card'>
                <img src={movie.image} alt={movie.name} />
                <h2>{movie.name}</h2>
                <p>
                  <FaStar /> {movie.year}
                </p>
                <p>
                  <FaStar /> {movie.director}
                </p>
                <p>
                  <FaStar /> {movie.country}
                </p>
              </div>
            ))}
      </div>
    </>
  );
}

export default MovieCard;
