import logo from '../assets/book.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from 'react';
import { UIContext } from '../context/UIContext';
import NavMenuDesk from './NavMenuDesk';
import { Link } from 'react-router-dom';

function Header() {
  const {isMobile, setIsMenuOpen, isMenuOpen} = useContext(UIContext)
  return (
    <header className='header p-6 flex justify-between items-center'>
      <Link to="/">
        <img 
          className='h-14'
          src={logo} alt="My Books - Return to homepage"
        />
      </Link>
      {isMobile && 
        <button 
          aria-label="Open menu"
          aria-expanded= {!!isMenuOpen} // forces value to be boolean
          onClick={() => setIsMenuOpen(prev => !prev)}>
          <RxHamburgerMenu style={{ color: "white", fontSize: "30px" }}/>
        </button>
      }
      {!isMobile && <NavMenuDesk />}
    </header>
  )
}

export default Header;