const initialState = {
  name: "",
  email: "",
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      console.log(action.payload);
    console.log("update name called")
      return {
          ...state,
          name: action.payload
      }
    case "UPDATE_EMAIL":
      console.log(action.payload);
      return {
          ...state,
          email: action.payload 
      }
    default:
      return state;
  }
}

export default formReducer;
