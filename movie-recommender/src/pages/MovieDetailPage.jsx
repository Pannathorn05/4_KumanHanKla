import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { mockMovies } from "../data/mockMovies";

const initialComments = [
  // ตัวอย่าง comment (เอาไปต่อกับ backend ทีหลังได้)
  {
    id: 1,
    movieId: "rev-1",
    author: "Guest",
    text: "ภาพสวยมาก ชอบบรรยากาศ",
    createdAt: "2025-11-01"
  }
];

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(mockMovies);
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState("");

  const movie = useMemo(
    () => movies.find((m) => m.id === id),
    [id, movies]
  );

  if (!movie) {
    return (
      <div className="page">
        <p>ไม่พบหนังที่คุณเลือก</p>
      </div>
    );
  }

  const handleLike = () => {
    // TODO: POST /movies/:id/like
    setMovies((prev) =>
      prev.map((m) =>
        m.id === movie.id ? { ...m, likes: m.likes + 1 } : m
      )
    );
  };

  const handleDislike = () => {
    // TODO: POST /movies/:id/dislike
    setMovies((prev) =>
      prev.map((m) =>
        m.id === movie.id ? { ...m, dislikes: m.dislikes + 1 } : m
      )
    );
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    // TODO: POST /movies/:id/comments
    const newComment = {
      id: Date.now(),
      movieId: movie.id,
      author: "คุณ",
      text: commentText.trim(),
      createdAt: new Date().toISOString().slice(0, 10)
    };
    setComments((prev) => [...prev, newComment]);
    setCommentText("");
  };

  const movieComments = comments.filter((c) => c.movieId === movie.id);

  return (
    <div className="page movie-detail-page">
      <div className="movie-detail-layout">
        <div className="movie-detail-poster">
          <img src={movie.posterUrl} alt={movie.title} />
        </div>

        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <p className="movie-detail-tagline">{movie.tagline}</p>

          <p className="movie-detail-meta">
            {movie.year} • {movie.genre.toUpperCase()} • Rating {movie.rating}
          </p>

          <div className="movie-detail-actions">
            <button className="btn-like" onClick={handleLike}>
              👍 {movie.likes}
            </button>
            <button className="btn-dislike" onClick={handleDislike}>
              👎 {movie.dislikes}
            </button>
          </div>

          <p className="movie-detail-description">
            {/* เอาไว้ใส่คำบรรยายจาก backend */}
            คำบรรยายหนังจะมาอยู่ตรงนี้ (description จาก backend)
          </p>
        </div>
      </div>

      <section className="comment-section">
        <h2>ความคิดเห็น</h2>

        <form className="comment-form" onSubmit={handleAddComment}>
          <textarea
            placeholder="แสดงความคิดเห็นเกี่ยวกับหนังเรื่องนี้..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            ส่งความคิดเห็น
          </button>
        </form>

        <div className="comment-list">
          {movieComments.length === 0 && (
            <p className="comment-empty">ยังไม่มีความคิดเห็น</p>
          )}
          {movieComments.map((c) => (
            <div key={c.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-author">{c.author}</span>
                <span className="comment-date">{c.createdAt}</span>
              </div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieDetailPage;
