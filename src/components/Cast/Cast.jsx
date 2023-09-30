import { getMovieCredits } from 'api/Movie.api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './../Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const defaultImg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRULocmP6cP6JYFZmzMlbVHbWwu-oAdX5NaQ&usqp=CAU';

  return (
    <>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {cast && (
        <ul>
          {cast.cast.map(person => (
            <li key={person.id}>
              <img
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${person.profile_path}`
                    : defaultImg
                }
                alt={cast.cast.name}
                width="200px"
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
