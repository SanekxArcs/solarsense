import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer select-none hover:shadow-lg hover:bg-gray-50"
      >
        <button
          onClick={() => setIsActive(!isActive)}
          type="button"
          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        >
          <span className="flex text-lg font-semibold text-black">{title}</span>
          <svg
            className={`${
              isActive ? "rotate-0" : "rotate-180"
            } w-6 h-6 text-gray-400 transition-all`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <motion.div
          className={`${
            isActive ? " max-h-[9999px]  sm:pb-6" : "max-h-0 overflow-hidden "
          } transition-all duration-300 px-4 sm:px-6`}
        >
          <p>{content}</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Accordion;
