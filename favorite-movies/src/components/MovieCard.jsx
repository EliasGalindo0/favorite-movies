import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import Context from '../Context/Context';

function MovieCard () {
  
  const { movies, setValue, value } = useContext(Context);

  const handler = (target) => {
    setValue(target);
    console.log(value);
  };

  return (
    <>
     <nav>
      <div className="navbar">
        <h2>Filtrar por:</h2>
        <label htmlFor="year" className="checkbox">
              <select
                id="year"
                onChange={ () => { handler(value); } }
              >
                <option value="year">Ano de Lancamento</option>
                <option value="name">Nome do Filme</option>
                <option value="country">País</option>
              </select>
            </label>
      </div>
    </nav>
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
    </>
    )
};

export default MovieCard;
