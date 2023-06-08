import openie1_320 from "./../../assets/Home/opinie1-320.webp";
import openie2_320 from "./../../assets/Home/opinie2-320.webp";
import openie1_768 from "./../../assets/Home/opinie1-768.webp";
import openie2_768 from "./../../assets/Home/opinie2-768.webp";
import openie1 from "./../../assets/Home/opinie1.webp";
import openie2 from "./../../assets/Home/opinie2.webp";
import pic2 from "./../../assets/Home/gal2.webp";

import bialas from "./../../assets/Gallery/bialas.webp";
import svgRew from "./../../assets/Svgs/bottom-white.svg";
import { motion } from "framer-motion";

const opiniaData = [
  {
    name: "Kobylanka",
    review:
      "Firma fotowoltaiczna, którą wybrałem, zrobiła świetną robotę z montażem paneli słonecznych. Jestem bardzo zadowolony z ich usług, a ich profesjonalizm i doświadczenie są godne pochwały.",
    photo1280: openie1,
    photo320: openie1_320,
    photo768: openie1_768,
    altText: "Zdjęcie fotowoltaiczne",
  },
  {
    name: "Kamionka",
    review:
      "Nigdy wcześniej nie miałem do czynienia z firmą fotowoltaiczną, ale ta firma wykonała montaż paneli słonecznych i jestem pod wrażeniem ich pracy. Od pierwszego kontaktu byli bardzo pomocni i kompetentni, a wykonana praca była szybka i dokładna.",
    photo1280: pic2,
    photo320: pic2,
    photo768: pic2,
    altText: "Zdjęcie fotowoltaiczne",
  },
  {
    name: "Warszawa",
    review:
      "Polecam tę firmę fotowoltaiczną każdemu, kto potrzebuje montażu paneli słonecznych. Ich praca była dokładna, zorganizowana i wykonana z pasją. Nie tylko byli profesjonalni, ale również zadbali o każdy szczegół, aby zapewnić, że ich klient jest w pełni zadowolony.",
    photo1280: bialas,
    photo320: bialas,
    photo768: bialas,
    altText: "Zdjęcie fotowoltaiczne",
  },
];

function Opinia() {
  return (
    <div id="opinia" className="py-32 select-none bg-port-gore-950">
      <section className=" text-center lg:text-left xl:w-[1170px] mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center uppercase md:text-6xl text-ocean-green-50 "
        >
          Nasze najlepsze recenzje
        </motion.h2>
        <div className="grid items-stretch px-2 place-content-end lg:grid-cols-3 gap-x-6 lg:gap-x-12">
          {opiniaData.map((item, index) => {
            return (
              <div
                key={index}
                className="grid items-stretch mb-6 transition-all duration-300 rounded  shadow-lg lg:mb-0 bg-ocean-green-50 hover:-translate-y-2 hover:shadow-xl hover:shadow-ocean-green-400"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-no-repeat bg-cover"
                >
                  <picture className="overflow-hidden rounded ">
                    <source
                      media="(min-width: 1100px)"
                      srcset={item.photo320}
                    />
                    <source media="(min-width: 768px)" srcset={item.photo768} />
                    <source srcset={item.photo320} />
                    <img
                      src={item.photo320}
                      className="object-cover w-full bg-cover rounded  h-60 "
                      alt={item.altText}
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-100">
                    <img
                      className="absolute bottom-0 left-0"
                      src={svgRew}
                      alt="svg"
                    />
                  </div>
                </motion.div>
                <div className="grid gap-5 p-6 place-content-start">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-lg font-bold"
                  >
                    {item.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className=""
                  >
                    {item.review}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Opinia;
