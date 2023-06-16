import React from 'react'
import { motion } from 'framer-motion'

const ContainerWrap = ({children, addClass}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`text-center md:text-left max-w-7xl mx-auto px-4 my-20 snap-always snap-start py-0 md:py-20 ${addClass}`}
    >
      {children}
    </motion.div>
  );
}

export default ContainerWrap;
