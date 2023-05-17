import React from 'react'
import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}  
      className='h-screen w-screen grid place-content-center'>
        <motion.h1 className="hidden text-6xl font-black uppercase text-center md:block animate-text-focus-in">
            <span className=" text-port-gore-950">Solar </span>
            <span className=" text-ocean-green-400">Sense</span>
          </motion.h1>
          <h2 className='text-5xl text-center pt-10'>Ładowanie witryny</h2></motion.div>
  )
}
