import React from "react";
import FisrstEtap from "./FisrstEtap";
import SecondEtap from "./secondEtap";
import Oferta from "./Oferta";

const CalkulatorME = () => {
  return (
    <>
      <section className="py-32 max-w-[1170px] mx-auto snap-always snap-start">
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-center">
          Oblicz opłacalność fotowoltaiki z magazynem energii
        </h2>
        <div className="p-10 mt-20 rounded-md shadow-md ring ring-primary-mint bg-primary-mint/10">
        <div>
          <h3 className="text-3xl font-medium text-center">Kalkulator rachunków 2023</h3>
          <div className="flex justify-between max-w-3xl mx-auto mt-10">
            <p>Stan obecny</p>
            <p>Rachunek 2023</p>
            <p>Wycena</p>
          </div>
        </div>
        <FisrstEtap/>
        <SecondEtap/>
        {/* <Oferta/> */}
      </div>
      <div className="flex justify-between mt-5 ">
        <button className="px-8 py-2 text-xl font-medium rounded-md bg-primary-dark/90 text-primary-mint-white"><i className="pr-2 fa-solid fa-circle-arrow-left"></i>Poprzedni krok</button>
        <button className="px-4 py-2 text-xl font-medium rounded-md bg-primary-dark/90 text-primary-mint-white">Przejdź dalej <i className="pl-2 fa-solid fa-circle-arrow-right"></i></button>
      </div>
        
        
      </section>
    </>
  );
};

export default CalkulatorME;
