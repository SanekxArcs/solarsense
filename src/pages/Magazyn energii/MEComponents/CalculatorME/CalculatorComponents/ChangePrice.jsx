import React from "react";

const ChangePrice = (props) => {
  return (
    <>
      <div className="flex gap-2 mt-5">
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            onChange={(e) => props.setPrice(e.target.value)}
            className="peer h-full w-full rounded-[7px] border  border-ocean-green-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-ocean-green-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-400 placeholder-shown:border-t-ocean-green-400 focus:border-2 focus:border-ocean-green-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-ocean-green-50"
            value={props.price}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-ocean-green-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-ocean-green-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-ocean-green-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-ocean-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-ocean-green-500">
            Przyjęta stawka za 1 kWh
          </label>
        </div>
      </div>
    </>
  );
};

export default ChangePrice;
