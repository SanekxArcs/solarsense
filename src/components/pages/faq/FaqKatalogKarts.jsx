import React from "react";

const FaqKatalogKarts = () => {
  const data = [
    {
      name: "Falowniki trójfazowe SERIA T",
      link: "https://static.fox-ess.pro/upload/T_DS_PL_29dbdf1b5a.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "Falowniki trójfazowe SERIA F",
      link: "https://static.fox-ess.pro/upload/F_G1_PL_9edc136e09.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "Falowniki trójfazowe SERIA S",
      link: "https://static.fox-ess.pro/upload/S_DS_PL_aee906850d.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "Falowniki trójfazowe SERIA S-G2",
      link: "https://static.fox-ess.pro/upload/G2_S_Mini_DS_PL_514d9917ee.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "Falowniki trójfazowe SERIA T-G3",
      link: "https://static.fox-ess.pro/upload/T_G3_PL_afce301aac.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "Falowniki trójfazowe HYBRYDA H3/ŁADOWARKA AC3",
      link: "https://static.fox-ess.pro/upload/NEW_AC_3_H3_DS_PL_6608648ec0.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "Falowniki jednofazowe HYBRYDA H1/ŁADOWARKA AC1",
      link: "https://static.fox-ess.pro/upload/H1_AC_1_DS_PL_1_637437a287.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "AIO Trójfazowe ALL IN ONE",
      link: "https://static.fox-ess.pro/upload/AIO_3_P_PL_c0d971342f.pdf",
      secondName: "KARTA KATALOGOWA",
    },
    {
      name: "Strona producenta z certyfikatami",
      link: "https://www.fox-ess.pro/do-pobrania/",
      secondName: "Pozostale do pobrania",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center max-w-[1170px] mx-auto mb-32 select-none">
        <div>
          <h3 className="mb-10 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-center">
            Karty katalogowe produktów
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="pb-5 text-xl font-semibold text-center">
            Falowniki FoxESS
          </h4>
          <div className="flex justify-between py-2 px-4 bg-ocean-green-300 rounded-sm shadow font-medium">
            <p>Nazwa</p>
            <p>Link na PDF</p>
          </div>
          {data.map((e) => {
            return (
              <div className="flex flex-wrap justify-between py-2 px-4 bg-white rounded-sm shadow">
                <p>{e.name}</p>
                <a
                  className="hover:text-ocean-green-400 transition-colors "
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FaqKatalogKarts;
