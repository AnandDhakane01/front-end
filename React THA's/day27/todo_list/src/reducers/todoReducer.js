const initialState = [];

function todoReducer(state=initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((item, index) => index !== action.payload);

    default:
      return state;
  }
}

export default todoReducer;
