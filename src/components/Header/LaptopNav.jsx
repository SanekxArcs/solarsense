import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import LiDropDown from "./LiDropDown";

const LaptopNav = () => {
  const classLi = `px-4 py-1 transition-all duration-300 rounded-sm group-hover:bg-port-gore-800 group-hover:w-full hover:bg-port-gore-800 flex gap-1 justify-center items-center`;
  const classLiActive = ({ isActive, isPending }) =>
    isPending
      ? "pending"
      : isActive
      ? `bg-port-gore-900 ${classLi}`
      : `bg-transparent ${classLi}`;

  const liVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  

  return (
    <>
      <nav
        className={`hidden lg:block sticky top-0 left-0 right-0 bottom-auto z-50 text-port-gore-50 bg-port-gore-950 py-2`}
      >
        <ul
          className={`flex justify-between max-w-[1170px] mx-auto items-center`}
        >
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={liVariants}
            className="relative group"
          >
            <NavLink exact to="/" className={classLiActive}>
              Fotowoltaika
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transition-all group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </NavLink>
            <div className="absolute left-0 z-50 flex flex-col items-stretch justify-center w-full overflow-hidden transition-all duration-500 max-h-0 top-8 text-port-gore-50 bg-port-gore-900/70 backdrop-blur-md group-hover:max-h-96 rounded-b-md group-hover:pb-2">
              <ul>
                <LiDropDown link={"/#home"} children={"Glowna"} />
                <LiDropDown link={"/#dlaChegoMy"} children={"Dlaczego my?"} />
                <LiDropDown link={"/#etapy"} children={"Etapy"} />
                <LiDropDown link={"/#zestawy"} children={"Zetawy"} />
                <LiDropDown link={"/#opinia"} children={"Opinia"} />
                <LiDropDown link={"/#contact"} children={"Kontakt"} />
              </ul>
            </div>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={liVariants}
            className="relative group"
          >
            <NavLink exact to="/me" className={classLiActive}>
              Magazyn energii
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transition-all group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </NavLink>
            <div className="absolute left-0 z-50 flex flex-col items-stretch justify-center w-full overflow-hidden transition-all duration-500 max-h-0 top-8 text-port-gore-50 bg-port-gore-900/70 backdrop-blur-md group-hover:max-h-96 group-hover:pb-2 rounded-b-md">
              <ul>
                <LiDropDown link={"/me#kalkulator"} children={"Kalkulator"} />
                <LiDropDown link={"/me#jakdziala"} children={"Jak Dziala"} />
                <LiDropDown link={"/me#backup"} children={"Nasze Backupy"} />
                <LiDropDown link={"/me#Myprad50"} children={"Moj prad 5.0"} />
                <LiDropDown link={"/me#zalety"} children={"Glowne zalety"} />
                <LiDropDown link={"/me#tech"} children={"Technologia"} />
              </ul>
            </div>
          </motion.li>

          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={liVariants}
            className="relative group"
          >
            <NavLink exact to="/service" className={classLiActive}>
              Serwis{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transition-all group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </NavLink>
            <div className="absolute z-50 flex flex-col items-stretch justify-center overflow-hidden transition-all duration-500 -left-1/2 w-52 max-h-0 top-8 text-port-gore-50 bg-port-gore-900/70 backdrop-blur-md group-hover:max-h-96 rounded-b-md group-hover:pb-2">
              <ul>
                <LiDropDown
                  link={"/service#Przegland"}
                  children={"Przegland"}
                />
                <LiDropDown
                  link={"/service#pakietach"}
                  children={"W pakietach"}
                />
                <LiDropDown
                  link={"/service#regularnie"}
                  children={"Regularnie serwisy"}
                />
                <LiDropDown
                  link={"/service#porownanie"}
                  children={"Porównanie Pakietów"}
                />
                <LiDropDown
                  link={"/service#uzimienie"}
                  children={"Uzimienie fotowoltaiki"}
                />
                <LiDropDown
                  link={"/service#dodatkowe"}
                  children={"Dodatkowe Usługi"}
                />
                <LiDropDown link={"/service#faq"} children={"FAQ"} />
              </ul>
            </div>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={liVariants}
            className="relative group"
          >
            <NavLink exact to="/faq" className={classLiActive}>
              FAQ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transition-all group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </NavLink>
            <div className="absolute z-50 flex flex-col items-stretch justify-center overflow-hidden transition-all duration-500 -left-3 max-h-0 top-8 text-port-gore-50 bg-port-gore-900/70 backdrop-blur-md group-hover:max-h-96 rounded-b-md group-hover:pb-2">
              <ul>
                <LiDropDown link={"/faq#karty"} children={"Karty katalogowe"} />
                <LiDropDown link={"/faq#foxess"} children={"FoxEss"} />
              </ul>
            </div>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={liVariants}
            className="relative group"
          >
            <NavLink exact to="/gallery" className={classLiActive}>
              Galeria
            </NavLink>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={liVariants}
            className="relative group"
          >
            <Link to="/#contact" className={classLi}>
              Kontakt
            </Link>
          </motion.li>
        </ul>
      </nav>
    </>
  );
};

export default LaptopNav;
