import React from "react";
import { motion } from "framer-motion";

import BottomImg from "../../service/com for style/BottomImg";
import TopImg from "../../service/com for style/TopImg";

import Advantages from "./components/Advantages";
import Contact from "./../Contact/Contact";
import AdditionalServices from "./components/AdditionalServices";
import ServiceFaq from "./components/Faq/ServiseFaq";
import Prices from "./components/PriceCards/Prices";
import InAllServises from "./components/InAllServises/InAllServises";
import List from "./components/List/List";
import PageHeader from "../../components/PageHeader";

const SerwisPage = () => {
  return (
    <>
      <motion.main
        className="select-none snap-y snap-mandatory"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PageHeader
          first={"Najlepszy serwis"}
          second={"w Twojej okolicy"}
          three={
            "Oferowane przez Solar Sense usługi serwisowe mają wiele korzyści. Poznaj je bliżej!"
          }
        />
        <Advantages />
        <BottomImg />
        <Prices />
        <TopImg />
        <InAllServises />
        <BottomImg />
        <List />
        <TopImg />
        <AdditionalServices />
        <BottomImg />
        <ServiceFaq />
        <TopImg />
        <Contact />
      </motion.main>
    </>
  );
};

export default SerwisPage;
