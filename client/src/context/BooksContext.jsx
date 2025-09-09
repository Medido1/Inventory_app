import { createContext, useState, useEffect, useMemo } from "react";
export const BooksContext = createContext();

export const BooksProvider = ({children}) => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooksData(data)
      })
      .catch((err) => {
        console.error("Failed fetching books:", err)
      })
  }, [])

  // Memoize context value to keep the object reference stable between renders.
  // This prevents all consumers from re-rendering unnecessarily whenever
  const value = useMemo(() => ({booksData, setBooksData}), [booksData])

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}