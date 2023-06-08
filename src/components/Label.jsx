import React from 'react'

const Label = ({ id, placeholder }) => {
  return (
    <label
      htmlFor={id}
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-port-gore-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded after:border-t after:border-r after:border-ocean-green-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 "
    >
      {placeholder}
    </label>
  );
};

export default Label
