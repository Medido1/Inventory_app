import { motion, AnimatePresence } from "framer-motion";
import { UIContext } from "../context/UIContext";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import closeIcon from '../assets/close.png';

function MobileMenu() {
  const {isMenuOpen, setIsMenuOpen} = useContext(UIContext)
  const menuRef = useRef(null)

  const navItems = [
    {path: '/', label: "home"},
    {path: '/books', label: "Books"},
    {path:  '/categories', label: "Categories"}
  ];
  
  return (
    <AnimatePresence>
      {isMenuOpen && 
        <>
           {/* Backdrop overlay - goes behind the menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10"
            onClick={() => setIsMenuOpen(false)}
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`h-screen bg-[#F4F4F4] w-[60vw] fixed
              top-0 bottom-0 right-0 z-20 text-black `}
            ref={menuRef}
            aria-modal="true" 
            role="dialog"
          >
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                className="h-5 absolute right-8 top-12"
                src={closeIcon} alt=""
              />
            </button>
            <nav className={`pt-[15vh] pl-8 flex flex-col gap-4`}>
              {navItems.map(({path, label}) => (
                <Link 
                  key={path}
                  to = {path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      }
      
    </AnimatePresence>
  )
}

export default MobileMenu;