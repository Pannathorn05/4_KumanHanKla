import React, { useState } from "react";
import { mockMovies } from "../data/mockMovies";

const emptyMovie = {
  id: "",
  title: "",
  tagline: "",
  genre: "action",
  subgenre: "",
  year: "",
  rating: "",
  posterUrl: "",
  sectionTags: []
};

const AdminDashboard = () => {
  const [movies, setMovies] = useState(mockMovies);
  const [editingMovie, setEditingMovie] = useState(null);
  const [form, setForm] = useState(emptyMovie);

  const handleEdit = (movie) => {
    setEditingMovie(movie.id);
    setForm(movie);
  };

  const handleDelete = (movie) => {
    // TODO: DELETE /movies/:id
    if (!window.confirm(`ลบหนังเรื่อง ${movie.title}?`)) return;
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSectionTagsChange = (e) => {
    const value = e.target.value;
    const tags = value.split(",").map((t) => t.trim()).filter(Boolean);
    setForm((prev) => ({ ...prev, sectionTags: tags }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingMovie) {
      // TODO: PUT /movies/:id
      setMovies((prev) =>
        prev.map((m) => (m.id === editingMovie ? { ...form } : m))
      );
    } else {
      // TODO: POST /movies
      const id = form.id || Date.now().toString();
      setMovies((prev) => [...prev, { ...form, id }]);
    }

    setEditingMovie(null);
    setForm(emptyMovie);
  };

  const handleCancel = () => {
    setEditingMovie(null);
    setForm(emptyMovie);
  };

  return (
    <div className="page admin-page">
      <h1>Admin – จัดการหนังที่แนะนำ</h1>

      <div className="admin-layout">
        {/* Form */}
        <div className="admin-form-card">
          <h2>{editingMovie ? "แก้ไขข้อมูลหนัง" : "เพิ่มหนังใหม่"}</h2>
          <form className="admin-form" onSubmit={handleSubmit}>
            <label>
              ID (optional):
              <input
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="เว้นว่างให้ระบบสร้างให้ก็ได้"
              />
            </label>

            <label>
              ชื่อเรื่อง:
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Tagline:
              <input
                name="tagline"
                value={form.tagline}
                onChange={handleChange}
              />
            </label>

            <label>
              Genre:
              <select
                name="genre"
                value={form.genre}
                onChange={handleChange}
              >
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="horror">Horror</option>
                <option value="fantasy">Fantasy</option>
              </select>
            </label>

            <label>
              Subgenre:
              <input
                name="subgenre"
                value={form.subgenre}
                onChange={handleChange}
              />
            </label>

            <label>
              ปี:
              <input
                name="year"
                type="number"
                value={form.year}
                onChange={handleChange}
              />
            </label>

            <label>
              เรตติ้ง:
              <input
                name="rating"
                type="number"
                step="0.1"
                value={form.rating}
                onChange={handleChange}
              />
            </label>

            <label>
              Poster URL:
              <input
                name="posterUrl"
                value={form.posterUrl}
                onChange={handleChange}
              />
            </label>

            <label>
              Section tags (comma separated):
              <input
                value={form.sectionTags.join(", ")}
                onChange={handleSectionTagsChange}
                placeholder="เช่น hero, popular, romance"
              />
            </label>

            <div className="admin-form-actions">
              <button type="submit" className="btn-primary">
                {editingMovie ? "บันทึกการแก้ไข" : "เพิ่มหนัง"}
              </button>
              {editingMovie && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleCancel}
                >
                  ยกเลิก
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="admin-table-card">
          <h2>รายชื่อหนัง</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ชื่อเรื่อง</th>
                <th>Genre</th>
                <th>ปี</th>
                <th>Tag</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((m) => (
                <tr key={m.id}>
                  <td>{m.title}</td>
                  <td>{m.genre}</td>
                  <td>{m.year}</td>
                  <td>{m.sectionTags.join(", ")}</td>
                  <td className="admin-actions">
                    <button
                      className="btn-small"
                      onClick={() => handleEdit(m)}
                    >
                      แก้ไข
                    </button>
                    <button
                      className="btn-small btn-danger"
                      onClick={() => handleDelete(m)}
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
              {movies.length === 0 && (
                <tr>
                  <td colSpan="5">ยังไม่มีข้อมูลหนัง</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
