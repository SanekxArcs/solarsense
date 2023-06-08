import React from 'react'

const Input = ({ id, name, value, onChange, required, type }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      class="peer h-full w-full rounded border border-ocean-green-700 border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700 placeholder-shown:border-t-ocean-green-700 focus:border-2 focus:border-ocean-green-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-port-gore-950 "
      placeholder=" "
      required={required}
    />
  );
};

export default Input
