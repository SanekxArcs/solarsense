import React from "react";
import Accordion from "./Accordion";
import FaqKatalogKarts from "./FaqKatalogKarts";
import PageHeader from "../../components/PageHeader";
import ContainerWrap from "../../components/Container";
import accordionData from "./../../data/accordionData.json";


const FAQ = () => {

  return (
    <>
      <PageHeader first={"Najczęściej"} second={"zadawane pytania"} />
      <ContainerWrap>
        <div className="flex flex-col gap-2 mb-20">
          {accordionData.map(({ title, content, index }) => (
            <Accordion key={index} title={title} content={content} />
          ))}
        </div>
        <p class="text-center text-gray-600 text-base mt-9 ">
          Nie znalazłeś odpowiedzi, której szukasz?
          <a
            href="/#contact"
            title="kontakt"
            class="pl-2 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Skontaktuj się z naszym wsparciem
          </a>
        </p>
        <FaqKatalogKarts />
      </ContainerWrap>
    </>
  );
};

export default FAQ;
