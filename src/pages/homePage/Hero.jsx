import { motion } from "framer-motion";

import HeroImg from "./../../assets/Home/hero.webp";
import BorderImg from "./../../assets/Svgs/slider-dash-primary-mint.svg";
import BorderImgWhite from "./../../assets/Svgs/bottom-whites.svg";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="home"
      className="relative transition-all duration-300 bg-center bg-no-repeat bg-cover xl:min-h-[100%-10rem] min-h-144"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="grid w-full min-h-screen transition-all duration-500 place-content-center lg:py-32 md:backdrop-blur-sm hover:backdrop-blur-none bg-port-gore-950 bg-opacity-40 ">
        <div className="relative flex flex-col items-center justify-center gap-12 mx-auto max-h-102 max-w-7xl text-center text-ocean-green-50  px-5 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden text-3xl font-black uppercase md:block animate-text-focus-in"
          >
            <span className=" text-port-gore-950">Solar </span>
            <span className=" text-ocean-green-400">Sense</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-bold select-none md:text-6xl animate-text-focus-in"
          >
            Z nami zyskasz nie tylko oszczędności, ale także pewność, jakość i
            niezawodność
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm select-none md:text-lg animate-text-focus-in"
          >
            Nasza firma specjalizuje się w sprzedaży i montażu instalacji
            fotowoltaicznych. Jesteśmy na rynku już od 5 lat, co świadczy o
            solidnym doświadczeniu w branży.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="z-40 px-8 py-4 text-xl font-bold transition-all duration-300 rounded  shadow bg-ocean-green-500 text-ocean-green-50 hover:scale-105 hover:bg-port-gore-500 hover:shadow-port-gore-500 hover:rounded "
            href="#contact"
          >
            Wycena
          </motion.a>

          <img
            loading="lazy"
            className="absolute bottom-2 left-2 animate-fadeInUpBig animate-delay-500"
            src={BorderImg}
            alt="design image1"
          />
          <img
            loading="lazy"
            className="absolute -rotate-90 bottom-2 right-2 animate-fadeInUpBig animate-delay-700"
            src={BorderImg}
            alt="design image2"
          />
          <img
            loading="lazy"
            className="absolute rotate-90 top-2 left-2 animate-fadeInUpBig animate-delay-1000"
            src={BorderImg}
            alt="design image3"
          />
          <img
            loading="lazy"
            className="absolute rotate-180 top-2 right-2 animate-fadeInUpBig animate-delay-2"
            src={BorderImg}
            alt="design image4"
          />
        </div>
        <img
          loading="lazy"
          className="absolute bottom-0 left-0 right-0 z-0 w-full max-h-1/2"
          src={BorderImgWhite}
          alt="design image5"
        />
      </div>
    </motion.section>
  );
}

export default Hero;
