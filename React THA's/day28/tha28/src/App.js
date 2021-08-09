import "bootstrap/dist/css/bootstrap.min.css"
import './styles.css'

import React from 'react';

function App() {
  return (
    <div className="App d-flex align-items-center" style={{height: "100vh"}}>
      <div className="container bg-primary">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary justify-content-center">
        FORECAST 
      </nav>
      <main className="row">
        <div className="date col d-flex justify-content-center">
            Monday<br/>
            7 January
        </div>
        <div className="temp col d-flex justify-content-center h1">
          -10
        </div>
        <div className="location col d-flex justify-content-center">
          New York,<br/> 
          UnitedStates
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;
