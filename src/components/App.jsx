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
import MobileMenu from "./MobileMenu";

function App() {
  // Declare a new state variable, which controls the visibility of the side menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the side menu
  // This function is triggered when the open button or the close button is clicked
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
      <div className=" bg-cadet-space h-20 w-screen"></div>
      <Contact />
      <Footer />
      <MobileMenu toggleMenu={toggleMenu} />
    </>
  );
}

export default App;
