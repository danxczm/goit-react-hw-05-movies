import { getMovieCastAxios } from 'api/fetchData';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const defaultImg = 'https://pbs.twimg.com/media/EnEtA72XIAIsY5i.jpg';

  useEffect(() => {
    getMovieCastAxios(movieId).then(setCast);
  }, [movieId]);

  return (
    cast && (
      <ul>
        {cast.map(({ id, original_name, character, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : defaultImg
              }
              width={200}
              height={300}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
