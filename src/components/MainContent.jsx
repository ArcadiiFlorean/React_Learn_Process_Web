// src/components/MainContent.jsx
import React from "react";
import Button from "./Button";

function MainContent() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 bg-[#f9f5f2] rounded-lg">
      {/* Secțiunea de conținut */}
      <div className="flex flex-col gap-4">
        <h1 className="max-w-[540px] font-bold text-[68px] leading-[118%] text-[#110f14]">
          Build strong relationships with client
        </h1>
        <p className="text-gray-700 max-w-[400px] mb-1">
          Wiaka gets technological hurdles out of your way so you can see,
          perform, and grow at the height of your talents.
        </p>
        <div className="flex gap-2">
          <Button
            text="Now Watch"
            color="bg-[#333] hover:bg-[#555]"
            textColor="text-white"
          />
          <Button
            color="bg-[#f9f5f2] hover:bg-[#555]"
            textColor="text-black"
            text="Learn More"
          />
        </div>
      </div>

      {/* Secțiunea cu imagine */}
      <div className="flex-shrink-0">
        <img
          src="/Group 123.png"
          alt="Placeholder"
          className="object-cover rounded-md w-[550px] h-[500px] max-w-full"
        />
      </div>
    </section>
  );
}

export default MainContent;
