import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

import './MoviesGrid.css';

function Home() {

  return (
    <div className="container">
      <h2 className="title">Meus Filmes Favoritos</h2>
        <NavBar />
        <MovieCard />
    </div>
  );
};

export default Home;
