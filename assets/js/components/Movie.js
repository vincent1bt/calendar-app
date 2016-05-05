import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
        <div className="title">
          <h3 className="title-p" >{movie.get("title")}</h3>
          <p className="title-over" >{movie.get("overview")}</p>
        </div>
        <div className="image">
          <img src={`http://image.tmdb.org/t/p/w500${movie.get("poster_path")}`} alt={movie.get("title")} />
        </div>
    </div>
  );
}

export default Movie;
