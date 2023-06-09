import React from "react";
import { motion } from "framer-motion";

import Hero from "./Hero";
import DlaCzego from "./DlaCzegoMy/DlaCzego";
import Contact from "./../Contact/Contact";
import Etapy from "./Etapy";
import Pricing from "./Prices/Pricing";
import Partners from "./Partners";
import Opinia from "./Opinia";
import TopImg from "./../../service/com for style/TopImg";
import BottomImg from "./../../service/com for style/BottomImg";

function HomePage({ setTextToMessage, textToMessage }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Partners />
      <DlaCzego />
      <BottomImg />
      <Etapy />
      <TopImg />
      <Pricing setTextToMessage={setTextToMessage} />
      <BottomImg />
      <Opinia />
      <TopImg />
      <Contact
        textToMessage={textToMessage}
        setTextToMessage={setTextToMessage}
      />
    </motion.div>
  );
}

export default HomePage;
