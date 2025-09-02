import logo from '../assets/book.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from 'react';
import { UIContext } from '../context/UIContext';
import NavMenuDesk from './NavMenuDesk';
import { Link } from 'react-router-dom';

function Header() {
  const {setIsMenuOpen, isMenuOpen} = useContext(UIContext)
  return (
    <header className='header p-6 flex justify-between items-center'>
      <Link to="/">
        <img 
          className='h-14'
          src={logo} alt="Home"
        />
      </Link>

      <nav className="hidden sm:flex gap-4">
        <NavMenuDesk />
      </nav>

      <button 
        className="md:hidden"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <RxHamburgerMenu className="text-white text-3xl" />
      </button>
    </header>
  )
}

export default Header;