import React, { useState, useEffect } from "react";
import FirstStep from "./CalculatorComponents/FirstStep";
import SecondStep from "./CalculatorComponents/SecondStep";
import Oferta from "./CalculatorComponents/Oferta";

const CalkulatorME = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstStepShow, setFirstStepShow] = useState(true);
  const [secondStepShow, setSecondStepShow] = useState(false);
  const [ofertaStepShow, setOfertaStepShow] = useState(false);

  const [oneMonth, setOneMonth] = useState(true);
  const [twoMonth, setTwoMonth] = useState(false);
  const [year, setYear] = useState(false);

  const [priceToPay, setPriceToPay] = useState(false);
  const [showPriceForkWp, setShowPriceForkWp] = useState(false);

  const [priceForkWp, setPriceForkWp] = useState(0.75);
  const [calculation, setCalculation] = useState(0);
  const [calculation2023, setCalculation2023] = useState(0);
  const [calcE, setCalcE] = useState(12);

  const [showUpPriceForkWp, setShowUpPriceForkWp] = useState(false);
  const [ActivePV, setActivePV] = useState(true);
  const [ActivePVME, setActivePVME] = useState(false);

  const [standard, setStandard] = useState(true);
  const [niepelnosprawnosc, setNiepelnosprawnosc] = useState(false);
  const [kartaDuzejRodziny, setKartaDuzejRodziny] = useState(false);
  const [gospodarstwo, setGospodarstwo] = useState(false);
  const [limit, setLimit] = useState(2000);

  const [priceUpkWp, setPriceUpkWp] = useState(1.38);
  const [progWOneKwp, setProgWOneKwp] = useState(0);
  const [progWOneZl, setProgWOneZl] = useState(0);

  const [result, setResult] = useState(0);
  const [resultForSecondPage, setResultForSecondPage] = useState(0);

  useEffect(() => {
    if (standard) {
      return setLimit(2000);
    }
    if (niepelnosprawnosc) {
      return setLimit(2600);
    }
    if (kartaDuzejRodziny) {
      return setLimit(3000);
    }
    if (gospodarstwo) {
      return setLimit(3000);
    }
  }, [standard, niepelnosprawnosc, kartaDuzejRodziny, gospodarstwo]);

  useEffect(() => {
    const calculatedValue = ((calculation2023 / 1000) * 4014.8) / 7;
    const formattedValue = calculatedValue.toFixed(2);
    setResult(formattedValue);
  }, [calculation2023]);

  useEffect(() => {
    const calculatedValue = calculation2023 - result;
    const formattedValue = calculatedValue.toFixed(2);
    setResultForSecondPage(formattedValue);
  }, [calculation2023, result]);

  useEffect(() => {
    const calculatedValueKwp = calculation - limit;
    const calculatedValueZl = calculatedValueKwp * priceUpkWp;

    const formattedValueKwp = calculatedValueKwp.toFixed(2);
    const formattedValueZl = calculatedValueZl.toFixed(2);
    setProgWOneKwp(formattedValueKwp);
    setProgWOneZl(formattedValueZl);
  }, [limit, calculation, priceUpkWp]);

  useEffect(() => {
    const calculatedValue = (priceToPay * calcE) / priceForkWp;
    const formattedValue = calculatedValue.toFixed(2);
    setCalculation(formattedValue);
  }, [priceToPay, calcE, priceForkWp]);

  useEffect(() => {
    const calculatedValue = calculation * priceUpkWp;
    const formattedValue = calculatedValue.toFixed(2);
    setCalculation2023(formattedValue);
  }, [priceToPay, calcE, calculation, priceUpkWp]);

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
    setCalcE(12);
  };
  const btnSetTwoMonth = () => {
    setOneMonth(false);
    setTwoMonth(true);
    setYear(false);
    setCalcE(6);
  };
  const btnSetYear = () => {
    setOneMonth(false);
    setTwoMonth(false);
    setYear(true);
    setCalcE(1);
  };

  return (
    <>
      <section
        id="kalkulator"
        className="py-32 max-w-[1170px] mx-auto snap-always snap-start transition-all px-2"
      >
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-center">
          Oblicz opłacalność fotowoltaiki z magazynem energii
        </h2>
        <div className="p-2 mt-20 rounded-md shadow-md md:p-10 ring ring-ocean-green-400 bg-gradient-to-br from-ocean-green-50 to-ocean-green-100 ">
          <div className="mb-5">
            <h3 className="mb-5 text-3xl font-bold text-center">
              Kalkulator rachunków 2023
            </h3>
            <div className="max-w-3xl mx-auto"></div>
            <div className="flex items-center justify-between h-10 pb-2 mx-auto text-xs border-b md:px-20 border-port-gore-200">
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
          <div>
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
            ) : (
              ""
            )}
            {secondStepShow ? (
              <SecondStep
                setShowUpPriceForkWp={setShowUpPriceForkWp}
                showUpPriceForkWp={showUpPriceForkWp}
                priceUpkWp={priceUpkWp}
                setPriceUpkWp={setPriceUpkWp}
                calculation={calculation}
                calculation2023={calculation2023}
                setActivePVME={setActivePVME}
                setActivePV={setActivePV}
                ActivePV={ActivePV}
                ActivePVME={ActivePVME}
                standard={standard}
                setStandard={setStandard}
                setNiepelnosprawnosc={setNiepelnosprawnosc}
                niepelnosprawnosc={niepelnosprawnosc}
                setKartaDuzejRodziny={setKartaDuzejRodziny}
                kartaDuzejRodziny={kartaDuzejRodziny}
                setGospodarstwo={setGospodarstwo}
                gospodarstwo={gospodarstwo}
                progWOneZl={progWOneZl}
                progWOneKwp={progWOneKwp}
                limit={limit}
                resultForSecondPage={resultForSecondPage}
              />
            ) : (
              ""
            )}
            {ofertaStepShow ? (
              <Oferta
                ActivePV={ActivePV}
                ActivePVME={ActivePVME}
                result={result}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex justify-between mt-5 ">
          {secondStepShow && ofertaStepShow ? (
            <button
              onClick={() => {
                if (currentPage === 2) {
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
          ) : (
            ""
          )}
          <button
            onClick={() => {
              if (currentPage === 2) {
                firstPage();
              } else {
                secondPage();
              }
            }}
            className={`px-2 md:px-4 py-2 text-xs md:text-xl rounded-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 text-ocean-green-800 transition-all  ${
              currentPage == 1 ? "opacity-0" : "opacity-100"
            }`}
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
            className={`px-2 md:px-4 py-2 text-xs md:text-xl rounded-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 text-ocean-green-800 transition-all  ${
              currentPage == 3 || priceToPay == 0 ? "opacity-0" : "opacity-100"
            }`}
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
