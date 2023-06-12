import { motion } from "framer-motion";
import elementforprice from "./../../../assets/Svgs/elementforprice.svg";
import elementforprice1 from "./../../../assets/Svgs/elementforprice1.svg";

import priceData10 from "./../../../data/priceData10.json";
import priceData6 from "./../../../data/priceData6.json";
import priceData4 from "./../../../data/priceData4.json";

const Price = ({ priceBtn, setTextToMessage }) => {
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
            className="w-full px-2 transition-all duration-300 rounded md:w-1/2 lg:w-1/3 hover:scale-[1.02]"
          >
            <div
              className={`${
                e.color
                  ? "bg-gradient-to-br from-ocean-green-300 to-ocean-green-200"
                  : "bg-gradient-to-b from-ocean-green-100 to-ocean-green-50"
              } flex flex-col gap-4 relative z-10 px-4 overflow-hidden border rounded hover:shadow-lg shadow-sm transition-shadow duration-300 shadow-ocean-green-200 sm:p-6 lg:p-6 xl:p-12`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="block text-lg font-semibold text-primary"
              >
                {e.title}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-dark text-5xl font-bold"
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
                className={`text-base border-b text-body-color border-ocean-green-500 pb-2`}
              >
                {e.description}
              </motion.p>
              <div className="flex flex-col gap-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-center font-semibold leading-loose text-body-color"
                >
                  Komponenty
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-base leading-loose text-body-color"
                >
                  <span className="font-medium text-lg">Falownik:</span>  <br /> {e.inwerter}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-base leading-loose text-body-color"
                >
                  <span className="font-medium text-lg">Moduły:</span> <br /> {e.solarPanel}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-base leading-loose text-body-color"
                >
                  <span className="font-medium text-lg">Typ dachu:</span> <br /> {e.roof}
                </motion.p>
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                href="#contact"
                onClick={() => {
                  setTextToMessage(
                    `Dzień dobry, mam pytania odnośnie zestawu '${e.title}' instalacji mocy ~${e.power}. Jej komponentami jest: Falownik ${e.inwerter}, moduły ${e.solarPanel}. Potrzebuję szczególną wycenę.`
                  );
                }}
                className={` ${
                  e.color ? "border-port-gore-950" : "border-ocean-green-300 "
                } flex gap-2 justify-center items-center w-full p-4 text-base font-semibold text-center transition bg-transparent border rounded text-port-gore-950 hover:bg-ocean-green-400 hover:text-white`}
              >
                {e.button}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
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
