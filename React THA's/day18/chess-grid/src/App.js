import React from 'react'
import './styles.css'
import Row from './Row.jsx'

function App() {

  const rowComponents = [];

  for (let i = 1; i <= 8; i++) {
    rowComponents.push(<Row posRow={i % 2 === 0 ? "even": "odd"}/>);
  }

  return (
    <div className="container">
    <div className="board">
      { rowComponents }
    </div>
  </div>
  );
}

export default App;
