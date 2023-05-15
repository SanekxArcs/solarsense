import React from "react";

import Hero from "./Hero";
import DlaCzego from "./DlaCzegoMy/DlaCzego";
import Contact from "./Contact";
import Etapy from "./Etapy";
import Galeria from "./Galeria";
import Pricing from "./Prices/Pricing";
import Partners from "./Partners";
import Opinia from "./Opinia";
import TopImg from "../../service/com for style/TopImg";
import BottomImg from "../../service/com for style/BottomImg";

function HomePage({setTextToMessage, textToMessage}) {
  return (
    <div>
      <Hero />
      <Partners/>
      <DlaCzego />
      <BottomImg/>
      <Etapy />
      <TopImg/>
      <Galeria />
      <BottomImg/>
      <Pricing setTextToMessage={setTextToMessage}/>
      <Opinia/>
      <TopImg/>
      <Contact setTextToMessage={setTextToMessage} textToMessage={textToMessage}/>
    </div>
  );
}

export default HomePage;
