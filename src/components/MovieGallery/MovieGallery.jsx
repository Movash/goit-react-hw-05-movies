import React from 'react';
import MovieGalleryItem from './../MovieGalleryItem/MovieGalleryItem';
import { GalleryList } from './MovieGallery.styled';

const MovieGallery = ({ movies }) => (
  <GalleryList className="MovieGallery">
    {movies.map(movie => (
      <MovieGalleryItem key={movie.id} movie={movie} />
    ))}
  </GalleryList>
);

export default MovieGallery;