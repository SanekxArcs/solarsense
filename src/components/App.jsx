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
      <div className=" sticky top-0 left-0 right-0 bottom-auto z-50 text-mint-cream bg-cadet-space">
        <ul className=" flex justify-between w-[1170px] mx-auto  items-center animate-text-focus-in animate-delay-500">
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm">
            <a href="#dlaChegoMy">Dla czego my?</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm">
            <a href="#etapy">Etapy</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm">
            <a href="#galeria">Galeria</a>
          </li>
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm">
            <a href="#opinia">Opinia</a>
          </li>
          {/* <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm">
            <a href="#servisy">Servisy</a>
          </li> */}
          <li className="hover:bg-primary-mint py-2 px-4 transition-all duration-300 rounded-sm">
            <a href="#contact">Contacts</a>
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
