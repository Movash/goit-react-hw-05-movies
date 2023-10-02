import { getSearchMovies } from 'api/Movie.api';
import { useCallback, useEffect, useState } from 'react';
import Searchbar from './../../components/Searchbar/Searchbar';
import MovieGallery from './../../components/MovieGallery/MovieGallery';
import Loader from './../../components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSearchParams } from 'react-router-dom';
import { MoviesWrap } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams()
  const query = searchParams.get('search')

  const fetchMovies = useCallback(async (searchText) => {
    try {
      setIsLoading(true);
      setError('');
      const data = await getSearchMovies(searchText);
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
  }, []);
  
  useEffect(() => {
    query && fetchMovies(query);
  }, [fetchMovies, query]);

  return (
    <MoviesWrap>
      {error && <h1>{error}</h1>}
      <Searchbar />
      {isLoading && <Loader />}
      {!movies.length ? null : <MovieGallery movies={movies} />}
    </MoviesWrap>
  );
};

export default Movies;

// import { getSearchMovies } from 'api/Movie.api';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import Searchbar from './../../components/Searchbar/Searchbar';
// import MovieGallery from './../../components/MovieGallery/MovieGallery';
// import Loader from './../../components/Loader/Loader';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { useSearchParams } from 'react-router-dom';
// import { MoviesWrap } from './Movies.styled';

// const Movies = () => {
//   const [movies, setMovies] = useState([])
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const [searchParams] = useSearchParams()
//   const query = searchParams.get('search')
//   const ref = useRef(query);

//   const fetchMovies = useCallback(async (searchText) => {
//     try {
//       setIsLoading(true);
//       setError('');
//       const data = await getSearchMovies(searchText);
//       if (!data.results.length) {
//         Notify.info(`No movies`);
//         return;
//       }
//       setMovies(data.results);
//     } catch ({ message }) {
//       setError(message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     searchQuery && fetchMovies(searchQuery);
//   }, [fetchMovies, searchQuery]);

//   useEffect(() => {
//     ref.current && fetchMovies(ref.current)
//   }, [fetchMovies]);
  

//   const handleSetSearchQuery = value => {
//     if (!value.trim() || value === searchQuery) {
//       Notify.info(`Change your search query`);
//       return;
//     }
//     setSearchQuery(value);
//     setMovies([]);
//   };

//   return (
//     <MoviesWrap>
//       {error && <h1>{error}</h1>}
//       <Searchbar onSubmit={handleSetSearchQuery} />
//       {isLoading && <Loader />}
//       {!movies.length ? null : <MovieGallery movies={movies} />}
//     </MoviesWrap>
//   );
// };

// export default Movies;