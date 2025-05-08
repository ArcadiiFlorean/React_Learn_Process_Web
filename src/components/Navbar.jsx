import React from "react";
import navItems from "../data/navItems";

function Navbar() {
  return (
    <nav className="flex  items-center justify-between">
      <img src="/vite.svg" alt="Vite Logo" className="h-10" />
      <ul className="flex space-x-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="text-black hover:text-gray-300">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    
  );
}

export default Navbar;
