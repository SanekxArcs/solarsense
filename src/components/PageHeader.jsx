import React from "react";
import TopImg from "../service/com for style/TopImg";
import { motion } from "framer-motion";

const PageHeader = ({ first, second, three }) => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="py-24 text-center text-ocean-green-50 bg-port-gore-950 snap-always snap-center"
      >
        <div className="flex justify-center">
          <div className="max-w-5xl">
            <h2 className="mb-5 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              {first}
              <br />
              <span className=" text-ocean-green-400">{second}</span>
            </h2>
          </div>
        </div>
        {three && (
          <p className="text-lg text-port-gore-200 px-4">
            {three}
          </p>
        )}
      </motion.section>
      <TopImg />
    </>
  );
};

export default PageHeader;
