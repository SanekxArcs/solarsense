import React from "react";
import TopImg from "../../service/com for style/TopImg";
import { motion } from "framer-motion";

import Contact from "./../Contact/Contact";
import HeroME from "./MEComponents/HeroME";
import JakDzialaME from "./MEComponents/JakDzialaME";
import Bottom from "./../../service/com for style/BottomImg";
import HaszeME from "./MEComponents/HaszeME";
import MojPrad from "./MEComponents/MojPrad";
import GlowneZalety from "./MEComponents/GlowneZalety";
import Lipol from "./MEComponents/Lipol";
import Hybrydowy from "./MEComponents/Hybrydowy";
import CalkulatorME from "./MEComponents/CalculatorME/CalkulatorME";
import PageHeader from "../../components/PageHeader";

const MagazynEnergii = ({ setTextToMessage, textToMessage }) => {
  return (
    <motion.main
      className="select-none snap-y snap-mandatory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader first={"Magazyn energii"} second={"dla domu"} />

      <TopImg />
      <HeroME />
      <CalkulatorME />
      <Bottom />
      <JakDzialaME />
      <TopImg />
      <HaszeME />
      <Bottom />
      <MojPrad />
      <TopImg />
      <GlowneZalety />
      <Bottom />
      <Lipol />
      <Hybrydowy />
      <TopImg />
      <Contact
        textToMessage={textToMessage}
        setTextToMessage={setTextToMessage}
      />
    </motion.main>
  );
};

export default MagazynEnergii;
