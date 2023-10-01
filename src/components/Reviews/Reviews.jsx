import { getMovieReviews } from 'api/Movie.api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './../Loader/Loader';
import { ReviewsWrap } from './Reviews.styles';

const Reviews = () => {
  const { movieId } = useParams();

  const [review, setReview] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getMovieReviews(movieId);
        setReview(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsWrap>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {review &&
        (review.results.length ? (
          <ul>
            {review.results.map(descr => (
              <li key={descr.id}>
                <h3>Author: {descr.author}</h3>
                <p>{descr.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        ))}
    </ReviewsWrap>
  );
};

export default Reviews;
