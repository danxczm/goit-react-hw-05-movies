import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getMovieDetailsAxios } from 'api/fetchData';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    getMovieDetailsAxios(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) return null;

  const backLink = location.state?.from ?? '/';
  const { original_title, overview, genres } = movie;

  return (
    <main>
      <Link to={backLink}>Go back</Link>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        {movie && (
          <div>
            <h2>{original_title}</h2>
            <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres.map(el => el.name).join(', ')}</p>
          </div>
        )}
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
