import {createContext, useEffect, useState, useMemo } from "react";


export const UIContext = createContext();

export const UIProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isBookModalOpen, setBookModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  // SSR-safe mobile detection: prevents window access crashes during server-side rendering
  const getIsMobile = () =>
    typeof window !== 'undefined' ? window.innerWidth <= 640 : false;

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    handleResize(); // optional, ensures the initial state is accurate
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Memoize context value to keep the object reference stable between renders.
  // This prevents all consumers from re-rendering unnecessarily whenever
  // UI re-renders, unless one of the listed dependencies actually changes.
  const value = useMemo(
    () => ({
      isMenuOpen, setIsMenuOpen, 
      previewUrl, setPreviewUrl, 
      isBookModalOpen, setBookModalOpen,
      showForm, setShowForm,
      isMobile,
    }),
    [
      isMenuOpen,previewUrl,
      isBookModalOpen, showForm, 
      isMobile
    ]
  )

  return (
    <UIContext.Provider value={value} >
      {children}
    </UIContext.Provider>
  )
}