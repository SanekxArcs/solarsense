import React from 'react'
import photoSerwis from "./../../../../assets/Servise/serwis.webp";

const Advantages = () => {
  return (
    <>
      <div className="max-w-[1170px] px-6 mx-auto my-24 select-none">
        <section className="my-32 text-port-gore-900">
          <div className="block bg-white rounded-sm shadow-lg">
            <div className="flex flex-wrap items-center">
              <div className="hidden w-full lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  loading="lazy"
                  src={photoSerwis}
                  alt="solar panel work man"
                  className="object-cover w-full h-full rounded-t-sm lg:rounded-tr-none lg:rounded-bl-sm"
                />
              </div>
              <div className="w-full grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="pb-2 mb-6 text-xl font-bold md:text-3xl">
                    Sprawdź zalety naszych <br />
                    USŁUG SERWISOWYCH
                  </h2>
                  <p className="pb-2 mb-6 text-gray-500">
                    Nasza firma zapewnia szybki i skuteczny serwis instalacji
                    odnawialnych źródeł energii dla klientów indywidualnych oraz
                    przedsiębiorców w atrakcyjnych cenach. <br /> Jeżeli
                    potrzebujesz pomocy doświadczonych fachowców, nie zwlekaj i
                    skontaktuj się z naszą firmą przez powyższy formularz
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
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Advantages;