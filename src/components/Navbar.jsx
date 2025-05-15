import React from "react";
import navItems from "../data/navItems";

function Navbar() {
  return (
    <nav className="flex items-center  gap-12 ">
      <img src="/Group 5.png" alt="Vite Logo" className="h-10 ml-[130px] " />
      <ul className="flex gap-12 ">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="text-black hover:text-blue-800">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
