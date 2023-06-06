import React from "react";
import TopImg from "../../service/com for style/TopImg";
import { motion } from "framer-motion";

import Contact from "./../homePage/Contact";
import HeroME from "./MEComponents/HeroME";
import JakDzialaME from "./MEComponents/JakDzialaME";
import Bottom from "./../../service/com for style/BottomImg";
import HaszeME from "./MEComponents/HaszeME";
import MojPrad from "./MEComponents/MojPrad";
import GlowneZalety from "./MEComponents/GlowneZalety";
import Lipol from "./MEComponents/Lipol";
import Hybrydowy from "./MEComponents/Hybrydowy";
import CalkulatorME from "./MEComponents/CalculatorME/CalkulatorME";

const MagazynEnergii = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <main className="select-none snap-y snap-mandatory">
          <section className="py-24 text-center text-ocean-green-50 bg-port-gore-950 snap-always snap-center">
            <div className="flex justify-center">
              <div className="max-w-[1000px]">
                <h2 className="mb-5 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Magazyn energii
                  <br />
                  <span className=" text-ocean-green-400">dla domu</span>
                </h2>
              </div>
            </div>
          </section>

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
          <TopImg/>
          <Contact />
        </main>
      </motion.div>
    </>
  );
};

export default MagazynEnergii;
