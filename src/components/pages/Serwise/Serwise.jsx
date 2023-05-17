import photoSerwis from "../../../assets/serwis.webp";
import BottomImg from "../../service/com for style/BottomImg";
import TopImg from "../../service/com for style/TopImg";
import Contact from "../homePage/Contact";
import { motion } from "framer-motion";
const Serwise = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="py-24 text-center text-port-gore-50  bg-port-gore-950 select-none">
          <div className="flex justify-center">
            <div className="max-w-[1000px]">
              <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Najlepszy serwis <br />
                <span className=" text-ocean-green-300">w Twojej okolicy</span>
              </h2>
              <p className="text-lg text-port-gore-200">
                Oferowane przez Solar Sense usługi serwisowe mają wiele
                korzyści. Poznaj je bliżej!
              </p>
            </div>
          </div>
        </section>
        <TopImg />
        <div className="max-w-[1170px] px-6 mx-auto my-24  select-none">
          <section className="my-32 text-port-gore-900">
            <div className="block bg-white rounded-sm shadow-lg">
              <div className="flex flex-wrap items-center">
                <div className="hidden w-full grow-0 shrink-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                  <img
                    src={photoSerwis}
                    alt="Trendy Pants and Shoes"
                    className="w-full rounded-t-sm lg:rounded-tr-none lg:rounded-bl-sm"
                  />
                </div>
                <div className="w-full grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="pb-2 mb-6 text-xl md:text-3xl font-bold">
                      Sprawdź zalety naszych <br />
                      USŁUG SERWISOWYCH
                    </h2>
                    <p className="pb-2 mb-6 text-gray-500">
                      Nasza firma zapewnia szybki i skuteczny serwis instalacji
                      odnawialnych źródeł energii dla klientów indywidualnych
                      oraz przedsiębiorców w atrakcyjnych cenach. <br /> Jeżeli
                      potrzebujesz pomocy doświadczonych fachowców, nie zwlekaj
                      i skontaktuj się z naszą firmą przez powyższy formularz
                      kontaktowy już teraz i poznaj szczegóły oferty.
                    </p>
                    <div className="flex flex-wrap mb-6">
                      <div className="w-full mb-4 lg:w-6/12 xl:w-4/12">
                        <p className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-ocean-green-400"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                          Wsparcie 24/7
                        </p>
                      </div>
                      <div className="w-full mb-4 lg:w-6/12 xl:w-4/12">
                        <p className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2  text-ocean-green-400"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                          Przegląd instalacji
                        </p>
                      </div>
                      <div className="w-full mb-4 lg:w-6/12 xl:w-4/12">
                        <p className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-ocean-green-400"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                          Wymiana modułow
                        </p>
                      </div>
                      <div className="w-full mb-4 lg:w-6/12 xl:w-4/12">
                        <p className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-ocean-green-400"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                          Badanie kamerą termowizyjną
                        </p>
                      </div>
                      <div className="w-full mb-4 lg:w-6/12 xl:w-4/12">
                        <p className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-ocean-green-400"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                          Mycie modułow
                        </p>
                      </div>
                      <div className="w-full mb-4 lg:w-6/12 xl:w-4/12">
                        <p className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-ocean-green-400"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                          Wymiana falownika
                        </p>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className=" py-2 font-bold transition-all border text-ocean-green-50 border-ocean-green-700  hover:shadow-md hover:shadow-ocean-green-100  inline-block text-sm  leading-snug  uppercase  duration-150 ease-in-out bg-ocean-green-500 rounded-sm shadow-md px-7 hover:bg-ocean-green-700  focus:bg-ocean-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ocean-green-800 active:shadow-lg"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Kontakt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-0 md:mb-32 text-center text-gray-800">
            <div className="flex justify-center">
              <div className="max-w-[1000px]">
                <h3 className="mb-10 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  CENNIK
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="pb-5 text-xl font-semibold">
                PRZEGLĄD INSTALACJI
              </h4>
              <div className="flex justify-between  py-3 px-4  bg-ocean-green-300 rounded-sm shadow font-medium">
                <p>Moc zestawu</p>
                <p>Cena brutto</p>
              </div>
              <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>Do 10 kW</p>
                <p>442 zł</p>
              </div>
              <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>10 - 20 kW</p>
                <p>664 zł</p>
              </div>
              <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>20 - 30 kW</p>
                <p>775 zł</p>
              </div>
              <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>30 - 40 kW</p>
                <p>948 zł</p>
              </div>
              <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>40 - 50 kW</p>
                <p>1 168 zł</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-10">
              <h4 className="pb-5 text-xl font-semibold">SERWIS INSTALACJI</h4>
              <div className="flex justify-between  py-3 px-4 bg-ocean-green-300 rounded-sm shadow font-medium">
                <p>Rodzaj</p>
                <p>Cena brutto</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>Wymiana paneli</p>
                <p>0d 250 zł</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>Mycie paneli</p>
                <p>od 350 zł</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>Wymiana falownika</p>
                <p>750 zł</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>Badanie kamerą termowizyjną paneli</p>
                <p>900 zł</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>Pozostałe usługi / z 1 h</p>
                <p>250 zł</p>
              </div>
              <p className="text-gray-900/50 py-2">
                <span className="text-red-400 pr-1 ">*</span>Cennik skalkulowany
                dla miejscowości w promieniu 100 km od Warszawy.
              </p>
            </div>
          </section>
          <Contact />
        </div>
        <BottomImg />
      </motion.div>
    </>
  );
};

export default Serwise;
