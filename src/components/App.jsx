import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import Header from "./Header/Header";
import UnderHeader from "./Header/UnderHeader";
import Footer from "./Footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import FAQ from "./pages/faq/FAQ";
import Error404 from "./pages/Errors/404";
import ThanksForContact from "./pages/Thanks/ThanksForContact";
import Finansowanie from "./pages/Finansowanie/Finansowanie";
import Serwise from "./pages/Serwise/Serwise";
import ScrollToTop from "./service/ScrollToTop";
import Bottom from "./service/com for style/Bottom"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001  });

  const toggleMOdal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const toggleMenu = () => {
    
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <ScrollToTop/>
        <motion.div className="progress-bar z-[9999]" style={{ scaleX }} />
        <Header />
        <UnderHeader toggleMenu={toggleMenu} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/finansowanie" element={<Finansowanie/>} />
          <Route path="/service" element={<Serwise/>} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/thanks" element={<ThanksForContact />} />
        </Routes>
        <Bottom/>
        <Footer toggleMOdal={toggleMOdal} isOpenModal={isOpenModal} />
      </Router>
    </>
  );
}

export default App;
