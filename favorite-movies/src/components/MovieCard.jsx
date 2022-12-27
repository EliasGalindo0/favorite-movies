import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import Context from '../Context/Context';

function MovieCard () {
  const { movies } = useContext(Context)
  return (
    <div className="movies-container">
      {movies.length > 0 && movies.map((movie) =>
        <div key={movie.name} className="movie-card">
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
        </div>)}
      </div>
    )
};

export default MovieCard;
