function AppReducer(state, action) {
  switch(action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_AUTHOR":
      return {
        ...state,
        author: action.payload
      };
    case "SET_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload]
      }
    default:
      return state;
  }
}

export default AppReducer;