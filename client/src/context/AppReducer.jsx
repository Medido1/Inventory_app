import {initialState} from "./GlobalContext";

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
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(category => category !== action.payload)
      }
    case "SET_COVER":
      return {
        ...state,
        cover: action.payload
      }
    case "RESET_STATE":
      return {...initialState}
    default:
      return state;
  }
}

export default AppReducer;