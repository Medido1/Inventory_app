import { motion, AnimatePresence } from "framer-motion";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import closeIcon from '../assets/close.png';

function MobileMenu() {
  const {isMenuOpen, setIsMenuOpen} = useContext(GlobalContext)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)){
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen])

  const navItems = [
    {path: '/', label: "home"},
    {path: '/books', label: "Books"},
    {path:  '/categories', label: "Categories"}
  ];

  //styling /*  */
  const mobileMenuStyle = `h-screen bg-[#F4F4F4] w-[60vw] fixed
    top-0 bottom-0 right-0 z-0 text-black `;
  const navMenuStyle = `pt-[15vh] pl-8 flex flex-col gap-4`;
  
  return (
    <AnimatePresence>
      {isMenuOpen && 
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={mobileMenuStyle}
        ref={menuRef}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
        >
          <img 
            className="h-5 absolute right-8 top-12"
            src={closeIcon} alt="close menu" />
        </button>
        <nav className={navMenuStyle}>
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
      }
      
    </AnimatePresence>
  )
}

export default MobileMenu;