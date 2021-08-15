import { combineReducers } from "redux"
import locationReducer from './locationReducer'
import weatherDataReducer from "./WeatherDataReducer"
import themeReducer from "./themeReducer"

const rootReducer = combineReducers({
    location: locationReducer,
    weatherData: weatherDataReducer,
    theme: themeReducer
})

export default rootReducer