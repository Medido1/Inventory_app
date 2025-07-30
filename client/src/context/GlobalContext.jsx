import {createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <GlobalContext.Provider value={{isMenuOpen, setIsMenuOpen}} >
      {children}
    </GlobalContext.Provider>
  )
}