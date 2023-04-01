// import { NavLink } from "react-router-dom";
import LightLogo from "../resourses/solarsense-light-logo.svg";
import { NavLink } from "react-router-dom";

const Underheader = ({ toggleMenu, isOpen }) => {
  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 bottom-auto z-40 shadow-md text-mint-cream bg-cadet-space`}
      >
        <ul className=" flex justify-between px-4  md:justify-between max-w-[1170px] h-14 md:h-10  mx-auto items-center">
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-150">
            <NavLink exact to="/">
              Strona główna
            </NavLink>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-300">
            <a href="#dlaChegoMy">Dlaczego my?</a>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-500">
            <a href="#etapy">Etapy współpracy</a>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-700">
            <a href="#galeria">Galeria</a>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-1000">
            <NavLink exact to="/faq">
              FAQ
            </NavLink>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-1000">
            <a href="#contact">Kontakt</a>
          </li>

          <li className="w-full md:hidden animate-fadeInDown">
            <a className="" href="http://solarsense.pl">
              <img className="h-7" src={LightLogo} alt="logo solar sense " />
            </a>
          </li>

          <li className="flex items-end justify-start w-full rounded-sm md:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                isOpen ? "animate-fadeOutUp" : `animate-fadeInDown`
              } absolute text-3xl text-right text-mint-cream top-2 right-2`}
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <nav
              className={`${
                isOpen ? "animate-fadeInDown" : `animate-fadeOutUp`
              } absolute inset-2 text-mint-cream  rounded-sm  z-30 min-h-screen `}
            >
              <div className="relative bg-cadet-space ">
                <button
                  onClick={toggleMenu}
                  className="absolute text-3xl text-right text-mint-cream top-2 right-2"
                >
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                <ul
                  onClick={toggleMenu}
                  className="flex flex-col items-center justify-between gap-5 px-4 py-5 "
                >
                  <li className="pr-10 md:hidden">
                    <a
                      className="transition-all duration-300 hover:scale-110"
                      href="http://solarsense.pl"
                    >
                      <img
                        className="h-7"
                        src={LightLogo}
                        alt="logo solar sense"
                      />
                    </a>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <NavLink exact to="/">
                      Strona główna
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a href="/#dlaChegoMy">Dlaczego my?</a>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a href="/#etapy">Etapy współpracy</a>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a href="/#galeria">Galeria</a>
                  </li>
                  <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-1000">
                    <NavLink exact to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a href="/#contact">Wycena</a>
                  </li>

                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a
                      className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow "
                      href="tel:+48733897120"
                    >
                      +48 733 897 120
                    </a>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a
                      className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow"
                      href="mailto:buiro@solarsense.com"
                    >
                      biuro@solarsense.pl
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Underheader;
