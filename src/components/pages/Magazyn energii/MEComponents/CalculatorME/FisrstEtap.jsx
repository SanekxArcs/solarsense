import React from "react";

const FisrstEtap = () => {
  return (
    <>
              <div className="grid grid-cols-2 gap-20 mt-20 ">
          <div className="flex flex-col gap-5 ">
            <h4 className="text-2xl font-bold">Dotychczasowy rachunek</h4>
            <p className="font-medium ">
              Wybierz, za jaki okres podasz wysokość opłat za prąd
            </p>
            <div className="flex flex-wrap gap-3 justify-stretch">
              <button className="px-4 py-2 font-bold transition-all rounded-md bg-primary-mint/50 text-primary-dark hover:shadow-md hover:shadow-primary-mint/50 hover:-translate-y-1">
                miesięczny
              </button>
              <button className="px-4 py-2 font-bold transition-all rounded-md bg-primary-mint/50 text-primary-dark hover:shadow-md hover:shadow-primary-mint/50 hover:-translate-y-1">
                2-miesięczny
              </button>
              <button className="px-4 py-2 font-bold transition-all rounded-md bg-primary-mint/50 text-primary-dark hover:shadow-md hover:shadow-primary-mint/50 hover:-translate-y-1">
                roczny
              </button>
            </div>
            <div>
            <p className="p-5 rounded-md shadow-md bg-primary-mint-lighter2/30 shadow-primary-mint-lighter2/30">
              Moc instalacji dobiera się na podstawie rocznego zapotrzebowania,
              dlatego rekomendujemy podanie wysokości rachunków za cały
              poprzedni rok.
            </p>
          </div>
          </div>
          
          <div className="">
            <h4 className="mb-2 font-medium">Wpisz wysokość rocznych opłat</h4>
            <div>
              <div class="w-72">
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full rounded-[7px] border  border-primary-mint border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Podaj kwote zl
                  </label>
                </div>
              </div>
            </div>
            <div className="p-5 mt-10 rounded-md shadow-md bg-primary-mint-lighter2/30 shadow-primary-mint-lighter2/30">
            <p className="">
                To oznacza, że Twoje roczne zapotrzebowanie na energię elektryczną wynosi około 0 kWh.
                </p>
                <p>Przyjęta stawka za 1 kWh: 0,75 zł<button className="pl-2 font-bold">Zmien</button></p>
                
            <div className="flex gap-2 mt-5">
            <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full rounded-[7px] border  border-primary-mint border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " value={0.75}
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Przyjęta stawka za 1 kWh
                  </label>
                </div>
            </div>
          </div>
          </div>
          
        </div>
    </>
  );
};

export default FisrstEtap;
