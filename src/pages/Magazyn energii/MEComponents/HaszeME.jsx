import React from "react";
import mesun from "./../../../assets/me/magazyn-energii-4k-02-1-1.webp";
import mepyl from "./../../../assets/me/Product_ME.webp";

const HaszeME = () => {
  return (
    <>
      <section
        id="backup"
        className="py-10 text-center md:text-left max-w-7xl mx-auto px-6 md:my-20 snap-always snap-start"
      >
        <h2 className="pt-10 text-4xl font-bold text-center uppercase md:mb-12 md:text-5xl text-port-gore-950">
          Nasze modele magazynów
        </h2>
        <div className="grid pt-10 md:grid-cols-2">
          <div className="flex flex-col gap-5 pb-10 md:flex-row">
            <div className="grid place-content-center">
              <img loading="lazy" src={mesun} alt="inverter huawei" />
            </div>
            <div>
              <h3 className="text-xl">Magazyn energii US2000</h3>
              <p className="text-sm">dla instalacji jednofazowych</p>
              <p className="pt-5 pb-2">Zalety:</p>
              <ul className="pl-5 list-disc">
                <li>
                  nowoczesna, kompaktowa obudowa, która zajmuje niewiele
                  miejsca,
                </li>
                <li>tryb automatycznego chłodzenia redukujący hałas,</li>
                <li>szeroki zakres temperatur pracy od -10 ℃ do 50 ℃,</li>
                <li>certyfikat bezpieczeństwa TüV CE UN38.3,</li>
                <li>funkcja backup – uruchomienie zasilania w 40 ms.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-10 md:flex-row">
            <div className="grid place-content-center">
              <img loading="lazy" src={mepyl} alt="inverter pylotech" />
            </div>
            <div>
              <h3 className="text-xl">Magazyn energii FORCE H2</h3>
              <p className="text-sm">dla instalacji trójfazowych</p>
              <p className="pt-5 pb-2">Zalety:</p>
              <ul className="pl-5 list-disc">
                <li>modułowy design umożliwiający rozbudowę,</li>
                <li>niezawodność i wydajność,</li>
                <li>możliwość rozbudowy od 7-14 kWh pojemności,</li>
                <li>szeroki zakres temperatur pracy od -20 ℃ do 60 ℃,</li>
                <li>norma szczelności IP55,</li>
                <li>funkcja backup – uruchomienie zasilania w 40 ms.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HaszeME;
