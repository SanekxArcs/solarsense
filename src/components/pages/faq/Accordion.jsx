import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-5 overflow-hidden border rounded-sm bg-mint-cream border-primary-mint">
      <div
        className="flex items-center justify-between px-4 py-2 "
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-xl font-medium  md:text-2xl">{title}</div>
        <div className=" text-primary-mint">{isActive ? "Zwiń" : "Rozwiń"}</div>
      </div>
      {isActive && <div className="px-4 py-2 animate-fadeInUp ">{content}</div>}
    </div>
  );
};

export default Accordion;
