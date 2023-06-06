import React from "react";
import analiz from "./../../../../assets/Servise/icon-analiza.svg";
import pomiary from "./../../../../assets/Servise/icon-pomiary.svg";
import ppoz from "./../../../../assets/Servise/icon-ppoz.svg";
import uziom from "./../../../../assets/Servise/icon-uziemienia.svg";
import regser from "./../../../../assets/Servise/regularne-serwisy.webp";
import ico1 from "./../../../../assets/Servise/1.webp";
import ico2 from "./../../../../assets/Servise/2.webp";
import ico3 from "./../../../../assets/Servise/3.webp";

const InAllServises = () => {
  const data = [
    { id: "first", icon: analiz, name: "Analiza inwertera" },
    { id: "second", icon: pomiary, name: "Pomiary elektryczne" },
    { id: "third", icon: ppoz, name: "Test przeciwpożarowy" },
    { id: "fourth", icon: uziom, name: "Test uziemienia" },
  ];

  return (
    <div className="max-w-[1170px] px-6 mx-auto py-32">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-center md:text-5xl ">
        WE WSZYSTKICH <br />
        <span className="pl-2 text-ocean-green-400">PAKIETACH</span>
      </h2>
      <div className="flex flex-col justify-between px-5 pb-10 border-b-4 md:flex-row border-ocean-green-200">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img className="w-32 h-32" src={item.icon} alt="" />
            <p className="font-semibold ">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="">
        <h2 className="mt-20 mb-12 text-4xl font-bold tracking-tight text-center ">
          Dlaczego warto przeprowadzać <br />
          <span className="pl-2 text-ocean-green-400">
            regularnie serwisy fotowoltaiki?
          </span>
        </h2>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="w-[360px] md:w-full max-w-[800px] mb-5"
            src={regser}
            alt=""
          />
          <ul className="flex flex-col gap-2 py-5 border-y-4 border-ocean-green-200">
            <li className="flex items-center justify-start gap-2">
              <img className="w-14 h-14" src={ico1} alt="" />
              <p>Wczesne wykrywanie problemów z instalacją PV</p>
            </li>
            <li className="flex items-center justify-start gap-2">
              <img className="w-14 h-14" src={ico3} alt="" />
              <p>Zwiększenie wydajności instalacji PV</p>
            </li>
            <li className="flex items-center justify-start gap-2">
              <img className="w-14 h-14" src={ico2} alt="" />
              <p>
                Zwiększenie poziomu bezpieczeństwa nieruchomości wyposażonej w
                fotowoltaikę
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InAllServises;
