import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import Header from "./Header/Header";
import UnderHeader from "./Header/UnderHeader";
import Footer from "./Footer/Footer";
import ScrollToTop from "./service/ScrollToTop";
import Bottom from "./service/com for style/BottomImg";
import LayoutAnimete from "./LayoutAnimete";


function App() {
 
  const [textToMessage, setTextToMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleMOdal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <motion.div className="progress-bar z-[9999]" style={{ scaleX }} />
        <Header />
        <UnderHeader toggleMenu={toggleMenu} isOpen={isOpen} />
        <LayoutAnimete textToMessage={textToMessage} setTextToMessage={setTextToMessage}/>
        <Bottom />
        <Footer toggleMOdal={toggleMOdal} isOpenModal={isOpenModal} />
      </Router>
    </>
  );
}

export default App;
