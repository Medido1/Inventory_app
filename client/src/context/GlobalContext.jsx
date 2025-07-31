import {createContext, useEffect, useState } from "react";
import bookList from '../data/books';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [booksData, setBooksData] = useState(() => {
    const stored = localStorage.getItem("booksData");
    return stored ? JSON.parse(stored) : bookList;
  })

  useEffect(() => {
    localStorage.setItem("booksData", JSON.stringify(booksData))
  }, [booksData])
  
  return (
    <GlobalContext.Provider value={{isMenuOpen, setIsMenuOpen, booksData, setBooksData}} >
      {children}
    </GlobalContext.Provider>
  )
}