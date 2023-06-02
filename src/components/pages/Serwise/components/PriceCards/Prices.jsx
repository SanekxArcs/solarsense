import React from 'react'
import Card from './Card'

const Prices = () => {
const data = [
  {
    name: "Pakiet Basic",
    priceOne: "1199",
    priceTwo: "1019",
    priceThree: "959",
    list: [
      "Analiza inwertera",
      "Pomiary elektryczne",
      "Test przeciwpożarowy",
      "Test uziemienia",
      "Kontrola monitoringu",
    ],
  },
  {
    name: "Pakiet Premium",
    priceOne: "1499",
    priceTwo: "1274",
    priceThree: "1199",
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
    name: "Pakiet Biznes",
    priceOne: "2999",
    priceTwo: "2549",
    priceThree: "2399",
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
          <div className="flex justify-between">
            <Card data={data} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Prices