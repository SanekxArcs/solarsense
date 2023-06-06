import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
const Finansowanie = () => {
  const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
  ];
  return (
    <>
      <div className="max-w-[1170px] px-6 mx-auto my-24 animate-slideInLeft">
        <section className="mb-32 text-center text-gray-800">
          <div className="flex justify-center">
            <div className="max-w-[800px]">
              <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Wykorzystaj
                <br />
                <span className=" text-ocean-green-400">FINANSOWANIE</span>
              </h2>
              <p className="text-lg text-ocean-green-500">
                Chciałbyś obniżyć rachunki za prąd w swojej firmie, bez
                inwestowania dużych kwot i szukasz najlepszego rozwiązania?
                Chcielibyśmy zaproponować Ci jedną z najkorzystniejszych ofert
                leasingowych na rynku, która u nas wynosi 106,39%!
              </p>
            </div>
          </div>
        </section>
        <div className="pb-24 sm:pb-32">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-ocean-green-900 sm:text-4xl">
                Sprawdź teraz
              </h2>
              <p className="mt-6 text-lg leading-8 text-ocean-green-600">
                Leasing operacyjny, finansowy czy pożyczka leasingowa?
              </p>
            </div>
            <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-ocean-green-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-ocean-green-900">
                  LEASING
                </h3>
                <p className="mt-6 text-base leading-7 text-ocean-green-600">
                  W przypadku leasingu operacyjnego otrzymasz środek trwały w
                  zamian za miesięczne opłaty ratalne. Musisz jednak uiścić
                  opłatę wstępną wynoszącą od 10 do 45% wartości. Łączny koszt
                  tej opcji nie powinien przekroczyć 120% inwestycji (u nas
                  wynosi wynoszącą 106,39%!), natomiast czas trwania leasingu
                  wynosi od 48 do 96 miesięcy. <br />
                  Decydując się na leasing finansowy, należy liczyć się z
                  większym kosztem początkowym, ponieważ poza pierwszą ratą
                  wynoszącą minimum 10% inwestycji, należy zapłacić podatek VAT
                  od całości. Można go jednak odzyskać z US bądź rozliczyć w
                  ramach działalności bieżącej. Czas trwania tej opcji wynosi od
                  6 do 60 miesięcy. <br />
                  Kolejnym rozwiązaniem jest pożyczka leasingowa. Jeśli
                  postawisz na nią, to musisz liczyć się z obniżeniem Twojej
                  zdolności kredytowej. Jednak w zamian za to możesz starać się
                  o dotację i zwrot części inwestycji. Okres spłaty pożyczki
                  leasingowej może wynosić nawet do 8 lat, a jej szczegółowe
                  warunki ustala pożyczkobiorca.
                </p>
                <div className="flex items-center mt-10 gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-ocean-green-600">
                    What’s included
                  </h4>
                  <div className="flex-auto h-px bg-ocean-green-100" />
                </div>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-ocean-green-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="flex-none w-5 h-6 text-ocean-green-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="py-10 text-center rounded-2xl bg-ocean-green-50 ring-1 ring-inset ring-ocean-green-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="max-w-xs px-8 mx-auto">
                    <p className="text-base font-semibold text-ocean-green-600">
                      Pay once, own it forever
                    </p>
                    <p className="flex items-baseline justify-center mt-6 gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-ocean-green-900">
                        $349
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-ocean-green-600">
                        USD
                      </span>
                    </p>
                    <a
                      href="#"
                      className="block w-full px-3 py-2 mt-10 text-sm font-semibold text-center text-ocean-green-50 bg-ocean-green--600 rounded-md shadow-sm hover:bg-ocean-green--500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-green--600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-ocean-green-600">
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finansowanie;
