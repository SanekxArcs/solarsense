import React from 'react'
import Card from './Card'

const Prices = () => {
const data = [
  {
    name: "Standard",
    priceOne: "531 zł/rok netto",
    list: [
      "Analiza inwertera",
      "Pomiary elektryczne",
      "Test przeciwpożarowy",
      "Test uziemienia",
      "Kontrola monitoringu",
    ],
  },
  {
    name: "Dla Domy",
    priceOne: "783 zł/rok netto",
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
    name: "Dla Firmy",
    priceOne: "Indywidualna wycena",
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
      <div id="Przegland" className="bg-port-gore-950 text-ocean-green-50">
        <section className="px-6 py-32 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center md:text-5xl ">
            PRZEGLĄD INSTALACJI <br />
            <span className="pl-2 text-ocean-green-400">FOTOWOLTAICZNEJ</span>
          </h2>
          <div className="flex flex-wrap gap-5 justify-stretch">
            <Card data={data} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Prices