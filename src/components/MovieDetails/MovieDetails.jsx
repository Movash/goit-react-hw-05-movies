import { getMovieDetails } from "api/Movie.api";
import { Suspense, useEffect, useRef, useState } from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Loader from './../Loader/Loader';
import MovieCard from './../MovieCard/MovieCard';
import { DetailsWrap } from "./MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
      fetchDetails();
  }, [movieId]);

  const handleClickBackBtn = () => {
    navigate(backLinkLocationRef.current);
  }

  return (
    <DetailsWrap>
      <button onClick={handleClickBackBtn}>⬅ Go back</button>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {movie && <MovieCard movie={movie} />}
      <p className="add-info">Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </DetailsWrap>
  );
}

export default MovieDetails