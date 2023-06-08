import React from "react";

const Button = ({ onClickBTN, active, child }) => {
  return (
    <button
      onClick={onClickBTN}
      className={`${
        active ? "bg-ocean-green-300" : null
      } px-4 py-2 font-bold transition-all border rounded  text-ocean-green-800 border-ocean-green-700 bg-ocean-green-50 hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}
    >
      {child}
    </button>
  );
};

export default Button;
