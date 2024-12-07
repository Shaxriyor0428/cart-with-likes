import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      id="header"
      className="sticky top-0 left-0 z-10 bg-slate-900 shadow-md"
    >
      <nav className="flex gap-6 p-4 container mx-auto">
        {LINKS?.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={`text-white flex items-center gap-2 p-2 rounded-md 
              ${pathname === link.path ? "bg-blue-600" : "hover:bg-blue-500"} 
              transition-all duration-300 ease-in-out`}
          >
            {link.icon && <span>{link.icon}</span>}
            <span className="text-lg">{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
