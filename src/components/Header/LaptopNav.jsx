import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const LaptopNav = () => {

  const classLi = `px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint`;

  return (
    <>
      <nav
        className={`hidden lg:block sticky top-0 left-0 right-0 bottom-auto z-50 text-mint-cream bg-primary-dark py-1`}
      >
        <ul
          className={`flex justify-between max-w-[1170px] mx-auto items-center`}
        >
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
        </ul>
      </nav>
    </>
  );
};

export default LaptopNav;
