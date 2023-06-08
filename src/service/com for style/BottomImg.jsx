import React from "react";
import { motion } from "framer-motion";

import bottomImg from "./../../assets/Svgs/top-black.svg";

const BottomImg = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <img
        className="absolute -bottom-[1px] left-0 right-0 w-full rotate-180 -z-50"
        src={bottomImg}
        alt="decorative img"
      />
    </motion.div>
  );
};

export default BottomImg;
