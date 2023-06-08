import React from "react";
import ContainerWrap from "../../components/Container";
import foxessData from './../../data/foxessData.json'

const FaqKatalogKarts = () => {
  
  return (
    <>
    <ContainerWrap>
        <div id="karty" className="scroll-m-14">
          <h3 className="mb-10 text-5xl font-bold tracking-tight text-center md:text-6xl xl:text-7xl">
            Karty katalogowe produktów
          </h3>
        </div>
        <div id="foxess" className="flex flex-col gap-2 scroll-m-14">
          <h4 className="pb-5 text-xl font-semibold text-center">
            Falowniki FoxESS
          </h4>
          <div className="flex justify-between px-4 py-2 font-medium rounded  shadow bg-ocean-green-300">
            <p>Nazwa</p>
            <p>Link na PDF</p>
          </div>
          {foxessData.map((e, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap justify-between px-4 py-2 bg-white rounded  shadow"
              >
                <p>{e.name}</p>
                <a
                  className="transition-colors hover:text-ocean-green-400 "
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="pr-2 fa-solid fa-file-pdf"></i>KARTA KATALOGOWA
                </a>
              </div>
            );
          })}
        </div>
    </ContainerWrap>

    </>
  );
};

export default FaqKatalogKarts;
