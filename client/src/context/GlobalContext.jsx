import {createContext, useEffect, useState, useReducer, useMemo } from "react";
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


  // SSR-safe mobile detection: prevents window access crashes during server-side rendering
  const getIsMobile = () =>
    typeof window !== 'undefined' ? window.innerWidth <= 640 : false;

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile);
    };

    handleResize(); // optional, ensures the initial state is accurate
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [booksData, setBooksData] = useState(() => {
    try {
      const stored = localStorage.getItem("booksData");
      return stored ? JSON.parse(stored) : bookList;
    } catch (error) {
      console.warn("Failed to parse stored books data:", error);
      return bookList;
    }
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

  // Memoize context value to keep the object reference stable between renders.
  // This prevents all consumers from re-rendering unnecessarily whenever
  // GlobalProvider re-renders, unless one of the listed dependencies actually changes.
  const value = useMemo(
    () => ({
      isMenuOpen, setIsMenuOpen, 
      booksData, setBooksData,
      state, dispatch,
      setTitle, setAuthor,
      setCategories, removeCategory,
      resetState, previewUrl, 
      setPreviewUrl, isBookModal,
      setBookModal, showForm,
      setShowForm, currentBook,
      setCurrentBook,isMobile,
    }),
    [
      isMenuOpen, booksData,
      state, previewUrl,
      isBookModal, showForm, 
      currentBook, isMobile
    ]
  )

  return (
    <GlobalContext.Provider value={value} >
      {children}
    </GlobalContext.Provider>
  )
}