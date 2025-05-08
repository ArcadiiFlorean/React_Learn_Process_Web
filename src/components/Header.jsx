import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function Header() {
  return (
    <header className="bg-[#f9f5f2] text-white p-4 shadow-md  pt-[71px]">
      <div className="max-w-container mx-auto flex items-center justify-between">
     

        <Navbar />
        <Button text="Click Me" />
      </div>
    </header>
  );
}

export default Header;
