import React, { useState } from "react";
import { GENRES } from "../../data/genres";

const NavBar = () => {
  const [hoveredGenre, setHoveredGenre] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="nav-item nav-item-active">Home</button>
        {GENRES.map((genre) => (
          <div
            key={genre.id}
            className="nav-item-wrapper"
            onMouseEnter={() => setHoveredGenre(genre.id)}
            onMouseLeave={() => setHoveredGenre(null)}
          >
            <button className="nav-item">
              {genre.name}
            </button>

            {hoveredGenre === genre.id && (
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>{genre.name}</h4>
                  <p className="mega-description">
                    {genre.thaiName} — {genre.description}
                  </p>
                </div>

                <div className="mega-column">
                  <ul className="subgenre-list">
                    {genre.subgenres.map((sub) => (
                      <li key={sub.id} className="subgenre-item">
                        <span className="subgenre-name">{sub.name}</span>
                        {sub.thai && (
                          <span className="subgenre-thai"> – {sub.thai}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="ค้นหา..."
          className="search-input"
        />
      </div>
    </nav>
  );
};

export default NavBar;
