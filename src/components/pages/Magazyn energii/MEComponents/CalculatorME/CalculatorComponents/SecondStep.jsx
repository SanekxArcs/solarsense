import React from "react";
import Chart from "./Chart";

const SecondStep = ({
  setShowUpPriceForkWp,
  showUpPriceForkWp,
  setPriceUpkWp,
  priceUpkWp,
  calculation,
  ActivePV,
  ActivePVME,
  setActivePV,
  setActivePVME,
  setStandard,
  standard,
  gospodarstwo,
  setGospodarstwo,
  setKartaDużejRodziny,
  kartaDużejRodziny,
  setNiepełnosprawność,
  niepełnosprawność
}) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      <div className="">
        <h4 className="text-xl font-bold pb-7">Twój rachunek w 2023 roku</h4>
        <div className="flex flex-col justify-between gap-5">
          <h5 className="font-medium ">Zaznacz, jaki limit Cię dotyczy:</h5>
          <div className="flex flex-col items-start justify-start gap-2">
            <button onClick={() => {
              setStandard(true);
              setGospodarstwo(false);
              setKartaDużejRodziny(false);
              setNiepełnosprawność(false);
              }}>
              <i className={`pr-2 ${standard ? "fa-regular fa-circle" : "fa-regular fa-circle"}`}
              ></i>
              2000 kWh - standard
            </button>
            <button onClick={() => {
              setStandard(false);
              setGospodarstwo(false);
              setKartaDużejRodziny(false);
              setNiepełnosprawność(true);
              }}>
              <i className={`pr-2 ${niepełnosprawność ? "fa-regular fa-circle" : "fa-regular fa-circle"}`}
              ></i>
              2600 kWh -
              niepełnosprawność
            </button>
            <button onClick={() => {
              setStandard(false);
              setGospodarstwo(false);
              setKartaDużejRodziny(true);
              setNiepełnosprawność(false);
              }}>
                <i className={`pr-2 ${kartaDużejRodziny ? "fa-regular fa-circle" : "fa-regular fa-circle"}`}
              ></i>
              3000 kWh - Karta Dużej
              Rodziny
            </button>
            <button onClick={() => {
              setStandard(false);
              setGospodarstwo(true);
              setKartaDużejRodziny(false);
              setNiepełnosprawność(false);
              }}>
              <i className={`pr-2 ${gospodarstwo ? "fa-regular fa-circle" : "fa-regular fa-circle"}`}
              ></i>
              3000 kWh - gospodarstwo
              rolne
            </button>
          </div>
          <div className="flex gap-2">
            <p>
              Stawka za 1 kWh powyżej progu: <b>{priceUpkWp} zł</b>
            </p>
            <button
              onClick={() => setShowUpPriceForkWp(!setShowUpPriceForkWp)}
              className="pl-2 font-bold"
            >
              {showUpPriceForkWp ? "Zwin" : "Rozwin"}
            </button>
          </div>
          {showUpPriceForkWp ? <ChangePrice price={priceUpkWp} setPrice={setPriceUpkWp} /> : null}
          <div className="p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <p>
            <i className="pr-2 fa-solid fa-circle-info"></i>Nie przekraczasz progu, powyżej którego cena 1 kWh jest dużo
              wyższa, dlatego pod warunkiem tego samego zużycia w 2023 r.
              zapłacisz prawie tyle samo.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="text-xl font-bold ">
          Porównanie rocznych rachunków za prąd
        </h5>
        <div className="flex flex-col justify-between gap-5 ">
          <div className="flex gap-5">
            <button onClick={() => {setActivePVME(false); setActivePV(true)}} className={`${ActivePV ? "bg-ocean-green-300" : null} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700 bg-ocean-green-50 hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
              fotowoltaika
            </button>
            <button onClick={() => {setActivePVME(true); setActivePV(false)}} className={`${ActivePVME ? "bg-ocean-green-300" : null} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700 bg-ocean-green-50 hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
              fotowoltaika + magazyn energii
            </button>
          </div>
          <div>
            <Chart calculation={calculation} />
          </div>
          <p className="p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
          <i className="pr-2 fa-solid fa-circle-info"></i>Czy wiesz, że fotowoltaika z magazynem energii zmniejszy Twoje
            opłaty do zera? Co więcej, sprzedasz dużo więcej energii niż kupisz,
            a to oznacza, że możesz dodatkowo zarobić nawet 311 zł.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
