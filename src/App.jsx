import { useState } from "react";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
      <span onClick={() => setSelectedMovie(null)}>CineBook</span>
      <p>Your city. Your show. Your seat.</p>

      {selectedMovie === null ? (
        <h2>Movie List Page</h2>
      ) : (
        <h2>Showtimes Page — {selectedMovie}</h2>
      )}

      {/* Temporary test button */}
      <button onClick={() => setSelectedMovie("Interstellar")}>
        Click a movie
      </button>
    </div>
  );
}

export default App;