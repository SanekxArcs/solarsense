import React from 'react'

const Button = (onClick, Active, addClass, Child) => {
  return (
    <>
    <button onClick={onClick} className={`${Active ? "bg-ocean-green-300" : null} ${addClass} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700 bg-ocean-green-50 hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
    {Child}
  </button>
  </>
  )
}

export default Button