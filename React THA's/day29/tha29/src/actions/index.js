const updateLocation = (location) => {
  return {
    type: "UPDATE_LOCATION",
    payload: location,
  };
};

const updateWeatherData = (location) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=44a5c3b5551c45bca05154753211008&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_WEATHER_DATA",
          payload: data
        }) 
      });
  };
};

const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  }
}

export { updateLocation, updateWeatherData, toggleTheme };
