import React from "react";

function Button({ text }) {
  return (
    <button
      className="text-white font-semibold text-lg bg-[#333] hover:bg-blue-600  mr-[130px]"
      style={{ padding: "18px 28px", width: "147px", height: "63px" }}
    >
     
      {text}
    </button>
  );
}

export default Button;
