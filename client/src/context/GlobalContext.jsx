import {createContext, useEffect, useState, useReducer } from "react";
import bookList from '../data/books';
import AppReducer from "./AppReducer";

export const initialState = {
  cover: "",
  title: "",
  author: "",
  categories: [],
}

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isBookModal, setBookModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const [booksData, setBooksData] = useState(() => {
    const stored = localStorage.getItem("booksData");
    return stored ? JSON.parse(stored) : bookList;
  })

  useEffect(() => {
    localStorage.setItem("booksData", JSON.stringify(booksData))
  }, [booksData])

  /* fill up new book info */
  function setTitle(title) {
    dispatch({
      type:  "SET_TITLE", payload: title
    })
  }

  function setAuthor(author) {
    dispatch({
      type: "SET_AUTHOR", payload: author
    })
  }

  function setCategories(category) {
    dispatch({
      type: "SET_CATEGORY", payload: category
    })
  }

  function removeCategory(category) {
    dispatch ({
      type: "REMOVE_CATEGORY", payload: category
    })
  }

  function resetState() {
    dispatch({type:"RESET_STATE"})
  }

  return (
    <GlobalContext.Provider value={{
      isMenuOpen, setIsMenuOpen, 
      booksData, setBooksData, 
      state, dispatch, setTitle, setAuthor,
      setCategories, removeCategory,
      resetState, previewUrl, setPreviewUrl,
      isBookModal, setBookModal, showForm,
      setShowForm, currentBook, setCurrentBook,
      isMobile, setIsMobile}} >
      {children}
    </GlobalContext.Provider>
  )
}