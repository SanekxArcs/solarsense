import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Privacy from "./Privacy";

const Footer = ({ toggleMOdal, isOpenModal }) => {
  const setActive = ({ isActive }) => (isActive ? "text-primary-mint" : "");
  return (
    <footer className="text-center bg-cadet-space text-mint-cream lg:text-left">
      <div>
        <div className="py-10 text-center md:text-left max-w-[1170px] mx-auto px-6">
          <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <p className="pb-5 text-3xl font-black uppercase select-none md:block">
                <span className=" text-mint-cream">Solar </span>
                <span className=" text-primary-mint">Sense</span>
              </p>
              <p className="select-none ">
                Z nami zyskasz nie tylko oszczędności, ale także pewność, jakość
                i niezawodność
              </p>
            </div>
            <div>
              <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                Mapa strony
              </h6>
              <p className="mb-4">
                <Link to="/#">Fotowoltaika</Link>
              </p>
              <p className="mb-4">
              <Link to="/me">Magazyn energii</Link>
              </p>
              <p className="mb-4">
                <Link to="/me/#Myprad50">Mój prąd 5.0</Link>
              </p>
              <p className="mb-4">
                <Link to="/#galeria">Galeria</Link>
              </p>
              <p className={`mb-4`}>
            <NavLink exact to="/service" className={setActive}>
              Serwis
            </NavLink>
          </p>
              <p className="mb-4">
                <NavLink exact to="/faq" className={setActive}>
                  FAQ
                </NavLink>
              </p>
              <p>
                <button
                  className="transition-colors duration-300 hover:text-primary-mint"
                  onClick={toggleMOdal}
                >
                  Polityka Prywatności
                </button>
                <div
                  className={`${
                    isOpenModal
                      ? " animate-fadeIn bg-black bg-opacity-50"
                      : "hidden"
                  } fixed top-0 left-0 z-[1055]  h-full w-full overflow-y-auto overflow-x-hidden outline-none`}
                >
                  <div className="mt-5 pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px]  transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                    <div className="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-sm border-none  bg-mint-cream bg-clip-padding text-current shadow-lg outline-none  ">
                      <div className="flex items-center justify-between flex-shrink-0 p-4 border-b-2 border-opacity-100 rounded-sm border-neutral-100 ">
                        <h5
                          className="pt-4 text-lg font-medium leading-normal text-center text-cadet-space"
                          id="exampleModalScrollableLabel"
                        >
                          POLITYKA PRYWATNOŚCI STRONY INTERNETOWEJ <br />
                          WWW.SOLARSENSE.PL
                        </h5>
                        <button
                          onClick={toggleMOdal}
                          type="button"
                          className="box-content border-none rounded-sm text-cadet-space hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <Privacy/>

                      <div className="flex flex-wrap items-center justify-end flex-shrink-0 p-4 border-t-2 border-opacity-100 rounded-sm border-neutral-100">
                        <button
                          onClick={toggleMOdal}
                          type="button"
                          className="inline-block rounded-sm bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  text-mint-cream bg-primary-mint transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        >
                          Zamknąć
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div>

            <div>
              <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                Kontakt
              </h6>
              <p className="flex items-center justify-center mb-4 select-none md:justify-start">
                Ul. Szczęsna 26
                <br />
                02-454 Warszawa <br /> NIP: 7382063255
              </p>
              <p className="flex items-center justify-center mb-4 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a href="mailto:biuro@solarsense.pl">biuro@solarsense.pl</a>
              </p>
              <p className="flex items-center justify-center mb-4 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a href="tel:+48733897120">+48 733 897 120 <br />| PL |</a>
              </p>
              <p className="flex items-center justify-center mb-4 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a href="tel:+49735145620">+48 735 145 620 <br />| UA |</a>
              </p>
              
            </div>
          </div>
        </div>
        <div className="p-6 text-center bg-cadet-space ">
          <span className="select-none ">© 2023 Copyright: </span>
          <a
            className="font-semibold text-neutral-400"
            href="https://github.com/SanekxArcs"
          >
            Solar Sense
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
