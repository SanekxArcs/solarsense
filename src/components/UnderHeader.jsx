import { NavLink } from "react-router-dom";
import LightLogo from "../resourses/solarsense-light-logo.svg";
import { HashLink as Link } from "react-router-hash-link";

const Underheader = ({ toggleMenu, isOpen }) => {
  const setActive = ({ isActive }) =>
    isActive ? "bg-primary-mint px-4 py-2 rounded-sm" : "";
  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 bottom-auto z-50 shadow-md text-mint-cream bg-cadet-space`}
      >
        <ul className=" flex justify-between px-4  md:justify-between max-w-[1170px] h-14 md:h-10  mx-auto items-center">
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-150">
            <Link to="/#">Strona główna</Link>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-300">
            <Link to="/#dlaChegoMy">Dlaczego my?</Link>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-500">
            <Link to="/#etapy">Etapy współpracy</Link>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-700">
            <Link to="/#galeria">Galeria</Link>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-1000">
            <NavLink exact to="/faq" className={setActive}>
              FAQ
            </NavLink>
          </li>
          <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-1000">
            <Link to="/#contact">Kontakt</Link>
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
              <div className="relative bg-cadet-space z-50 ">
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
                    <Link to="/#">Strona główna</Link>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <Link to="/#dlaChegoMy">Dlaczego my?</Link>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <Link to="/#etapy">Etapy współpracy</Link>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <Link to="/#galeria">Galeria</Link>
                  </li>
                  <li className=" px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block md:animate-text-focus-in animate-delay-1000">
                    <NavLink exact to="/faq" className={setActive}>
                      FAQ
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <Link to="/#contact">Wycena</Link>
                  </li>

                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a
                      className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow  text-mint-cream"
                      href="tel:+48733897120"
                    >
                      +48 733 897 120
                    </a>
                  </li>
                  <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                    <a
                      className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow text-mint-cream"
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
