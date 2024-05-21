import React from 'react';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average } = movie;

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>Rating: {vote_average}</p>
    </div>
  );
};

export default MovieCard;
