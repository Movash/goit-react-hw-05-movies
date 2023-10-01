import React from 'react'

const MovieCard = ({movie}) => {
  const defaultImg = 'https://www.micreate.eu/wp-content/img/default-img.png';
  return (
    <div className='card-wrapper'>
      <div className='film-image'>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
              : defaultImg
          }
          alt={movie.title}
          width="300px"
        />
      </div>
      <div className='film-descr'>
        <h2>{movie.title}</h2>
        <p>Reliese date: {movie.release_date}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movie.genres.map(movie => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieCard