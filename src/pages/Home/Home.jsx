import { getTrending } from 'api/Movie.api';
import { useEffect, useState } from 'react';
import MovieGallery from './../../components/MovieGallery/MovieGallery';
import Loader from './../../components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Home = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchTrending = async () => {
        try {
          setIsLoading(true);
          setError('');
          const data = await getTrending();
          if (!data.results.length) {
            Notify.info(`No movies`);
            return;
          }
          setMovies(data.results);
        } catch ({ message }) {
          setError(message);
        } finally {
          setIsLoading(false);
        }
      };
        fetchTrending();
    }, []);

  return (
    <>
      <h2>Trending today</h2>
      <div className="Movies">
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        {!movies.length ? null : <MovieGallery movies={movies} />}
      </div>
    </>
  );
};

export default Home;