import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function Header() {
  return (
    <header className="bg-[#f9f5f2] text-white shadow-md pt-[52px] pb-[81px]">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-4">
        {/* Navbar responsive */}
        <Navbar />

        {/* CTA Button */}
        <Button
          text="Talk To Us"
          color="bg-[#333]"
          textColor="text-white mr-0 md:mr-[130px]"
        />
      </div>
    </header>
  );
}

export default Header;
