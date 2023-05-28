import { useState, useEffect } from 'react';
import { getTrendingAxios } from 'api/fetchData';
import MovieList from 'components/MovieList/MovieList';
const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingAxios()
      .then(result => setMovies([...result]))
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Home;
