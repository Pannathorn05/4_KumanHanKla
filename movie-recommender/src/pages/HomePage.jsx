import React, { useState } from "react";
import { mockMovies } from "../data/mockMovies";
import MovieRow from "../components/movies/MovieRow";

const HomePage = () => {
  const [movies, setMovies] = useState(mockMovies);

  const heroMovies = movies.filter((m) => m.sectionTags.includes("hero"));
  const popularMovies = movies.filter((m) => m.sectionTags.includes("popular"));
  const romanceMovies = movies.filter((m) => m.sectionTags.includes("romance"));

  const handleLike = (movie) => {
    // TODO: เรียก API /movies/:id/like
    setMovies((prev) =>
      prev.map((m) =>
        m.id === movie.id ? { ...m, likes: m.likes + 1 } : m
      )
    );
  };

  const handleDislike = (movie) => {
    // TODO: เรียก API /movies/:id/dislike
    setMovies((prev) =>
      prev.map((m) =>
        m.id === movie.id ? { ...m, dislikes: m.dislikes + 1 } : m
      )
    );
  };

  return (
    <div className="page home-page">
      {/* Hero */}
      {heroMovies.length > 0 && (
        <section className="hero-section">
          <div className="hero-slider">
            {heroMovies.map((movie) => (
              <div key={movie.id} className="hero-slide">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="hero-image"
                />
                <div className="hero-overlay">
                  <h1 className="hero-title">{movie.title}</h1>
                  <p className="hero-tagline">{movie.tagline}</p>
                  <div className="hero-meta">
                    <span>{movie.year}</span>
                    <span>• {movie.genre.toUpperCase()}</span>
                  </div>
                  <div className="hero-actions">
                    <button
                      className="btn-like"
                      onClick={() => handleLike(movie)}
                    >
                      👍 {movie.likes}
                    </button>
                    <button
                      className="btn-dislike"
                      onClick={() => handleDislike(movie)}
                    >
                      👎 {movie.dislikes}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="hero-dots">
              {heroMovies.map((m, index) => (
                <span key={m.id} className="dot">
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rows */}
      <MovieRow
        title="หนังยอดนิยม"
        movies={popularMovies}
        onLike={handleLike}
        onDislike={handleDislike}
      />
      <MovieRow
        title="หนังโรแมนซ์แนะนำ"
        movies={romanceMovies}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </div>
  );
};

export default HomePage;
