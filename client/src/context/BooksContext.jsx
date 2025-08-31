import { createContext, useState, useEffect, useMemo } from "react";
import bookList from '../data/books';

export const BooksContext = createContext();

export const BooksProvider = ({children}) => {
  const [booksData, setBooksData] = useState(() => {
    try {
      const stored = localStorage.getItem("booksData");
      return stored ? JSON.parse(stored) : bookList;
    }catch (err){
      console.error("failed to parse books data", err)
      return bookList;
    }
  });

  useEffect(() => {
    localStorage.setItem("booksData", JSON.stringify(booksData))
  }, [booksData])

  // Memoize context value to keep the object reference stable between renders.
  // This prevents all consumers from re-rendering unnecessarily whenever
  const value = useMemo(() => ({booksData, setBooksData}), [booksData])

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}