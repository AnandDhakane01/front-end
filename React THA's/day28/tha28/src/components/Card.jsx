import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faCalendar,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

// Icons
const element = <FontAwesomeIcon icon={faBars} color="white" />;
const search = <FontAwesomeIcon icon={faSearch} color="white" />;
const calendar = <FontAwesomeIcon icon={faCalendar} color="white" />;
const locationIcon = <FontAwesomeIcon icon={faMapMarker} color="white" />;

function Card() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("Mumbai");

  // Get data from the API
  const getData = (location) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=44a5c3b5551c45bca05154753211008&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setWeatherData(data);
      });
    setLocation("");
  };
  
  useEffect(() => {
    getData(location);
  }, []);

  if (weatherData.location) {
    return (
      <div
        className="App d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container bg-primary">
          <nav className="w-100 navbar bg-secondary d-flex align-items-center justify-content-between">
            <div className="">{element}</div>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  getData(location);
                }
              }}
              style={{ marginBottom: "0px", padding: "10px" }}
              type="text"
              placeholder="location"
            />
            <div className="">{search}</div>
          </nav>
          <main className="main d-flex flex-column">
            <div className="w-icon align-self-center">
              <img src={weatherData.current.condition.icon} />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="date  d-flex justify-content-center align-items-center text-left">
                <span className="calendar">{calendar}</span>
                {weatherData.current.last_updated.split(" ")[1]}
                <br />{weatherData.current.last_updated.split(" ")[0]}
              </div>
              <div className="temp  d-flex justify-content-center h1 font-weight-bold">
                {weatherData.current.temp_c}&#176;
              </div>
              <div className="d-flex justify-content-center align-items-center text-right">
                <p>
                  {weatherData.location.name}
                  <br></br>
                  {weatherData.location.country}
                </p>
                <span className="icon location">{locationIcon}</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    // If data not found for the given Location
    return (
      <div
        className="App d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container bg-primary">
          <nav className="w-100 navbar bg-secondary d-flex align-items-center justify-content-between">
            <div className="">{element}</div>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  getData(location);
                }
              }}
              style={{ marginBottom: "0px", padding: "10px" }}
              type="text"
              placeholder="location"
            />
            <div className="">{search}</div>
          </nav>
          <main className="main d-flex align-items-center justify-content-center">
            <h1>Location Not Found</h1>
          </main>
        </div>
      </div>
    );
  }
}

export default Card;
