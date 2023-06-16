import React from "react";

const Button = ({
  children,
  color = "blue",
  size = "md",

  rounded = "none",
  fullWidth = false,
  onClick,
  disabled = false,
}) => {


  // Determine the size class
  let sizeClass;
  switch (size) {
    case "sm":
      sizeClass = "px-4 py-2 text-sm";
      break;
    case "md":
      sizeClass = "px-6 py-3 text-base";
      break;
    case "lg":
      sizeClass = "px-8 py-4 text-lg";
      break;
    default:
      sizeClass = "px-6 py-3 text-base";
  }

  // Determine the rounded class
  const roundedClass =
    rounded === "full" ? "rounded-full" : `rounded-${rounded}`;

  // Determine the width class
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`transition-all duration-300 ease-in-out bg-${color}-400 text-${color}-50 hover:bg-${color}-500 hover:text-white ${sizeClass} ${roundedClass} ${widthClass} hover:opacity-75 focus:outline-none disabled:opacity-50 ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
