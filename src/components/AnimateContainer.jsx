import React from 'react'
import { motion } from 'framer-motion'

const AnimateContainer = ({children, addClass}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={addClass}
    >
      {children}
    </motion.div>
  );
}

export default AnimateContainer
