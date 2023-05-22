import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const LaptopNav = () => {
  const classLi = `px-4 py-2 transition-all duration-300 rounded-sm hover:bg-port-gore-800 `;
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
        className={`hidden lg:block sticky top-0 left-0 right-0 bottom-auto z-50 text-port-gore-50 bg-port-gore-950  py-3`}
      >
        <ul
          className={`flex justify-between max-w-[1170px] mx-auto items-center`}
        >
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={liVariants}
          >
            <NavLink exact to="/" className={classLiActive}>
              Fotowoltaika
            </NavLink>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={liVariants}
          >
            <NavLink exact to="/me" className={classLiActive}>
              Magazyn energii
            </NavLink>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={liVariants}
          >
            <Link to="/me/#Myprad50" className={classLi}>
              Mój prąd 5.0
            </Link>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={liVariants}
          >
            <Link to="/#galeria" className={classLi}>
              Galeria
            </Link>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={liVariants}
          >
            <NavLink exact to="/service" className={classLiActive}>
              Serwis
            </NavLink>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={liVariants}
          >
            <NavLink exact to="/faq" className={classLiActive}>
              FAQ
            </NavLink>
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={liVariants}
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
