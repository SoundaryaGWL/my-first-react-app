import { useState } from "react";
import MovieCard from "./MovieCard";
import { GENRES } from "../data/movies";

// Props: movies (array), onSelect (function)
// Concepts used: useState, .map(), conditional rendering, onChange, onClick

function MovieList({ movies, onSelect }) {
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");

  // Filter logic — runs on every render when genre or search changes
  const filtered = movies.filter((m) => {
    const matchesGenre = genre === "All" || m.genre === genre;
    const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="movie-list">
      {/* Search input — onChange updates search state */}
      <div className="search-row">
        <input
          type="text"
          className="search-input"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="results-count">{filtered.length} films</span>
      </div>

      {/* Genre filter — .map() renders buttons, onClick sets active genre */}
      <div className="genre-bar">
        {GENRES.map((g) => (
          <button
            key={g}
            className={`genre-btn ${genre === g ? "active" : ""}`}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Conditional rendering — show empty state OR grid */}
      {filtered.length === 0 ? (
        <p className="no-results">No movies found for "{search}"</p>
      ) : (
        <div className="movies-grid">
          {/* .map() renders a MovieCard for each movie */}
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;