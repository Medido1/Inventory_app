import { createContext, useReducer, useMemo } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./state";

export const AppStateContext = createContext();

export const AppStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Reducer action helpers 
  const setTitle = (title) => dispatch({type: "SET_TITLE", payload: title});
  const setAuthor = (author) => dispatch({type: "SET_AUTHOR", payload: author});
  const setCategories = (category) => dispatch({type: "SET_CATEGORY", payload: category});
  const removeCategory = (category) => dispatch({type: "REMOVE_CATEGORY", payload: category});
  const resetState = () => dispatch({type: "RESET_STATE"});

  const value = useMemo(
    () => ({state, dispatch, setTitle, setAuthor, setCategories, removeCategory, resetState}),
    [state]
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}