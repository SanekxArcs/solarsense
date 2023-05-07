import React from "react";
import TopImg from "../../service/com for style/TopImg";

import Contact from "../homePage/Contact";
import HeroME from "./MEComponents/HeroME";
import JakDzialaME from "./MEComponents/JakDzialaME";
import Bottom from "../../service/com for style/Bottom";
import HaszeME from "./MEComponents/HaszeME";
import MojPrad from "./MEComponents/MojPrad";
import GlowneZalety from "./MEComponents/GlowneZalety";
import Lipol from "./MEComponents/Lipol";
import Hybrydowy from "./MEComponents/Hybrydowy";

const MagazynEnergii = () => {
  return (
    <>
      <main>
        <section className="py-24 text-center text-primary-mint-accent2 bg-primary-dark">
          <div className="flex justify-center">
            <div className="max-w-[1000px]">
              <h2 className="mb-5 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Magazyn energii
                <br />
                <span className=" text-primary-mint">dla domu</span>
              </h2>
            </div>
          </div>
        </section>
        
        <TopImg />
        <HeroME />
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
        <Contact />
        
      </main>
    </>
  );
};

export default MagazynEnergii;
