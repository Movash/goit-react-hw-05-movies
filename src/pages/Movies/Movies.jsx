import { getSearchMovies } from 'api/Movie.api';
import { useCallback, useEffect, useState } from 'react';
import Searchbar from './../../components/Searchbar/Searchbar';
import MovieGallery from './../../components/MovieGallery/MovieGallery';
import Loader from './../../components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import React from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      const data = await getSearchMovies(searchQuery);
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
  }, [searchQuery]);

  useEffect(() => {
    searchQuery && fetchMovies();
  }, [fetchMovies, searchQuery]);

  const handleSetSearchQuery = value => {
    if (!value.trim() || value === searchQuery) {
      Notify.info(`Change your search query`);
      return;
    }
    setSearchQuery(value);
    setMovies([]);
  };

  return (
    <div className="Movies">
      {error && <h1>{error}</h1>}
      <Searchbar onSubmit={handleSetSearchQuery} />
      {isLoading && <Loader />}
      {!movies.length ? null : <MovieGallery movies={movies} />}
    </div>
  );
};

export default Movies;