import React from 'react'
import { motion } from 'framer-motion'

const ContainerWrap = ({children, addClass}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`py-20 text-center md:text-left max-w-7xl mx-auto px-6 my-20 snap-always snap-start ${addClass}`}
    >
      {children}
    </motion.div>
  );
}

export default ContainerWrap;
