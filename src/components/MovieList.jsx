import { useState } from "react";
import MovieCard from "./MovieCard";
import { GENRES } from "../data/movies";



function MovieList({ movies, onSelect }) {
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");

 
  const filtered = movies.filter((m) => {
    const matchesGenre = genre === "All" || m.genre === genre;
    const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="movie-list">
    
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

   
      {filtered.length === 0 ? (
        <p className="no-results">No movies found for "{search}"</p>
      ) : (
        <div className="movies-grid">
    
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;