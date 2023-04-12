import React from "react";
import elementforprice from "../../../../assets/elementforprice.svg"
import elementforprice1 from "../../../../assets/elementforprice1.svg"


const Price = ({priceBtn, setTextToMessage}) => {




  const priceData4 = [
    {
      title: "Najtaniej",
      cena: "17 602",
      description: "Najtańsza opcja inwestycji w przyszłość",
      inwerter: "SOFAR 3.6KTLM-G3, L1, 2xMPPT",
      solarPanel: "JETION SOLAR 545W JT545SSh Bifacial",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
      power: "4 kWp",
    },
    {
      title: "Rekomendowane",
      cena: '18 312',
      description: "Najlepsza opcja z uwagi na jakość i ceną",
      inwerter: "FOXESS S3300, L1, 1xMPPT",
      solarPanel: "Jinko Solar JKM420N-54HL4-B Full Black",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
      power: "4 kWp",
    },
    {
      title: "Premium",
      cena: '27 770',
      description: "Najlepsze materiały i produkty na całym świecie",
      inwerter: "HUAWEI SUN 2000 3KTL-L1, 2xMPPT",
      solarPanel: "HYUNDAI-HiE-S435HG G12 435W Full Black",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
      power: "4 kWp",
    },
  ];

  const priceData6 = [
    {
      title: "Najtaniej",
      cena: "22 682",
      description: "Najtańsza opcja inwestycji w przyszłość",
      inwerter: "SOFAR 5.5KTL-X-G3, L3, 2xMPPT",
      solarPanel: "JETION SOLAR 545W JT545SSh Bifacial",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
      power: "6 kWp",
    },
    {
      title: "Rekomendowane",
      cena: '27 218',
      description: "Najlepsza opcja z uwagi na jakość i ceną",
      inwerter: "FoxESS T6 (G3), L3, 2xMPPT",
      solarPanel: "Jinko Solar JKM420N-54HL4-B Full Black",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
      power: "6 kWp",
    },
    {
      title: "Premium",
      cena: '38 217',
      description: "Najlepsze materiały i produkty na całym świecie",
      inwerter: "HUAWEI SUN 2000-6KTL-M1, L3, 2xMPPT",
      solarPanel: "HYUNDAI-HiE-S435HG G12 435W Full Black",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
      power: "6 kWp",
    },
  ];

  const priceData10 = [
    {
      title: "Najtaniej",
      cena: "34 082",
      description: "Najtańsza opcja inwestycji w przyszłość",
      inwerter: "SOFAR 8.8KTL-X-G3, L3, 2xMPPT",
      solarPanel: "JETION SOLAR 545W JT545SSh Bifacial",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
      power: "10 kWp",
    },
    {
      title: "Rekomendowane",
      cena: '40 148',
      description: "Najlepsza opcja z uwagi na jakość i ceną",
      inwerter: "FoxESS T10 (G3), L3, 2xMPPT",
      solarPanel: "Jinko Solar JKM420N-54HL4-B Full Black",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
      power: "10 kWp",
    },
    {
      title: "Premium",
      cena: '59 139',
      description: "Najlepsze materiały i produkty na całym świecie",
      inwerter: "HUAWEI SUN 2000-10KTL-M1, L3, 2xMPPT",
      solarPanel: "HYUNDAI-HiE-S435HG G12 435W Full Black",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
      power: "10 kWp",
    },
  ];
  console.log(priceBtn);

  const mapChange = [
    priceData4, priceData6, priceData10
  ];
  return (
    <>
      {mapChange[priceBtn].map((e) => {
        return (
          <div className="w-full px-4 transition-all duration-300 rounded-sm  md:w-1/2 lg:w-1/3 hover:scale-[1.02] ">
            <div className={` ${e.color ? "bg-primary-mint-lighter2" : "bg-primary-mint-accent2"} relative z-10 px-8 py-10 mb-10 overflow-hidden border rounded-sm   shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12`}>
              <span className="block mb-4 text-lg font-semibold text-primary">
                {e.title}
              </span>
              <h2 className="text-dark mb-5 text-[42px] font-bold">
                {e.cena}
                <span className="text-base font-medium text-body-color">
                  / zl
                </span>
              </h2>
              <p className="pb-8 mb-8 text-base border-b text-body-color border-primary-mint-lighter2">
                {e.description}
              </p>
              <div className="mb-7">
                <p className="mb-1 text-lg font-semibold leading-loose text-body-color">
                  Komponenty:
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Falownik: {e.inwerter}
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Moduły: {e.solarPanel}
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Typ dachu: {e.roof}
                </p>
              </div>
              <a href="#contact" onClick={() => {setTextToMessage(`Dzień dobry, mam pytania odnośnie zestawu '${e.title}' instalacji mocy ~${e.power}. Jej komponentami jest: Falownik ${e.inwerter}, moduly ${e.solarPanel}. Potrzebuje szczególną wycenę.`)}} className={` ${e.color ? "border-primary-dark" : "border-primary-mint-lighter2"} block w-full p-4 text-base font-semibold text-center transition bg-transparent border rounded-sm text-primary-dark hover:bg-primary-mint  hover:text-white`}>
                {e.button}
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <img src={elementforprice} alt="" />
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <img src={elementforprice1} alt="" />
                  
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Price;
