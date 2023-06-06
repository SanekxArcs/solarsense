import Price from "./Price";
import { motion } from "framer-motion";
import useLocalStorageState from "./../../../service/useLocalStorageState";

const Pricing = ({ setTextToMessage }) => {
  const [priceBtn, setPriceBtn] = useLocalStorageState("priceBtn", 0);

  return (
    <>
      <div className="my-32  text-port-gore-950">
        <section className="relative z-20 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] max-w-[1170px] mx-auto ">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-10 ">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="block mb-2 text-lg font-semibold text-primary "
                  >
                    Nasz cennik
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-dark mb-4 font-bold sm:text-4xl md:text-[40px] uppercase text-4xl lg:text-6xl">
                    Zestawy
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-base text-body-color">
                    Wybierz moc instalacji jaka ci jest najbliżej i dowiedź się
                    ceny na zestaw.
                  </motion.p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center gap-5 pb-10 "
            >
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => {
                  setPriceBtn(0);
                }}
                className={`${
                  priceBtn === 0
                    ? "bg-ocean-green-400 text-ocean-green-50 hover:text-ocean-green-100 "
                    : "bg-ocean-green-100  text-port-gore-950 "
                } px-6 py-3 text-sm md:text-xl font-bold  transition-all duration-300 rounded-sm shadow   hover:scale-110 hover:shadow-md`}
              >
                4 kWp
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => {
                  setPriceBtn(1);
                }}
                className={`${
                  priceBtn === 1
                    ? "bg-ocean-green-400   text-ocean-green-50 hover:text-ocean-green-100 "
                    : "bg-ocean-green-100  text-port-gore-950 "
                } px-6 py-3 text-sm md:text-xl font-bold transition-all duration-300 rounded-sm shadow hover:scale-110  hover:shadow-md`}
              >
                6 kWp
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={() => {
                  setPriceBtn(2);
                }}
                className={`${
                  priceBtn === 2
                    ? "bg-ocean-green-400   text-ocean-green-50 hover:text-ocean-green-100 "
                    : "bg-ocean-green-100  text-port-gore-950 "
                }  px-6 py-3 text-sm md:text-xl font-bold transition-all duration-300 rounded-sm shadow hover:scale-110  hover:shadow-md`}
              >
                10 kWp
              </motion.button>
            </motion.div>

            <div className="flex flex-wrap items-stretch w-full justify-stretch">
              <Price priceBtn={priceBtn} setTextToMessage={setTextToMessage} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
