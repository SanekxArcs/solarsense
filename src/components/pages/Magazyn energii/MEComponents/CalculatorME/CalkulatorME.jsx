import React, { useState, useEffect } from "react";
import FirstStep from "./CalculatorComponents/FirstStep";
import SecondStep from "./CalculatorComponents/SecondStep";
import Oferta from "./CalculatorComponents/Oferta";

const CalkulatorME = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstStepShow, setFirstStepShow] = useState(true);
  const [secondStepShow, setSecondStepShow] = useState(false);
  const [ofertaStepShow, setOfertaStepShow] = useState(false);
  const [oneMonth, setOneMonth] = useState(false);
  const [twoMonth, setTwoMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [priceToPay, setPriceToPay] = useState(false);
  const [showPriceForkWp, setShowPriceForkWp] = useState(false);
  const [priceForkWp, setPriceForkWp] = useState(0.75);
  const [calculation, setCalculation] = useState(0);
  const [calcE, setCalcE] = useState(12);
  
  const [showUpPriceForkWp, setShowUpPriceForkWp] = useState(false);
  const [ActivePV, setActivePV] = useState(false);
  const [ActivePVME, setActivePVME] = useState(false);
  const [standard, setStandard] = useState(true);
  const [niepełnosprawność, setNiepełnosprawność] = useState(false);
  const [kartaDużejRodziny, setKartaDużejRodziny] = useState(false);
  const [gospodarstwo, setGospodarstwo] = useState(false);
  const [priceUpkWp, setPriceUpkWp] = useState(1.38);


  useEffect(() => {
    setCalculation((priceToPay * calcE)  / priceForkWp);
  }, [priceToPay, calcE]);

  const firstPage = () => {
    setFirstStepShow(true);
    setSecondStepShow(false);
    setOfertaStepShow(false);
    setCurrentPage(1);
  };
  const secondPage = () => {
    setFirstStepShow(false);
    setSecondStepShow(true);
    setOfertaStepShow(false);
    setCurrentPage(2);
  };
  const ofertaPage = () => {
    setFirstStepShow(false);
    setSecondStepShow(false);
    setOfertaStepShow(true);
    setCurrentPage(3);
  };

  const btnSetOneMonth = () => {
    setOneMonth(true);
    setTwoMonth(false);
    setYear(false);
    setCalcE(12)
  };
  const btnSetTwoMonth = () => {
    setOneMonth(false);
    setTwoMonth(true);
    setYear(false);
    setCalcE(6)
  };
  const btnSetYear = () => {
    setOneMonth(false);
    setTwoMonth(false);
    setYear(true);
    setCalcE(1)
  };

  return (
    <>
      <section className="py-32 max-w-[1170px] mx-auto snap-always snap-start transition-all">
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-center">
          Oblicz opłacalność fotowoltaiki z magazynem energii
        </h2>
        <div className="p-10 mt-20 rounded-md shadow-md ring ring-ocean-green-400 bg-gradient-to-br from-ocean-green-50 to-ocean-green-100 ">
          <div className="mb-5">
            <h3 className="mb-5 text-3xl font-medium text-center">
              Kalkulator rachunków 2023
            </h3>
            <div className="max-w-3xl mx-auto"></div>
            <div className="flex items-center justify-between h-10 px-20 pb-2 mx-auto text-xs border-b border-port-gore-200">
              <p
                className={`${
                  firstStepShow
                    ? "font-bold text-ocean-green-700 text-lg"
                    : "text-xs"
                }  transition-all`}
              >
                Stan obecny
              </p>
              <p
                className={`${
                  secondStepShow
                    ? "font-bold text-ocean-green-700 text-lg"
                    : "text-xs"
                } transition-all `}
              >
                Rachunek 2023
              </p>
              <p
                className={`${
                  ofertaStepShow
                    ? "font-bold text-ocean-green-700 text-lg"
                    : "text-xs"
                } transition-all `}
              >
                Wycena
              </p>
            </div>
          </div>
          {firstStepShow ? (
            <FirstStep
              year={year}
              twoMonth={twoMonth}
              oneMonth={oneMonth}
              btnSetOneMonth={btnSetOneMonth}
              btnSetTwoMonth={btnSetTwoMonth}
              btnSetYear={btnSetYear}
              setPriceToPay={setPriceToPay}
              priceToPay={priceToPay}
              setPriceForkWp={setPriceForkWp}
              priceForkWp={priceForkWp}
              setShowPriceForkWp={setShowPriceForkWp}
              showPriceForkWp={showPriceForkWp}
              calculation={calculation}
            />
          ) : null}
          {secondStepShow ? (
            <SecondStep
              setShowUpPriceForkWp={setShowUpPriceForkWp}
              showUpPriceForkWp={showUpPriceForkWp}
              priceUpkWp={priceUpkWp}
              setPriceUpkWp={setPriceUpkWp}
              calculation={calculation}
              setActivePVME={setActivePVME}
              setActivePV={setActivePV}
              ActivePV={ActivePV}
              ActivePVME={ActivePVME}
              standard={standard}
              setStandard={setStandard}
              setNiepełnosprawność={setNiepełnosprawność}
              niepełnosprawność={niepełnosprawność}
              setKartaDużejRodziny={setKartaDużejRodziny}
              kartaDużejRodziny={kartaDużejRodziny}
              setGospodarstwo={setGospodarstwo}
              gospodarstwo={gospodarstwo}
              
            />
          ) : null}
          {ofertaStepShow ? <Oferta /> : null}
        </div>
        <div className="flex justify-between mt-5 ">
          {secondStepShow && ofertaStepShow ? (
            <button
              onClick={() => {
                if ((currentPage === 2)) {
                  firstPage();
                } else {
                  secondPage();
                }
              }}
              className="px-8 py-2 text-xl font-medium rounded-md bg-port-gore-900 text-ocean-green-50"
            >
              <i className="pr-2 fa-solid fa-circle-arrow-left"></i>Poprzedni
              krok
            </button>
          ) : null}
          <button
            onClick={() => {
              if (currentPage === 2) {
                firstPage();
              } else {
                secondPage();
              }
            }}
            className="px-8 py-2 text-xl font-medium rounded-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 text-ocean-green-800"
          >
            <i className="pr-2 fa-solid fa-circle-arrow-left"></i>Poprzedni krok
          </button>

          <button
            onClick={() => {
              if (currentPage === 1) {
                secondPage();
              } else {
                ofertaPage();
              }
            }}
            className="px-4 py-2 text-xl rounded-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 text-ocean-green-800"
          >
            Przejdź dalej
            <i className="pl-2 fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default CalkulatorME;
