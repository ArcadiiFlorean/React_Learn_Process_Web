import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function Header() {
  return (
    <header className="bg-[#f9f5f2] text-white p-4 shadow-md pt-[52px] pl-0 pr-0 pb-[81px]">
      <div className="max-w-container mx-auto flex justify-between">
        <Navbar />
        <Button
          text="Talk To Us"
          color="bg-[#333]"
          textColor="text-white mr-[130px] , "
        />
      </div>
    </header>
  );
}

export default Header;
