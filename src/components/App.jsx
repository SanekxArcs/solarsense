import { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import Header from "./Header/Header";
import UnderHeader from "./Header/UnderHeader";
import Footer from "./Footer/Footer";
import ScrollToTop from "./service/ScrollToTop";
import Bottom from "./service/com for style/BottomImg";
import { Loading } from "./service/Loading";

const HomePageLazy = lazy(() => import("./pages/homePage/HomePage"));
const FAQPageLazy = lazy(() => import("./pages/faq/FAQ"));
const Error404PageLazy = lazy(() => import("./pages/Errors/404"));
const ThanksForContactPageLazy = lazy(() => import("./pages/Thanks/ThanksForContact"));
const SerwisePageLazy = lazy(() => import("./pages/Serwise/Serwise"));
const MagazynEnergiiPageLazy = lazy(() => import("./pages/Magazyn energii/MagazynEnergii"));
const FinansowaniePageLazy = lazy(() => import("./pages/Finansowanie/Finansowanie"));

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
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading/>}>
                <HomePageLazy
                  textToMessage={textToMessage}
                  setTextToMessage={setTextToMessage}
                />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<Loading/>}>
                <FAQPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/finansowanie"
            element={
              <Suspense fallback={<Loading/>}>
                <FinansowaniePageLazy />
              </Suspense>
            }
          />
          <Route
            path="/service"
            element={
              <Suspense fallback={<Loading/>}>
                <SerwisePageLazy />
              </Suspense>
            }
          />
          <Route
            path="/thanks"
            element={
              <Suspense fallback={<Loading/>}>
                <ThanksForContactPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/me"
            element={
              <Suspense fallback={<Loading/>}>
                <MagazynEnergiiPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Loading/>}>
                <Error404PageLazy />
              </Suspense>
            }
          />
        </Routes>
        <Bottom />
        <Footer toggleMOdal={toggleMOdal} isOpenModal={isOpenModal} />
      </Router>
    </>
  );
}

export default App;
