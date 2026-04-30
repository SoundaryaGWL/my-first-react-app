// Props: movie (object), onClick (function)
// Concepts used: functional component, props, event handling (onClick)

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      
      <div className="movie-poster" style={{ background: movie.bg }}>
        <span className="movie-emoji">{movie.poster}</span>
        <span className="rating-badge">{movie.rating} ★</span>
      </div>

      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-meta">
          {movie.duration} · {movie.lang}
        </p>
        <span className="genre-tag">{movie.genre}</span>
      </div>
    </div>
  );
}

export default MovieCard;