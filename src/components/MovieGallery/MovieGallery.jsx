import React from 'react';
import MovieGalleryItem from './../MovieGalleryItem/MovieGalleryItem';

const MovieGallery = ({ movies }) => (
  <ul className="MovieGallery">
    {movies.map(movie => (
      <MovieGalleryItem key={movie.id} movie={movie} />
    ))}
  </ul>
);

export default MovieGallery;