import React from "react";

function Button({
  text = "Click Me",
  color = "bg-blue-500",
  textColor = "text-white",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${color} ${textColor} hover:opacity-80 transition duration-200 `}
      style={{ padding: "18px 28px", width: "147px", height: "63px" }}
    >
      {text}
    </button>
  );
}

export default Button;
