import React from 'react'
import topImg from "../../../assets/Svgs/top-black.svg";
const TopImg = () => {
  return (
    <div className=' relative'>
        <img
        className="absolute top-0 left-0 right-0 w-full -z-40"
        src={topImg}
        alt=""
      />
    </div>
  )
}

export default TopImg