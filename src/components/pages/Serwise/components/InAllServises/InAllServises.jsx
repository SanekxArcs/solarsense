import React from 'react'
import analiz from "./../../../../../assets/Servise/icon-analiza.svg";
import pomiary from "./../../../../../assets/Servise/icon-pomiary.svg";
import ppoz from "./../../../../../assets/Servise/icon-ppoz.svg";
import uziom from "./../../../../../assets/Servise/icon-uziemienia.svg";

const InAllServises = () => {
  const data = [
    { id: "first", icon: analiz, name: "Analiza inwertera" },
    { id: "second", icon: pomiary, name: "Pomiary elektryczne" },
    { id: "third", icon: ppoz, name: "Test przeciwpożarowy" },
    { id: "fourth", icon: uziom, name: "Test uziemienia" },
  ];

  return (
    <div className="max-w-[1170px] px-6 mx-auto py-32">
      <h2 className="mb-12 text-5xl font-bold tracking-tight text-center ">
        WE WSZYSTKICH <br />
        <span className="pl-2 text-ocean-green-400">PAKIETACH</span>
      </h2>
      <div className="flex justify-between">
        {data.map((item) => (
          <div key={item.id} className='flex flex-col items-center justify-center gap-2'>
            <img className='w-32 h-32' src={item.icon} alt="" />
            <p className='font-semibold '>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InAllServises