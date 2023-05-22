import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="overflow-hidden border rounded-sm bg-white shadow transition-all  select-none">
      <div
        className={`${
          isActive ? "border-b border-1 border-ocean-green-700" : "border-0"
        } transition-all duration-1000 flex flex-wrap items-center justify-between px-4 py-2`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-base font-medium  md:text-2xl">{title}</div>
        <div className=" text-ocean-green-700 font-medium transition-transform duration-1000 ">
          {isActive ? "Zwiń" : "Rozwiń"}
        </div>
      </div>
      <div
        className={`${
          isActive ? "h-full py-4" : "h-0 py-0"
        } transition-all duration-1000 px-4 overflow-hidden`}
      >
        <span className={`${isActive ? "animate-fadeInDown delay-300" : ""}`}>
          {content}
        </span>{" "}
      </div>
    </div>
  );
};

export default Accordion;
