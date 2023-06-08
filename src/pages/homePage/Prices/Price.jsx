import React from "react";
import elementforprice from "./../../../assets/Svgs/elementforprice.svg";
import elementforprice1 from "./../../../assets/Svgs/elementforprice1.svg";
import { motion, AnimatePresence } from "framer-motion";

const Price = ({ priceBtn, setTextToMessage }) => {
  const priceData4 = [
    {
      title: "Najtaniej",
      cena: "18 763",
      description: "Najtańsza opcja inwestycji w przyszłość",
      padding: false,
      inwerter: "SOFAR 3.3 KTLX-G3, L3, 2xMPPT",
      solarPanel: "TONGWEI TW460MAP-120-H-S",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
      power: "4 kWp",
    },
    {
      title: "Rekomendowane",
      cena: "20 223",
      description: "Najlepsza opcja z uwagi na jakość i cenę",
      padding: false,
      inwerter: "FoxESS T4 (G3), L3, 2xMPPT",
      solarPanel: "CORAB ENCOR EC460M-10-120S",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
      power: "4 kWp",
    },
    {
      title: "Premium",
      cena: "26 814",
      description: "Dla wymagających",
      padding: true,
      inwerter: "HUAWEI SUN 2000 4KTL-L3, 2xMPPT",
      solarPanel: "Jolywood jw-hd108n-415w",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
      power: "4 kWp",
    },
  ];

  const priceData6 = [
    {
      title: "Najtaniej",
      cena: "24 335",
      description: "Najtańsza opcja inwestycji w przyszłość",
      padding: false,
      inwerter: "SOFAR 5.5KTL-X-G3, L3, 2xMPPT",
      solarPanel: "TONGWEI TW460MAP-120-H-S",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
      power: "6 kWp",
    },
    {
      title: "Rekomendowane",
      cena: "29 447",
      description: "Najlepsza opcja z uwagi na jakość i cenę",
      padding: false,
      inwerter: "FoxESS T6 (G3), L3, 2xMPPT",
      solarPanel: "CORAB ENCOR EC460M-10-120S",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
      power: "6 kWp",
    },
    {
      title: "Premium",
      cena: "35 172",
      description: "Dla wymagających",
      padding: true,
      inwerter: "HUAWEI SUN 2000-6KTL-M1, L3, 2xMPPT",
      solarPanel: "Jolywood jw-hd108n-415w",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
      power: "6 kWp",
    },
  ];

  const priceData10 = [
    {
      title: "Najtaniej",
      cena: "37 137",
      description: "Najtańsza opcja inwestycji w przyszłość",
      padding: false,
      inwerter: "SOFAR 11KTL-X-G3, L3, 2xMPPT",
      solarPanel: "TONGWEI TW460MAP-120-H-S",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
      power: "10 kWp",
    },
    {
      title: "Rekomendowane",
      cena: "44 264",
      description: "Najlepsza opcja z uwagi na jakość i cenę",
      padding: false,
      inwerter: "FoxESS T10 (G3), L3, 2xMPPT",
      solarPanel: "CORAB ENCOR EC460M-10-120S",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
      power: "10 kWp",
    },
    {
      title: "Premium",
      cena: "52 231",
      description: "Dla wymagających",
      padding: true,
      inwerter: "HUAWEI SUN 2000-10KTL-M1, L3, 2xMPPT",
      solarPanel: "Jolywood jw-hd108n-415w",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
      power: "10 kWp",
    },
  ];

  const mapChange = [priceData4, priceData6, priceData10];
  return (
    <>
      {mapChange[priceBtn].map((e, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full px-4 transition-all duration-300 rounded  md:w-1/2 lg:w-1/3 hover:scale-[1.02] items-stretch justify-stretch"
          >
            <div
              className={` ${
                e.color
                  ? "bg-gradient-to-br from-ocean-green-300 to-ocean-green-200"
                  : "bg-gradient-to-b from-ocean-green-100 to-ocean-green-50"
              } relative z-10 px-8 py-10 mb-10 overflow-hidden border rounded  hover:shadow-lg shadow-sm transition-shadow duration-300 shadow-ocean-green-200 sm:p-12 lg:py-10 lg:px-6 xl:p-12`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="block mb-4 text-lg font-semibold text-primary"
              >
                {e.title}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-dark mb-5 text-[42px] font-bold"
              >
                {e.cena}
                <span className="text-base font-medium text-body-color">
                  / zl
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${
                  e.padding ? "mb-14" : "mb-8"
                }  text-base border-b text-body-color border-ocean-green-500 pb-2`}
              >
                {e.description}
              </motion.p>
              <div className="mb-7">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-1 text-lg font-semibold leading-loose text-body-color"
                >
                  Komponenty:
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-1 text-base leading-loose text-body-color"
                >
                  Falownik: {e.inwerter}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-1 text-base leading-loose text-body-color"
                >
                  Moduły: {e.solarPanel}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-1 text-base leading-loose text-body-color"
                >
                  Typ dachu: {e.roof}
                </motion.p>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                href="#contact"
                onClick={() => {
                  setTextToMessage(
                    `Dzień dobry, mam pytania odnośnie zestawu '${e.title}' instalacji mocy ~${e.power}. Jej komponentami jest: Falownik ${e.inwerter}, moduly ${e.solarPanel}. Potrzebuje szczególną wycenę.`
                  );
                }}
                className={` ${
                  e.color ? "border-port-gore-950" : "border-ocean-green-200 "
                } block w-full p-4 text-base font-semibold text-center transition bg-transparent border rounded  text-port-gore-950 hover:bg-ocean-green-400   hover:text-white`}
              >
                {e.button}
              </motion.a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <img
                    loading="lazy"
                    src={elementforprice}
                    alt="elementforprice"
                  />
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <img
                    loading="lazy"
                    src={elementforprice1}
                    alt="elementforprice 1"
                  />
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Price;
