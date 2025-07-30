import {createContext, useReducer, useRef, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

  const value = {} //place holder delete later
  return (
    <GlobalContext.Provider value={value} >
      {children}
    </GlobalContext.Provider>
  )
}