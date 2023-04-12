import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const LaptopNav = () => {

  const setActive = ({ isActive }) => 
    isActive ? "bg-primary-mint" : "bg-transparent";

  const classLi =`px-4 py-2transition-all duration-300 rounded-sm hover:bg-primary-mint`;
    

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 bottom-auto z-50 text-mint-cream bg-primary-dark pt-1`}
      >
        <ul className={`flex px-2 py-2 justify-between max-w-[1170px] mx-auto items-center`}>
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
          <li>
            <NavLink exact to="/service" className={`${setActive} ${classLi}`}>Serwisy</NavLink>
          </li>
          <li>
            <NavLink exact to="/faq" className={`${setActive} ${classLi}`} >FAQ</NavLink>
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
