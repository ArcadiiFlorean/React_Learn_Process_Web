import React from "react";
import navItems from "../data/navItems";

function Navbar() {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-6">
      {/* Logo */}
      <img src="/Group 5.png" alt="Logo" className="h-10" />

      {/* Navigation Items */}
      <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-black hover:text-blue-800 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
