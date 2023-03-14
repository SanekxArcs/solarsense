import Header from "./Header";
import Hero from "./Hero";
import DlaCzego from "./DlaCzegoMy/DlaCzego";
import Etapy from "./Etapy";
import Footer from "./Footer";
import Galeria from "./Galeria";
import Opinia from "./Opinia";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <div className=" sticky top-0 left-0 right-0 bottom-auto z-50 text-mint-cream bg-cadet-space shadow-md">
        <ul className=" flex justify-end lg:justify-center xl:w-[1170px] mx-auto  items-end lg:items-center animate-text-focus-in animate-delay-500">
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm hidden lg:block">
            <a href="#home">Home</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm hidden lg:block">
            <a href="#dlaChegoMy">Dla czego my?</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm hidden lg:block">
            <a href="#etapy">Etapy</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm hidden lg:block">
            <a href="#galeria">Galeria</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm hidden lg:block">
            <a href="#opinia">Opinia</a>
          </li>
          {/* <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm lg:block">
            <a href="#servisy">Servisy</a>
          </li> */}
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm hidden lg:block">
            <a href="#contact">Contacts</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-smlg:hidden">
            <i class="fa-solid fa-bars"></i>
          </li>
        </ul>
      </div>

      <Hero />
      <DlaCzego />
      <Etapy />
      <Galeria />
      <Opinia />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
