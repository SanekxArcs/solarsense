import React from "react";
import bottomImg from "../../../assets/Svgs/bottom-black.svg";

const BottomImg = () => {
  return (
    <div className="relative">
      <img
        className="absolute bottom-0 left-0 right-0 w-full -z-50 fill-purple-500 stroke-slate-600"
        src={bottomImg}
        alt="decorative img"
      />
    </div>
  );
};

export default BottomImg;
