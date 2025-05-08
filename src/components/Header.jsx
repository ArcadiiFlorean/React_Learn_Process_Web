import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="max-w-container mx-auto">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
