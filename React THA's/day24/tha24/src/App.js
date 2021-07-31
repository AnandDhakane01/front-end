
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./loginContext";
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'



function App() {

  const [loginStatus, setLoginStatus] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <UserContext.Provider value={{loginStatus, setLoginStatus, loading, setLoading}}>
          <div className="main-content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </div>
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
