import React from "react";

import Hero from "./Hero";
import DlaCzego from "./DlaCzegoMy/DlaCzego";
import Contact from "./Contact";
import Etapy from "./Etapy";
import Galeria from "./Galeria";
import Pricing from "./Prices/Pricing";
import Partners from "./Partners";

function HomePage({setTextToMessage, textToMessage}) {
  return (
    <div>
      <Hero />
      <Partners/>
      <DlaCzego />
      <Etapy />
      <Galeria />
      <Pricing setTextToMessage={setTextToMessage}/>
      <Contact setTextToMessage={setTextToMessage} textToMessage={textToMessage}/>
    </div>
  );
}

export default HomePage;
