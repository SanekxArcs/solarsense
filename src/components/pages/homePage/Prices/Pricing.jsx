import React, { useState } from "react";
import Price from "./Price";


const Pricing = ({setTextToMessage}) => {
  const [priceBtn, setPriceBtn] = useState(0);
  
  return (
    <>
      <div className="bg-primary-dark">

        <section className="relative z-20 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] max-w-[1170px] mx-auto ">
          <div className="container mx-auto">

            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-10 text-primary-mint-accent2">
                  <span className="block mb-2 text-lg font-semibold text-primary ">
                    Nasz cennik
                  </span>
                  <h2 className="text-dark mb-4 font-bold sm:text-4xl md:text-[40px] uppercase text-4xl
lg:text-6xl">
                    Zestawy
                  </h2>
                  <p className="text-base text-body-color">
                    Wybierz moc instalacji jaka ci jest najbliżej i dowiedź się ceny na zestaw.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-5 pb-10 ">
                <button onClick={()=> {setPriceBtn(0)}} className={`${priceBtn === 0  ? "bg-primary-mint text-mint-cream hover:text-primary-mint-accent2" : "bg-primary-mint-accent2 text-primary-dark "} px-6 py-3 text-sm md:text-xl font-bold  transition-all duration-300 rounded-sm shadow   hover:scale-110 hover:shadow-md`}>4 kWp</button>
                <button onClick={()=> {setPriceBtn(1)}} className={`${priceBtn === 1  ? "bg-primary-mint   text-mint-cream hover:text-primary-mint-accent2" : "bg-primary-mint-accent2 text-primary-dark "} px-6 py-3 text-sm md:text-xl font-bold transition-all duration-300 rounded-sm shadow hover:scale-110  hover:shadow-md`}>6 kWp</button>
                <button onClick={()=> {setPriceBtn(2)}} className={`${priceBtn === 2  ? "bg-primary-mint   text-mint-cream hover:text-primary-mint-accent2" : "bg-primary-mint-accent2 text-primary-dark "}  px-6 py-3 text-sm md:text-xl font-bold transition-all duration-300 rounded-sm shadow hover:scale-110  hover:shadow-md`}>10 kWp</button>
            </div>
            
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <Price priceBtn={priceBtn} setTextToMessage={setTextToMessage}/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
