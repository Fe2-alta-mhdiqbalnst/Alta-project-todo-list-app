const initialState = []

const postReducers = ( state = initialState, action ) => {
  if(action.type === "SET_DATA") {
    return action.payload
  }

  return state;
}

export default postReducers;