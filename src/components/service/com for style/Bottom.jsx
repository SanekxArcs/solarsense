import React from 'react'
import bottomImg from "../../../assets/wave-haikei (1).svg";

const Bottom = () => {
  return (
    <div className='relative'>
        <img
    className="absolute bottom-0 left-0 right-0 w-full -z-50"
    src={bottomImg}
    alt=""
  /></div>
  )
}

export default Bottom