import {createContext, useEffect, useState, useReducer, useMemo } from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
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

  // Memoize context value to keep the object reference stable between renders.
  // This prevents all consumers from re-rendering unnecessarily whenever
  // GlobalProvider re-renders, unless one of the listed dependencies actually changes.
  const value = useMemo(
    () => ({
      isMenuOpen, setIsMenuOpen, 
      previewUrl, 
      setPreviewUrl, isBookModal,
      setBookModal, showForm,
      setShowForm, currentBook,
      setCurrentBook,isMobile,
    }),
    [
      isMenuOpen,previewUrl,
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