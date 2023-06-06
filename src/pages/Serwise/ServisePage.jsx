import React from 'react'
import { motion } from "framer-motion";

import BottomImg from "../../service/com for style/BottomImg";
import TopImg from "../../service/com for style/TopImg";

import Advantages from "./components/Advantages";
import Serwise from './components/ServiseHeader';
import Contact from './../homePage/Contact';
import AdditionalServices from './components/AdditionalServices';
import ServiseFaq from './components/Faq/ServiseFaq';
import Prices from './components/PriceCards/Prices';
import InAllServises from './components/InAllServises/InAllServises';
import List from './components/List/List';

const SerwisPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Serwise />
        <TopImg />
        <Advantages />
        <BottomImg />
        <Prices/>
        <TopImg />
        <InAllServises/>
        <BottomImg />
        <List/>
        <TopImg />
        <AdditionalServices />
        <BottomImg />
        <ServiseFaq/>
        <TopImg />
        <Contact />
        <BottomImg />
      </motion.div>
    </>
  );
}

export default SerwisPage