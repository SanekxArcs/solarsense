import React from "react";
import topImg from "./../../assets/Svgs/top-black.svg";
import { motion } from 'framer-motion'



const TopImg = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative "
    >
      <img
        className="absolute top-0 left-0 right-0 w-full -z-50"
        src={topImg}
        alt=""
      />
    </motion.div>
  );
};

export default TopImg;
