import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onLike, onDislike }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-card-image-wrapper">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="movie-card-image"
        />
      </Link>
      <div className="movie-card-body">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-meta">
          {movie.year} • {movie.genre.toUpperCase()}
        </p>
        <p className="movie-card-tagline">{movie.tagline}</p>
        <div className="movie-card-actions">
          <button
            className="btn-like"
            onClick={() => onLike && onLike(movie)}
          >
            👍 {movie.likes}
          </button>
          <button
            className="btn-dislike"
            onClick={() => onDislike && onDislike(movie)}
          >
            👎 {movie.dislikes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
