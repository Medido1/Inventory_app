import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function NavMenuDesk() {
  const location = useLocation();
  const navItems = [
    {path: '/', label: "home"},
    {path: '/books', label: "Books"},
    {path:  '/categories', label: "Categories"}
  ];
  
  return (
    <nav className="flex gap-4">
      {navItems.map(({label, path}) => 
        <Link
          className="text-white text-xl cursor-pointer 
            border-b-2 border-transparent hover:border-white"
          key={path}
          to={path}
          aria-current={location.pathname === path ? "page" : undefined}
        >
          {label}
        </Link>
      )}
    </nav>
  )
}

export default NavMenuDesk;