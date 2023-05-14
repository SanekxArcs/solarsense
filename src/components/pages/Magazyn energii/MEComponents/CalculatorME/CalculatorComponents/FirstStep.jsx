import React from "react";
import ChangePrice from "./ChangePrice";

const FirstStep = ({btnSetYear, btnSetTwoMonth, btnSetOneMonth, year, twoMonth, oneMonth, priceToPay, setPriceToPay, priceForkWp, setPriceForkWp, showPriceForkWp, setShowPriceForkWp, calculation}) => {
  return (
    <>
              <div className="grid md:grid-cols-2 gap-5 md:gap-20 mt-10 text-ocean-green-800">
          <div className="flex flex-col gap-5 ">
            <h4 className="text-2xl font-bold">Dotychczasowy rachunek</h4>
            <p className="font-medium ">
              Wybierz, za jaki okres podasz wysokość opłat za prąd
            </p>
            <div className="flex flex-wrap flex-col md:flex-row gap-3 justify-stretch">

              <button onClick={btnSetOneMonth} className={`${oneMonth ? "bg-ocean-green-300" : "bg-ocean-green-50"} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700 hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
                miesięczny
              </button>
              <button onClick={btnSetTwoMonth} className={`${twoMonth ? "bg-ocean-green-300" : "bg-ocean-green-50"} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700  hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
                2-miesięczny
              </button>
              <button onClick={btnSetYear} className={`${year ? "bg-ocean-green-300" : "bg-ocean-green-50"} px-4 py-2 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700 hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200`}>
                roczny
              </button>
            </div>
            <div>
            <p className="p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <i className="pr-2 fa-solid fa-circle-info"></i>
            Moc instalacji dobiera się na podstawie rocznego zapotrzebowania,
              dlatego rekomendujemy podanie wysokości rachunków za cały
              poprzedni rok.
            </p>
          </div>
          </div>
          
          <div className="">
            <h4 className="mb-2 text-xl font-medium">Wpisz wysokość {year ? "rocznych": ""}{twoMonth ? "2-miesięcznych": ""}{oneMonth ? "miesięcznych": ""} opłat</h4>
            <div>
              <div className ="w-72">
                <div className ="relative h-10  md:w-full min-w-[200px]">
                  <input onChange={(e) => setPriceToPay(e.target.value)}
                    className ="peer h-full w-full rounded-[7px] border  border-ocean-green-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-ocean-green-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700 placeholder-shown:border-t-ocean-green-700 focus:border-2 focus:border-ocean-green-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-ocean-green-50"
                    placeholder=" "
                    value={priceToPay ? priceToPay: ""}
                  />
                  <label className ="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-ocean-green-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-ocean-green-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-ocean-green-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-ocean-green-700">
                    Podaj kwote zl
                  </label>
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 md:mt-20 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
              <p className="">
                <i className="pr-2 fa-solid fa-circle-info"></i>
                To oznacza, że Twoje roczne zapotrzebowanie na energię elektryczną wynosi około {calculation} kWh.
              </p>
                  <p>
                    Przyjęta stawka za 1 kWh: {priceForkWp} zł
                    <button onClick={() => setShowPriceForkWp(!showPriceForkWp)} className="pl-2 font-bold">
                      {showPriceForkWp ? "Zwin" : "Rozwin"}
                    </button>
                  </p>
                  {showPriceForkWp ? <ChangePrice price={priceForkWp} setPrice={setPriceForkWp} /> : ""}
            </div>
          </div>
        </div>
    </>
  );
};

export default FirstStep;
