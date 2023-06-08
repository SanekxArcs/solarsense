import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import Header from "./components/Header/Header";
import UnderHeader from "./components/Header/UnderHeader";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./service/ScrollToTop";
import Bottom from "./service/com for style/BottomImg";
import LayoutAnimete from "./LayoutAnimete";
import useLocalStorageState from "./service/useLocalStorageState";

function App() {
  const [textToMessage, setTextToMessage] = useLocalStorageState(
    "textToMessage",
    ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleModal = () => {
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
        <LayoutAnimete
          textToMessage={textToMessage}
          setTextToMessage={setTextToMessage}
        />
        <Bottom />
        <Footer toggleModal={toggleModal} isOpenModal={isOpenModal} />
      </Router>
    </>
  );
}

export default App;
