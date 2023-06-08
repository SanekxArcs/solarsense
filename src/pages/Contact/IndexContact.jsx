import React from 'react'
import { motion } from "framer-motion";
import Contact from './Contact';
import PageHeader from '../../components/PageHeader';

const IndexContact = ({ textToMessage, setTextToMessage }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PageHeader first={"Nasze"} second={"Kontakty"} three={"Masz pytanie, potrzebujesz wsparcia lub szukasz rozwiązań dla swojego domu, biznesu czy instytucji? Jesteś w dobrym miejscu!"} />
        <Contact
          textToMessage={textToMessage}
          setTextToMessage={setTextToMessage}
        />
        
      </motion.div>
    </>
  );
};

export default IndexContact
