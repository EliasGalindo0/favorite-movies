import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

function Home() {
  return (
    <div className='container'>
      <h2 className='title'>Meus Filmes Favoritos</h2>
      <MovieCard />
    </div>
  );
}

export default Home;
