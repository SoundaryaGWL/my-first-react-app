
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
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
export default App