import WhyWe from "./WhyWe";
import svgBorderImg from "./../../../assets/Svgs/slider-dash-primary-mint.svg";
import { motion } from "framer-motion";

function DlaCzego() {
  return (
    <div id="dlaChegoMy" className="relative py-20 select-none md:py-32">
      <section className="max-w-7xl mx-auto">
        <div className="relative grid items-center grid-cols-1 ld:grid-cols-3">
          <div className="relative w-full p-10 mb-6 grow-0 shrink-0 basis-auto md:mb-0">
            <motion.p
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-sm font-bold uppercase text-ocean-green-600 lg:text-base"
            >
              OFERUJEMY RÓŻNE USŁUGI
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-3xl font-bold lg:text-5xl"
            >
              Dlaczego my?
            </motion.h2>

            <p className="text-sm lg:mb-12"></p>
          </div>

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute -rotate-90 bottom-2 right-2 "
            src={svgBorderImg}
            alt="design image2"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute rotate-90 top-2 left-2 "
            src={svgBorderImg}
            alt="design image3"
          />
          <WhyWe />
        </div>
      </section>
    </div>
  );
}

export default DlaCzego;
