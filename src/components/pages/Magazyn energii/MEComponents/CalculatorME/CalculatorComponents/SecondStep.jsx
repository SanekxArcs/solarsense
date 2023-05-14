import React from "react";
import Chart from "./Chart";

const SecondStep = ({
  setShowUpPriceForkWp,
  showUpPriceForkWp,
  setPriceUpkWp,
  priceUpkWp,
  calculation,
  calculation2023,
  ActivePV,
  ActivePVME,
  setActivePV,
  setActivePVME,
  setStandard,
  standard,
  gospodarstwo,
  setGospodarstwo,
  setKartaDuzejRodziny,
  kartaDuzejRodziny,
  setNiepelnosprawnosc,
  niepelnosprawnosc,
  progWOneKwp,
  progWOneZl,
  limit,
  resultForSecondPage,
}) => {
  
  return (
    <div className="grid gap-5 mt-5 md:grid-cols-2 ">
      <div className="">
        <h4 className="text-xl font-bold pb-7">Twój rachunek w 2023 roku</h4>
        <div className="flex flex-col justify-between gap-5">
          <h5 className="font-medium ">Zaznacz, jaki limit Cię dotyczy:</h5>
          <div className="flex flex-col items-start justify-start gap-2">
            <button onClick={() => {
              setStandard(true);
              setGospodarstwo(false);
              setKartaDuzejRodziny(false);
              setNiepelnosprawnosc(false);
              }}>
              <i className={`pr-2 fa-regular ${standard ? "fa-circle-check" : "fa-circle"}`}
              ></i>
              2000 kWh - standard
            </button>
            <button onClick={() => {
              setStandard(false);
              setGospodarstwo(false);
              setKartaDuzejRodziny(false);
              setNiepelnosprawnosc(true);
              }}>
              <i className={`pr-2 fa-regular ${niepelnosprawnosc ? "fa-circle-check" : "fa-circle"}`}
              ></i>
              2600 kWh -
              niepełnosprawność
            </button>
            <button onClick={() => {
              setStandard(false);
              setGospodarstwo(false);
              setKartaDuzejRodziny(true);
              setNiepelnosprawnosc(false);
              }}>
                <i className={`pr-2 fa-regular ${kartaDuzejRodziny ? "fa-circle-check" : "fa-circle"}`}
              ></i>
              3000 kWh - Karta Dużej
              Rodziny
            </button>
            <button onClick={() => {
              setStandard(false);
              setGospodarstwo(true);
              setKartaDuzejRodziny(false);
              setNiepelnosprawnosc(false);
              }}>
              <i className={`pr-2 fa-regular ${gospodarstwo ? "fa-circle-check" : "fa-circle"}`}
              ></i>
              3000 kWh - gospodarstwo
              rolne
            </button>
          </div>
          <div className="flex flex-col flex-wrap items-start justify-start gap-2 md:flex-row">
            <p>
              Stawka za 1 kWh powyżej progu: <b>{priceUpkWp} zł</b>
            </p>
            <button
              onClick={() => setShowUpPriceForkWp(!showUpPriceForkWp)}
              className="pl-2 font-bold text-ocean-green-700"
            >
              {showUpPriceForkWp ? "Zwin" : "Rozwin"}
            </button>
          </div>

          {showUpPriceForkWp ? <div className="flex gap-2 mt-5">
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            onChange={(e) => setPriceUpkWp(e.target.value)}
            className="peer h-full w-full rounded-[7px] border  border-ocean-green-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-ocean-green-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-400 placeholder-shown:border-t-ocean-green-400 focus:border-2 focus:border-ocean-green-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-ocean-green-50"
            value={priceUpkWp}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-ocean-green-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-ocean-green-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-ocean-green-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-ocean-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-ocean-green-500">
            Przyjęta stawka za 1 kWh
          </label>
        </div>
      </div> : ""}

          <div className="p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <p>
            <i className="pr-2 fa-solid fa-circle-info"></i> 
            {limit >= calculation ? `Nie przekraczasz progu, powyżej którego cena 1 kWh jest dużo wyższa, dlatego pod warunkiem tego samego zużycia w 2023 r. zapłacisz prawie tyle samo.` : `Przekraczasz o ${progWOneKwp} kWh próg, powyżej którego cena 1 kWh jest dużo wyższa. W rezultacie w 2023 roku zapłacisz o ${progWOneZl} zł więcej niż w bieżącym roku.`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="text-xl font-bold ">
          Porównanie rocznych rachunków za prąd
        </h5>
        <div className="flex flex-col justify-between gap-5 ">
          <div className="flex flex-col gap-5 md:flex-row">
            <button onClick={() => {setActivePVME(false); setActivePV(true)}} className={`${ActivePV ? "bg-ocean-green-300" : "bg-ocean-green-50"} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700  hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
              fotowoltaika
            </button>
            <button onClick={() => {setActivePVME(true); setActivePV(false)}} className={`${ActivePVME ? "bg-ocean-green-300" : "bg-ocean-green-50"} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700  hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
              fotowoltaika + magazyn energii
            </button>
          </div>
          <div className="grid place-content-center">
            <Chart calculation={calculation} calculation2023={calculation2023} />
          </div>
          <p className="p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
          <i className="pr-2 fa-solid fa-circle-info"></i>{ActivePV ? `Czy wiesz, że z fotowoltaiką Twoje roczne opłaty spadłyby aż o ${ resultForSecondPage
} zł? Przejdź dalej, by poznać obliczenia.` : `Czy wiesz, że fotowoltaika z magazynem energii zmniejszy Twoje opłaty do zera? Co więcej, sprzedasz dużo więcej energii niż kupisz, a to oznacza, że możesz dodatkowo zarobić nawet ${ resultForSecondPage
} zł.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
