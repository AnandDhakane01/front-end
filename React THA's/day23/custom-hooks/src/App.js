import React, { useState } from 'react'
import useLocalStorage from './components/useLocalStorage';

function App() {

  const [name, setName] = useLocalStorage('name', '')

  return (
    <div style={{
      textAlign: "center",
      marginTop: 30,


    }}>
      <h3> You input goes into the local storage using a custom hook</h3>
      <input 
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
}

export default App;
