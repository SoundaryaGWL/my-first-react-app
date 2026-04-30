import { useState, useEffect } from "react";
import { CINEMAS, SHOW_TIMES, HOUSEFULL, DATES } from "../data/movies";



function Showtimes({ movie, onBack }) {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [booked, setBooked] = useState(false);

 
  useEffect(() => {
    setSelectedTime(null);
    setBooked(false);
  }, [selectedDate]);

  const handleBook = () => {
    if (selectedTime) setBooked(true);
  };

  return (
    <div className="showtimes">
    
      <button className="back-btn" onClick={onBack}>
        ← Back to movies
      </button>

     
      <div className="detail-header">
        <div className="detail-poster" style={{ background: movie.bg }}>
          {movie.poster}
        </div>
        <div className="detail-info">
          <h2 className="detail-title">{movie.title}</h2>
          <p className="detail-meta">
            {movie.genre} · {movie.duration} · {movie.lang}
          </p>
          <p className="detail-desc">{movie.desc}</p>
          <p className="detail-cast">
            <span className="label">Cast: </span>
            {movie.cast}
          </p>
        </div>
      </div>

      
      <div className="date-tabs">
        {DATES.map((d) => (
          <button
            key={d.key}
            className={`date-tab ${selectedDate === d.key ? "active" : ""}`}
            onClick={() => setSelectedDate(d.key)}
          >
            {d.label}
          </button>
        ))}
      </div>

    
      <div className="cinemas-list">
        {CINEMAS.map((cinema) => (
          <div key={cinema.id} className="cinema-block">
            <p className="cinema-name">
              {cinema.name}
              <span className="cinema-location">{cinema.location}</span>
            </p>

            <div className="times-row">
              {SHOW_TIMES.map((time) => {
                const isFull = HOUSEFULL.includes(time);
                const isSelected = selectedTime === `${cinema.id}-${time}`;
                return (
                  <button
                    key={time}
                    disabled={isFull}
                    className={`time-btn ${isFull ? "full" : ""} ${isSelected ? "selected" : ""}`}
                    onClick={() => !isFull && setSelectedTime(`${cinema.id}-${time}`)}
                  >
                    {time}
                    {isFull && <span className="full-label"> · Full</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      
      {selectedTime && !booked && (
        <div className="book-bar">
          <p className="selected-info">
            {movie.title} · {DATES[selectedDate].label} ·{" "}
            {selectedTime.split("-")[1]}
          </p>
          <button className="book-btn" onClick={handleBook}>
            Book Tickets →
          </button>
        </div>
      )}

    
      {booked && (
        <div className="booked-panel">
          <p className="booked-title">Booking Confirmed!</p>
          <p className="booked-detail">
            {movie.title} · {DATES[selectedDate].label} ·{" "}
            {selectedTime.split("-")[1]}
          </p>
          <p className="booked-cinema">
            {CINEMAS.find((c) => selectedTime.startsWith(c.id))?.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default Showtimes;