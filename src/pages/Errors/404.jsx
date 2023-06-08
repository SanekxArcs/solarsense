import React from "react";
import Container from "../../components/Container";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";


const Error404 = () => {
  return (
    <>
      <PageHeader first={"Błąd"} second={"404"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <div className="grid place-content-center max-h-screen">
            <div className="flex flex-col items-center justify-center gap-5 text-5xl">
              <p>Takiej strony nie istnieje.</p>
              <p>Proszę wrócić do strony głównej</p>
            </div>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Error404;
