const locationReducer = (state="Mumbai", action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return action.payload;
    default:
      return state
  }
}

export default locationReducer 