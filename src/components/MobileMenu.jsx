import LightLogo from "../resourses/solarsense-light-logo.png";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <nav
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-2 left-2 right-2 bottom-2 bg-cadet-space bg-opacity-90 text-mint-cream md:hidden backdrop-blur-xl rounded-md z-50 `}
      >
        <div className=" relative">
          <button
            onClick={toggleMenu}
            className=" text-mint-cream text-3xl text-right absolute top-4 right-2"
          >
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
          <ul className="py-5 flex flex-col justify-between gap-5 px-4 max-w-[1170px] h-20 md:h-10  mx-auto items-center ">
            <li className="">
              <a
                className="transition-all duration-300 hover:scale-110"
                href="http://solarsense.pl"
              >
                <img className="h-7" src={LightLogo} alt="" />
              </a>
            </li>
            <li className="   px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint  ">
              <a href="#home">Strona główna</a>
            </li>
            <li className="   px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint  ">
              <a href="#dlaChegoMy">Dlaczego my?</a>
            </li>
            <li className="   px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint  ">
              <a href="#etapy">Etapy współpracy</a>
            </li>
            <li className="   px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint  ">
              <a href="#galeria">Galeria</a>
            </li>
            <li className="   px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint  ">
              <a href="#contact">Wycena</a>
            </li>
            <li className="   px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint  ">
              <a
                className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow "
                href="tel:+48733897120"
              >
                +48 733 897 120
              </a>
            </li>
            <li className="   px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint  ">
              <a
                className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow"
                href="mailto:buiro@solarsense.com"
              >
                biuro@solarsense.pl
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
