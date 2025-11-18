import React from "react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies, onLike, onDislike }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="movie-row">
      <div className="movie-row-header">
        <h2>{title}</h2>
      </div>
      <div className="movie-row-list">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            movie={m}
            onLike={onLike}
            onDislike={onDislike}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
