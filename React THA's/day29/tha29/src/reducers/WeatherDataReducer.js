const weatherDataReducer = (state={}, action) => {
    switch(action.type) {
        case "UPDATE_WEATHER_DATA":
            return action.payload
        default:
            return state
    }
}

export default weatherDataReducer