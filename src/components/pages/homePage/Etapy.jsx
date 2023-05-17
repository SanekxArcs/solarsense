import { motion } from "framer-motion";

const Etapy = () => {
  return (
    <div
      id="etapy"
      className="relative select-none bg-port-gore-950 py-14 text-ocean-green-50 "
    >
      <div className="max-w-[1170px] mx-auto">
        <section className="text-center ">
          <motion.h2 
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
           className="pb-10 text-3xl font-bold uppercase md:text-6xl ">
            Etapy współpracy
          </motion.h2>
          <div className="grid items-stretch gap-6 p-5 md:grid-cols-3 place-content-center lg:gap-x-6">
            <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-ocean-green-400  bg-ocean-green-400/10 hover:text-port-gore-950 ">
              <i className="fa-solid fa-chalkboard-user text-5xl pb-2"></i>
              <h3 className="pb-2 text-lg font-medium">Kontakt</h3>
              <p className="text-sm">
                Skontaktuj się z nami poprzez telefon, e-mail lub wypełniając
                formularz kontaktowy na naszej stronie internetowej.
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                1
              </span>
              <i className="fa-solid fa-angle-right absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-6xl text-ocean-green-50  hidden md:block"></i>
              <i className="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-ocean-green-50  md:hidden"></i>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }} className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-ocean-green-400  bg-ocean-green-400/10 hover:text-port-gore-950">
              <i className="fa-solid fa-file-signature text-5xl pb-2"></i>
              <h3 className="text-lg font-medium">Wstępna rozmowa i audyt</h3>
              <p className="text-sm">
                Na pierwszym etapie przeprowadzimy z Tobą wstępną rozmowę, aby
                poznać Twoje potrzeby oraz możliwości. Następnie wykonamy
                bezpłatny audyt, który pozwoli nam na dokładne oszacowanie
                kosztów instalacji fotowoltaicznej.
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                2
              </span>
              <i className="fa-solid fa-angle-right absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-6xl text-ocean-green-50  hidden md:block"></i>
              <i className="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-ocean-green-50  md:hidden"></i>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }} className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-ocean-green-400  bg-ocean-green-400/10 hover:text-port-gore-950">
              <i className="fa-solid fa-file-signature text-5xl pb-2"></i>
              <h3 className="text-lg font-medium">Projekt i oferta</h3>
              <p className="text-sm">
                Na podstawie wyników audytu przygotujemy dla Ciebie projekt
                instalacji wraz z ofertą cenową. Otrzymasz od nas także
                szczegółowy opis instalacji, jej funkcjonalności i korzyści,
                jakie z niej wynikają.
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                3
              </span>
              <i className="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-ocean-green-50 "></i>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }} className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-ocean-green-400  bg-ocean-green-400/10 hover:text-port-gore-950">
              <i className="fa-regular fa-handshake text-5xl pb-2"></i>
              <h3 className="text-lg font-medium">
                Umowa i przygotowanie materiałów
              </h3>
              <p className="text-sm">
                Po akceptacji oferty podpiszemy umowę, a następnie przystąpimy
                do przygotowania materiałów. Sprzęt na montaż zostanie wysłany
                do Ciebie kurierem.
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                4
              </span>
              <i className="fa-solid fa-angle-left absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl text-ocean-green-50   hidden md:block"></i>
              <i className="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-ocean-green-50  md:hidden"></i>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }} className="relative p-10 transition-all duration-500 rounded-sm md:col-start-2 md:row-start-2 lg:mb-0 hover:bg-ocean-green-400  bg-ocean-green-400/10 hover:text-port-gore-950">
              <i className="fa-solid fa-screwdriver-wrench text-5xl pb-2"></i>
              <h3 className="text-lg font-medium">Montaż</h3>
              <p className="text-sm">
                Po wcześniejszym ustaleniu terminu przystąpimy do montażu
                instalacji. Zajmie nam to od 1 do 3 dni, w zależności od
                skomplikowania instalacji i warunków atmosferycznych.
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                5
              </span>
              <i className="fa-solid fa-angle-left absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl text-ocean-green-50  hidden md:block"></i>
              <i className="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-ocean-green-50  md:hidden"></i>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }} className="relative p-10 transition-all duration-500 rounded-sm md:col-start-1 md:row-start-2 lg:mb-0 hover:bg-ocean-green-400  bg-ocean-green-400/10 hover:text-port-gore-950">
              <i className="fa-solid fa-handshake-simple text-5xl pb-2"></i>
              <h3 className="text-lg font-medium">Odbiór instalacji</h3>
              <p className="text-sm">
                Po zakończeniu montażu przeprowadzimy niezbędne pomiary oraz
                podpiszemy protokół odbioru usługi. Odbiór instalacji następuje
                po potwierdzeniu, że została ona wykonana zgodnie z umową i jest
                w pełni sprawna.
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                6
              </span>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Etapy;
