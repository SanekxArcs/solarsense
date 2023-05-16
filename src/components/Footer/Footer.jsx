import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Privacy from "./Privacy";

const Footer = ({ toggleMOdal, isOpenModal }) => {
  const setActive = ({ isActive }) => (isActive ? "text-ocean-green-400" : "");
  return (
    <footer className="text-center bg-port-gore-950 text-ocean-green-50 lg:text-left">
      <div>
        <div className="py-10 text-center md:text-left max-w-[1170px] mx-auto px-6">
          <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <p className="pb-5 text-3xl font-black uppercase select-none md:block">
                <span className=" text-ocean-green-50">Solar </span>
                <span className=" text-ocean-green-400">Sense</span>
              </p>
              <p className="select-none ">
                Z nami zyskasz nie tylko <b className=" text-ocean-green-300">oszczędności</b> , ale także <b className=" text-ocean-green-300">pewność</b> , <b className=" text-ocean-green-300">jakość</b> i <b className=" text-ocean-green-300">niezawodność</b> 
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <h6 className="flex justify-center font-semibold uppercase md:justify-start text-ocean-green-200">
                Mapa strony
              </h6>
              </li>
              <li  className="hover:text-ocean-green-300"><NavLink exact to="/#" className={setActive}>
                  Fotowoltaika
                </NavLink></li>
              <li  className="hover:text-ocean-green-300"><NavLink exact to="/me" className={setActive}>
                  Magazyn energii
                </NavLink></li>
              <li  className="hover:text-ocean-green-300"><NavLink exact to="/me/#Myprad50" className={setActive}>
                  Mój prąd 5.0
                </NavLink></li>
              <li  className="hover:text-ocean-green-300"><Link to="/#galeria">Galeria</Link></li>
              <li  className="hover:text-ocean-green-300"><NavLink exact to="/service" className={setActive}>
                  Serwis
                </NavLink></li>
              <li  className="hover:text-ocean-green-300"><NavLink exact to="/faq" className={setActive}>
                  FAQ
                </NavLink></li>
              <li  className="hover:text-ocean-green-300"><button
                  className="transition-colors duration-300"
                  onClick={toggleMOdal}
                >
                  Polityka Prywatności
                </button>
                <Privacy toggleMOdal={toggleMOdal} isOpenModal={isOpenModal} /></li>
            </ul>

              <ul className="flex flex-col gap-4">
                <li>
                  <h6 className="flex justify-center font-semibold uppercase md:justify-start text-ocean-green-200">
                    Kontakt
                  </h6>
                </li>
                <li className="flex items-center justify-center select-none md:justify-start">
                  <a  className="hover:text-ocean-green-300" href="https://goo.gl/maps/ieRqAmFSHC8XmtXA8">Ul. Szczęsna 26
                  <br />
                  02-454 Warszawa </a>
                </li>
                <li  className="flex items-center justify-center select-none md:justify-start">
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
                  <a className="hover:text-ocean-green-300" href="mailto:biuro@solarsense.pl">biuro@solarsense.pl</a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a className="hover:text-ocean-green-300" href="tel:+48733897120">
                    +48 733 897 120
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a className="hover:text-ocean-green-300" href="tel:+49735145620">
                    +48 735 145 620
                  </a>
                </li>
              </ul>
          </div>
        </div>

        <div className="p-6 text-center bg-port-gore-950">
          <span className="select-none ">
            © 2023 Wszelkie prawa zastrzeżone:
          </span>
          <a
            className="font-semibold text-port-gore-400 hover:text-port-gore-200 transition"
            href="https://github.com/SanekxArcs"
          >
            Solar Sense
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
