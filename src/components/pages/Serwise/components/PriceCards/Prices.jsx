import React from 'react'
import Card from './Card'

const Prices = () => {
const data = [
  {
    name: "Wariant I",
    priceOne: "900",
    priceTwo: "785",
    priceThree: "653",
    list: [
      "Analiza inwertera",
      "Pomiary elektryczne",
      "Test przeciwpożarowy",
      "Test uziemienia",
      "Kontrola monitoringu",
    ],
  },
  {
    name: "Wariant II",
    priceOne: "1250",
    priceTwo: "1107",
    priceThree: "964",
    list: [
      "Analiza inwertera",
      "Pomiary elektryczne",
      "Test przeciwpożarowy",
      "Test uziemienia",
      "Kontrola monitoringu",
      "Kontrola stanu modułów",
      "Kontrola konstrukcji wsporczej",
      "Kontrola połączeń w rozdzielnicy",
    ],
  },
  {
    name: "Wariant III",
    priceOne: "1950",
    priceTwo: "1549",
    priceThree: "1399",
    list: [
      "Analiza inwertera",
      "Pomiary elektryczne",
      "Test przeciwpożarowy",
      "Test uziemienia",
      "Kontrola monitoringu",
      "Kontrola stanu modułów",
      "Kontrola konstrukcji wsporczej",
      "Kontrola połączeń w rozdzielnicy",
      "Sprawdzenie mocowań modułów",
      "Pomiary impedancji i rezystancji",
      "Badanie kamerą termowizyjną",
    ],
  },
];

  return (
    <>
      <div className="bg-port-gore-950 text-ocean-green-50">
        <section className="max-w-[1170px] px-6 mx-auto py-32">
          <h2 className="mb-12 text-5xl font-bold tracking-tight text-center ">
            PRZEGLĄD INSTALACJI <br />
            <span className="pl-2 text-ocean-green-400">FOTOWOLTAICZNEJ</span>
          </h2>
          <div className="flex flex-wrap justify-between gap-5">
            <Card data={data} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Prices