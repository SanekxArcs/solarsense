import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const LaptopNav = () => {

  const classLi = `px-4 py-2 transition-all duration-300 rounded-sm hover:bg-port-gore-800 `;

  return (
    <>
      <nav
        className={`hidden lg:block sticky top-0 left-0 right-0 bottom-auto z-50 text-ocean-green-50 bg-port-gore-950  py-1`}
      >
        <ul
          className={`flex justify-between max-w-[1170px] mx-auto items-center`}
        >
          <li className={classLi}>
            <NavLink exact to="/#" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `bg-port-gore-900 ${classLi}` : `bg-transparent ${classLi}`}>Fotowoltaika</NavLink>
          </li>
          <li className={classLi}>
            <NavLink exact to="/me" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `bg-port-gore-900 ${classLi}` : `bg-transparent ${classLi}`}>Magazyn energii</NavLink>
          </li>
          <li className={classLi}>
            <Link to="/me/#Myprad50">Mój prąd 5.0</Link>
          </li>
          <li className={classLi}>
            <Link to="/#galeria">Galeria</Link>
          </li>
          <li className={classLi}>
            <NavLink exact to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `bg-port-gore-900 ${classLi}` : `bg-transparent ${classLi}`}>
              Serwis
            </NavLink>
          </li>
          <li className={classLi}>
            <NavLink
              exact
              to="/faq"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `bg-port-gore-900 ${classLi}` : `bg-transparent ${classLi}`}
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
