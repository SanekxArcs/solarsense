import { useState } from "react";

import Header from "./Header";
import Hero from "./Hero";
import DlaCzego from "./DlaCzegoMy/DlaCzego";
import Etapy from "./Etapy";
import Footer from "./Footer";
import Galeria from "./Galeria";
// import Opinia from "./Opinia";
import Contact from "./Contact";
import Underheader from "./UnderHeader";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />
      <Underheader toggleMenu={toggleMenu} isOpen={isOpen} />
      <Hero />
      <DlaCzego />
      <Etapy />
      <Galeria />
      {/* <Opinia /> */}
      <div className="w-screen h-20 bg-cadet-space"></div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

