
import { useState } from "react";
import MovieList from "./components/MovieList";
import Showtimes from "./components/Showtimes";
import { MOVIES } from "./data/movies";
import "./styles/app.css";


function App(){
  const[selectedMovie,setSelectedMovie] = useState(null);

  return(
    <div>
      <span  onClick={()=>setSelectedMovie(null)}> Cinibook</span>
      <p>Your city.Your show. Your seat.</p>

      {selectedMovie === null ? (<MovieList/>) : (<Showtimes/>)}
    </div>
    
  );

}
export default App;


