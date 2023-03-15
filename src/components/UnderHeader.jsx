import LightLogo from "../resourses/solarsense-light-logo.png";

const Underheader = ({ toggleMenu }) => {
  return (
    <div className="sticky top-0 left-0 right-0 bottom-auto z-50 shadow-md text-mint-cream bg-cadet-space">
      <ul className=" flex justify-between px-4  md:justify-between max-w-[1170px] h-20 md:h-10  mx-auto items-center animate-text-focus-in animate-delay-500">
        <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block">
          <a href="#home">Strona główna</a>
        </li>
        <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block">
          <a href="#dlaChegoMy">Dlaczego my?</a>
        </li>
        <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block">
          <a href="#etapy">Etapy współpracy</a>
        </li>
        <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block">
          <a href="#galeria">Galeria</a>
        </li>
        {/* <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block">
            <a href="#opinia">Opinia</a>
          </li> */}
        <li className="hidden px-4 py-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:block">
          <a href="#contact">Kontakty</a>
        </li>
        <li className="pr-10 md:hidden">
          <a
            className="transition-all duration-300 hover:scale-110"
            href="http://solarsense.pl"
          >
            <img className="h-7" src={LightLogo} alt="" />
          </a>
        </li>
        <li className="p-2 transition-all duration-300 rounded-sm hover:bg-primary-mint md:hidden">
          <button onClick={toggleMenu}>
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Underheader;

