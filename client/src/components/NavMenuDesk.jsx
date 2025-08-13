import { Link } from "react-router-dom";

function NavMenuDesk() {
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
          key={label}
          to={path}
        >
          {label}
        </Link>
      )}
    </nav>
  )
}

export default NavMenuDesk;