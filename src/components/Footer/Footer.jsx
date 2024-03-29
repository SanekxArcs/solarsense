import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Privacy from "./Privacy";

const FooterLogo = () => {
  return (
    <div className="">
      <p className="pb-5 text-3xl font-black uppercase select-none md:block">
        <span className="text-ocean-green-50">Solar </span>
        <span className="text-ocean-green-400">Sense</span>
      </p>
      <p className="select-none ">
        Z nami zyskasz nie tylko&nbsp;
        <b className="text-ocean-green-300">oszczędności</b> , ale także&nbsp;
        <b className="text-ocean-green-300">pewność</b> ,&nbsp;
        <b className="text-ocean-green-300">jakość</b> i&nbsp;
        <b className="text-ocean-green-300">niezawodność</b>
      </p>
    </div>
  );
};

const FooterNavigation = ({ toggleModal, isOpenModal }) => {
  const setActive = ({ isActive }) => (isActive ? "text-ocean-green-400" : "");

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <p className="flex justify-center font-semibold uppercase md:justify-start text-ocean-green-200">
          Mapa strony
        </p>
      </li>
      <li className="hover:text-ocean-green-300">
        <NavLink exact to="/#" className={setActive}>
          Fotowoltaika
        </NavLink>
      </li>
      <li className="hover:text-ocean-green-300">
        <NavLink exact to="/me" className={setActive}>
          Magazyn energii
        </NavLink>
      </li>
      <li className="hover:text-ocean-green-300">
        <NavLink exact to="/service" className={setActive}>
          Serwis
        </NavLink>
      </li>
      <li className="hover:text-ocean-green-300">
        <NavLink exact to="/faq" className={setActive}>
          FAQ
        </NavLink>
      </li>
      <li className="hover:text-ocean-green-300">
        <NavLink exact to="/gallery" className={setActive}>
          Realizacje
        </NavLink>
      </li>
      <li className="hover:text-ocean-green-300">
        <button
          className="transition-colors duration-300"
          onClick={toggleModal}
        >
          Polityka Prywatności
        </button>
        <Privacy toggleModal={toggleModal} isOpenModal={isOpenModal} />
      </li>
    </ul>
  );
};

const FooterContact = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <p className="flex justify-center font-semibold uppercase md:justify-start text-ocean-green-200">
          Kontakt
        </p>
      </li>
      <li className="flex items-center justify-center select-none md:justify-start">
        <a
          className="hover:text-ocean-green-300"
          href="https://goo.gl/maps/ieRqAmFSHC8XmtXA8"
        >
          Ul. Szczęsna 26
          <br />
          02-454 Warszawa
        </a>
      </li>
      <li className="flex items-center justify-center select-none md:justify-start">
        NIP: 7382063255
      </li>
      <li className="flex items-center justify-center md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 mr-3"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        <a
          className="hover:text-ocean-green-300"
          href="mailto:biuro@solarsense.pl"
        >
          biuro@solarsense.pl
        </a>
      </li>
    </ul>
  );
};

const Footer = ({ toggleModal, isOpenModal }) => {
  return (
    <motion.footer className="text-center bg-port-gore-950 text-ocean-green-50 lg:text-left">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="px-6 py-10 mx-auto text-center md:text-left max-w-7xl"
        >
          <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-3">
            <FooterLogo />
            <FooterNavigation
              toggleModal={toggleModal}
              isOpenModal={isOpenModal}
            />
            <FooterContact />
          </div>
        </motion.div>

        <div className="p-6 text-center bg-port-gore-950">
          <span className="select-none">
            © 2023 Wszelkie prawa zastrzeżone:&nbsp;
          </span>
          <a
            className="font-semibold transition text-port-gore-400 hover:text-port-gore-200"
            href="https://github.com/SanekxArcs"
          >
            Solar Sense
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
