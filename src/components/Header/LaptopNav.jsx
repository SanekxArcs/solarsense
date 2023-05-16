import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const LaptopNav = () => {

  const classLi = `px-4 py-2 transition-all duration-300 rounded-sm hover:bg-port-gore-800 `;
  const classLiActive = ({ isActive, isPending }) => isPending ? "pending" : isActive ? `bg-port-gore-900 ${classLi}` : `bg-transparent ${classLi}`;

  return (
    <>
      <nav
        className={`hidden lg:block sticky top-0 left-0 right-0 bottom-auto z-50 text-port-gore-50 bg-port-gore-950  py-3`}
      >
        <ul
          className={`flex justify-between max-w-[1170px] mx-auto items-center`}
        >
          <li>
            <NavLink exact to="/" className={classLiActive}>Fotowoltaika</NavLink>
          </li>
          <li>
            <NavLink exact to="/me" className={ classLiActive}>Magazyn energii</NavLink>
          </li>
          <li>
            <Link to="/me/#Myprad50" className={classLi}>Mój prąd 5.0</Link>
          </li>
          <li >
            <Link to="/#galeria" className={classLi}>Galeria</Link>
          </li>
          <li>
            <NavLink exact to="/service" className={ classLiActive}>Serwis</NavLink>
          </li>
          <li>
            <NavLink exact to="/faq" className={classLiActive}>FAQ</NavLink>
          </li>
          <li >
            <Link to="/#contact" className={classLi}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LaptopNav;
