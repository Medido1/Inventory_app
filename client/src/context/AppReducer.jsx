import { initialState } from "./state";

function AppReducer(state, action) {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_AUTHOR":
      return {
        ...state,
        author: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        categories: Array.isArray(action.payload)
          ? [...action.payload] // replace with provided array when editing the book
          : [...state.categories, action.payload], // append a single category
      };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category !== action.payload
        ),
      };
    case "RESET_STATE":
      return { ...initialState };
    default:
      return state;
  }
}

export default AppReducer;
