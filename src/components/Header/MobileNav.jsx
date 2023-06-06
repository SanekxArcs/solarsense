import React from "react";
import { NavLink } from "react-router-dom";
import LightLogo from "../../assets/solarsense-light-logo.svg";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ toggleMenu, isOpen }) => {
  const classLi = `px-4 py-2 transition-all duration-300 rounded-sm hover:bg-ocean-green-400`;
  const classLiActive = ({ isActive, isPending }) =>
    isPending
      ? "pending"
      : isActive
      ? `bg-ocean-green-400 ${classLi}`
      : `bg-transparent ${classLi}`;
  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 bottom-auto z-50 text-ocean-green-50 bg-port-gore-950 pt-1 lg:hidden`}
      >
        <ul className="flex items-center justify-between w-full px-2  h-14">
          <li>
            <a href="http://solarsense.pl">
              <img
                loading="lazy"
                className="h-7"
                src={LightLogo}
                alt="logo solar sense"
              />
            </a>
          </li>

          <li>
            <button
              title="hamburger menu"
              onClick={toggleMenu}
              className={`${
                isOpen ? `opacity-0` : `opacity-100`
              } text-right text-ocean-green-50 px-2 py-1 rounded-sm bg-port-gore-950`}
            >
              <i className=" text-2xl fa-solid fa-bars"></i>
            </button>
          </li>
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, scale: 0.5, y: -1000 }}
                animate={{ opacity: 1, scale: 1, y: -0 }}
                exit={{ opacity: 0, scale: 0.5, y: -1000 }}
                transition={{ duration: 0.5 }}
                className={` absolute inset-2 text-ocean-green-50   min-h-screen `}
              >
                <div className="relative z-50 bg-port-gore-950  rounded-sm">
                  <button
                    title="hamburger menu close"
                    onClick={toggleMenu}
                    className="absolute text-3xl text-right text-ocean-green-50 top-2 right-2 "
                  >
                    <i className="fa-regular fa-circle-xmark text-2xl"></i>
                  </button>
                  <ul
                    onClick={toggleMenu}
                    className="flex flex-col items-center justify-between gap-5 px-4 py-5 "
                  >
                    <li>
                      <a
                        className="transition-all duration-300 hover:scale-110"
                        href="http://solarsense.pl"
                      >
                        <img
                          loading="lazy"
                          className="h-7  w-auto"
                          src={LightLogo}
                          alt="logo solar sense"
                        />
                      </a>
                    </li>

                    <li>
                      <NavLink exact to="/#" className={classLiActive}>
                        Fotowoltaika
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/me" className={classLiActive}>
                        Magazyn energii
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/gallery" className={classLiActive}>
                        Galeria
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/service" className={classLiActive}>
                        Serwis
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/faq" className={classLiActive}>
                        FAQ
                      </NavLink>
                    </li>
                    <li className={classLi}>
                      <Link to="/#contact">Kontakt</Link>
                    </li>
                    <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-ocean-green-400">
                      <a
                        className=" text-ocean-green-50 "
                        href="tel:+48733897120"
                      >
                        +48 733 897 120
                      </a>
                    </li>
                    <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-ocean-green-400">
                      <a
                        className=" text-ocean-green-50 "
                        href="mailto:buiro@solarsense.com"
                      >
                        biuro@solarsense.pl
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
