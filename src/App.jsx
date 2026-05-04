import { useState } from "react";
import MovieList from "./components/MovieList";
import Showtimes from "./components/Showtimes";
import { MOVIES } from "./data/movies";
import "./styles/app.css";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-logo" onClick={() => setSelectedMovie(null)}>
          🎬 CineBook
        </h1>
        <p className="app-tagline">Your city. Your show. Your seat.</p>
      </header>

      <main className="app-main">
        {selectedMovie === null ? (
          <MovieList movies={MOVIES} onSelect={setSelectedMovie} />
        ) : (
          <Showtimes movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        )}
      </main>
    </div>
  );
}

export default App;