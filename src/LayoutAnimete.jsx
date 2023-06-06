import React from "react";
import { Loading } from "./service/Loading";
import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

const HomeLazy = lazy(() => import("./pages/homePage/HomePage"));
const FAQPageLazy = lazy(() => import("./pages/FAQ/FAQ"));
const Error404PageLazy = lazy(() => import("./pages/Errors/404"));
const ThanksForContactPageLazy = lazy(() =>import("./pages/Thanks/ThanksForContact"));
const SerwisePageLazy = lazy(() => import("./pages/Serwise/ServisePage"));
const MagazynEnergiiPageLazy = lazy(() =>import("./pages/Magazyn energii/MagazynEnergii"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));


const LayoutAnimete = ({ setTextToMessage, textToMessage }) => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <HomeLazy
                  textToMessage={textToMessage}
                  setTextToMessage={setTextToMessage}
                />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<Loading />}>
                <FAQPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/service"
            element={
              <Suspense fallback={<Loading />}>
                <SerwisePageLazy />
              </Suspense>
            }
          />
          <Route
            path="/thanks"
            element={
              <Suspense fallback={<Loading />}>
                <ThanksForContactPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Loading />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/me"
            element={
              <Suspense fallback={<Loading />}>
                <MagazynEnergiiPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Loading />}>
                <Error404PageLazy />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default LayoutAnimete;
