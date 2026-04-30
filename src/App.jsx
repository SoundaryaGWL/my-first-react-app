
// import './App.css'

// const Card = () =>{
//   return (
//     <h4>Card component</h4>
//   )
// }
// const App1 = () =>{
//  return (
//   <div>
//   <h2>Functional arrow component </h2>
//   <Card/>
//   </div>
//  )
// }

// const Child =({name}) =>{
// return(
//   <div>
//     <p> Hi {name}</p>
//   </div>
// )
// }
// const Parent =()=>{
//   return (
//     <div>
//       <Child name="Soundarya"/>
//     </div>
//   )
// }

// export default Parent

// let count = 0;

// function App() {
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => count++}>Increment</button>
//     </div>
//   );
// }
// export default App

// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }
// function App() {
//   return (
//     <div style={{ fontFamily: "Arial", textAlign: "center", padding: "40px" }}>
      
//       {/* Header */}
//       <h1 style={{ color: "#4A90E2" }}>🚀 My React App</h1>
//       <p style={{ color: "#888" }}>CI/CD Pipeline with Firebase Hosting</p>

//       {/* Environment Badge */}
//       <div style={{
//         display: "inline-block",
//         backgroundColor: "#FFA500",
//         color: "white",
//         padding: "6px 20px",
//         borderRadius: "20px",
//         fontWeight: "bold",
//         marginBottom: "30px"
//       }}>
//         🌿 Stage Environment
//       </div>

//       {/* Info Cards */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        
//         <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "20px", width: "180px" }}>
//           <div style={{ fontSize: "32px" }}>⚙️</div>
//           <h3>GitHub Actions</h3>
//           <p style={{ color: "#666", fontSize: "14px" }}>Automated pipeline running</p>
//         </div>

//         <div style={{ background: "#f0fff4", borderRadius: "12px", padding: "20px", width: "180px" }}>
//           <div style={{ fontSize: "32px" }}>🔥</div>
//           <h3>Firebase</h3>
//           <p style={{ color: "#666", fontSize: "14px" }}>Hosted on Firebase Hosting</p>
//         </div>

//         <div style={{ background: "#fff4f0", borderRadius: "12px", padding: "20px", width: "180px" }}>
//           <div style={{ fontSize: "32px" }}>✅</div>
//           <h3>CI/CD Live</h3>
//           <p style={{ color: "#666", fontSize: "14px" }}>Auto deploy on push</p>
//         </div>

//       </div>
//     </div>
//   )
// }
import { useState } from "react";
import MovieList from "./components/MovieList";
import Showtimes from "./components/Showtimes";
import { MOVIES } from "./data/movies";
import "./styles/app.css";

// function App() {
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   return (
//     <div className="app">
//       <header className="app-header">
//         <h1 className="app-logo" onClick={() => setSelectedMovie(null)}>
//           🎬 <span className="logo-text">CineBook</span> 
//         </h1>
//         <p className="app-tagline">Your city. Your show. Your seat.</p>
//       </header>

//       <main className="app-main">
//         {selectedMovie === null ? (
//           <MovieList movies={MOVIES} onSelect={setSelectedMovie} />
//         ) : (
//           <Showtimes movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
//         )}
//       </main>
//     </div>
//   );
// }
function App(){
  const[selectedMovie,setSelectedMovie] = useState(null);

  return(
    <div>
      <span  onClick={()=>setSelectedMovie(null)}> Cinibook</span>
      <p>Your city.Your show. Your seat.</p>

      {selectedMovie === null ? (<h1>Movies List</h1>) : (<h2>select the time </h2>)}
    </div>
    
  );

}
export default App;


