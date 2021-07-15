
import React from 'react'
import Counter from "./Counter"
import "./styles.css"

function App() {
  return (
    <div className="main">
      <p>There are 4 counter component instances that each manage their own state.</p>
      <div className="container">
        <Counter/> 
        <Counter/> 
        <Counter/> 
        <Counter/> 
      </div>
    </div>
  );
}

export default App;
