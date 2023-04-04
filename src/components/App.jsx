import { useState } from "react";

import Header from "./Header";
import UnderHeader from "./UnderHeader";
import Footer from "./Footer";
import HomePage from "./pages/homePage/HomePage";
import Error404 from "./pages/Errors/404";
import FAQ from "./pages/faq/FAQ";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThanksForContact from "./pages/Thanks/ThanksForContact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleMOdal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Header />
        <UnderHeader toggleMenu={toggleMenu} isOpen={isOpen} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/thanks" element={<ThanksForContact />} />
        </Routes>
        <Footer toggleMOdal={toggleMOdal} isOpenModal={isOpenModal} />
      </Router>
    </>
  );
}

export default App;

