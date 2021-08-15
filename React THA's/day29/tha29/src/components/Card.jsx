import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleTheme } from "../actions";

// actions
import { updateLocation, updateWeatherData } from "../actions";

import {
  faBars,
  faSearch,
  faCalendar,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

function Card() {
  const location = useSelector((state) => state.location);
  const weatherData = useSelector((state) => state.weatherData);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  // Icons
  const element = (
    <FontAwesomeIcon icon={faBars} color={theme ? "white" : "black"} />
  );
  const search = (
    <FontAwesomeIcon icon={faSearch} color={theme ? "white" : "black"} />
  );
  const calendar = <FontAwesomeIcon icon={faCalendar} color="white" />;
  const locationIcon = (
    <FontAwesomeIcon icon={faMapMarker} color= "white" />
  );

  useEffect(() => {
    dispatch(updateWeatherData(location));
    dispatch(updateLocation(""));
  }, []);

  return (
    <div
      className={
        !theme
          ? "App dark d-flex align-items-center"
          : "App d-flex align-items-center"
      }
      style={{ height: "100vh" }}
    >
      {/* theme toggle button */}
      <div className="toggle-theme">
        <button
          className={theme ? "theme btn-light" : "theme btn-dark"}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {theme ? "Dark" : "Light"}
        </button>
      </div>

      <div className="container">
        <nav className="w-100 navbar bg-secondary d-flex align-items-center justify-content-between">
          <div className="">{element}</div>
          <input
            value={location}
            onChange={(e) => {
              dispatch(updateLocation(e.target.value));
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                dispatch(updateWeatherData(location));
                dispatch(updateLocation(""));
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
            {weatherData.current ? (
              <img src={weatherData.current.condition.icon} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="date  d-flex justify-content-center align-items-center text-left">
              {weatherData.current ? (
                <span className="calendar">{calendar}</span>
              ) : (
                ""
              )}

              {weatherData.current
                ? weatherData.current.last_updated.split(" ")[1]
                : ""}
              <br />
              {weatherData.current
                ? weatherData.current.last_updated.split(" ")[0]
                : ""}
            </div>
            <div className="temp  d-flex justify-content-center h1 font-weight-bold">
              {weatherData.current ? (
                <>{weatherData.current.temp_c}&#176;</>
              ) : (
                <h1>Location Not Found</h1>
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center text-right">
              {weatherData.current ? (
                <p>
                  {weatherData.location.name}
                  <br></br>
                  {weatherData.location.country}
                </p>
              ) : (
                ""
              )}
              {weatherData.current ? (
                <span className="icon location">{locationIcon}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Card;
