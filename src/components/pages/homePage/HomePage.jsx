import React from "react";

import Hero from "./Hero";
import DlaCzego from "./DlaCzegoMy/DlaCzego";
import Contact from "./Contact";
import Etapy from "./Etapy";
import Galeria from "./Galeria";
import Pricing from "./Prices/Pricing";
import Partners from "./Partners";

function HomePage() {
  return (
    <div>
      <Hero />
      <Partners/>
      <DlaCzego />
      <Etapy />
      <Galeria />
      <Pricing/>
      {/* <div className="w-screen h-20 bg-cadet-space"></div> */}
      <Contact />
    </div>
  );
}

export default HomePage;
