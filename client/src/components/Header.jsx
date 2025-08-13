import logo from '../assets/book.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import NavMenuDesk from './NavMenuDesk';

function Header() {
  const {isMobile, setIsMenuOpen} = useContext(GlobalContext)
  return (
    <header className='header p-6 flex justify-between items-center'>
      <img 
        className='h-14'
        src={logo} alt="logo" 
      />
      {isMobile && 
        <button 
          onClick={() => setIsMenuOpen(prev => !prev)}>
          <RxHamburgerMenu style={{ color: "white", fontSize: "30px" }}/>
        </button>
      }
      {!isMobile && <NavMenuDesk />}
    </header>
  )
}

export default Header;