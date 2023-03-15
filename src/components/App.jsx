import Header from "./Header";
import Hero from "./Hero";
import DlaCzego from "./DlaCzegoMy/DlaCzego";
import Etapy from "./Etapy";
import Footer from "./Footer";
import Galeria from "./Galeria";
// import Opinia from "./Opinia";
import Contact from "./Contact";
import LightLogo from "../resourses/solarsense-light-logo.png";

function App() {
  return (
    <>
      <Header />
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
            <i class="fa-solid fa-bars text-xl"></i>
          </li>
        </ul>
      </div>

      <Hero />
      <DlaCzego />
      <Etapy />
      <Galeria />
      {/* <Opinia /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
