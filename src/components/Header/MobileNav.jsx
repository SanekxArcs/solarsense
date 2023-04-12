import React from "react";
import { NavLink } from "react-router-dom";
import LightLogo from "../../assets/solarsense-light-logo.svg";
import { HashLink as Link } from "react-router-hash-link";

const MobileNav = ({ toggleMenu, isOpen }) => {
  const classLi = `px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint`;

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 bottom-auto z-50 text-mint-cream bg-primary-dark/80 backdrop-blur-sm l pt-1 lg:hidden`}
      >
        <ul className="flex items-center justify-between w-full px-2  h-14">
          <li className="">
            <a className="" href="http://solarsense.pl">
              <img className="h-7" src={LightLogo} alt="logo solar sense" />
            </a>
          </li>

          <li className="">
            <button
              onClick={toggleMenu}
              className={`${
                isOpen ? `opacity-0` : `opacity-100`
              } text-right text-mint-cream px-2 py-1 rounded-sm bg-primary-dark-accent1`}
            >
              <i class=" text-2xl fa-solid fa-bars"></i>
            </button>
          </li>

          <nav
            className={`${
              isOpen ? `` : `hidden `
            } absolute inset-2 text-mint-cream   min-h-screen `}
          >
            <div className="relative z-50 bg-primary-dark rounded-sm">
              <button
                onClick={toggleMenu}
                className="absolute text-3xl text-right text-mint-cream top-2 right-2 "
              >
                <i className="fa-regular fa-circle-xmark text-2xl"></i>
              </button>
              <ul
                onClick={toggleMenu}
                className="flex flex-col items-center justify-between gap-2 px-4 py-5 "
              >
                <li className="">
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

                <li className={classLi}>
            <Link to="/#">Strona główna</Link>
          </li>
          <li className={classLi}>
            <Link to="/#dlaChegoMy">Dlaczego my?</Link>
          </li>
          <li className={classLi}>
            <Link to="/#etapy">Etapy współpracy</Link>
          </li>
          <li className={classLi}>
            <Link to="/#galeria">Galeria</Link>
          </li>
          <li className={classLi}>
            <NavLink exact to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `bg-primary-mint ${classLi}` : `bg-transparent ${classLi}`}>
              Serwisy
            </NavLink>
          </li>
          <li className={classLi}>
            <NavLink
              exact
              to="/faq"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `bg-primary-mint ${classLi}` : `bg-transparent ${classLi}`}
            >
              FAQ
            </NavLink>
          </li>
          <li className={classLi}>
            <Link to="/#contact">Kontakt</Link>
          </li>
                <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                  <a
                    className=" text-mint-cream"
                    href="tel:+48733897120"
                  >
                    +48 733 897 120
                  </a>
                </li>
                <li className="px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint">
                  <a
                    className=" text-mint-cream"
                    href="mailto:buiro@solarsense.com"
                  >
                    biuro@solarsense.pl
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
