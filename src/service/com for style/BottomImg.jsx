import React from "react";
import bottomImg from "./../../assets/Svgs/top-black.svg";

const BottomImg = () => {
  return (
    <div className="relative">
      <img
        className="absolute bottom-0 left-0 right-0 w-full rotate-180 -z-50"
        src={bottomImg}
        alt="decorative img"
      />
    </div>
  );
};

export default BottomImg;
