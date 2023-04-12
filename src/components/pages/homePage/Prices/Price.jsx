import React from "react";
import elementforprice from "../../../../assets/elementforprice.svg"
import elementforprice1 from "../../../../assets/elementforprice1.svg"


const Price = ({priceBtn}) => {




  const priceData4 = [
    {
      title: "Najtaniej",
      cena: 39999,
      description: "Najtańsza opcja inwestycji w przyszłość",
      inwerter: "SOFAR 3.6KTLM-G3 jedno fazowy",
      solarPanel: "Jetion Solar 450W JT450SGh",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
    },
    {
      title: "Rekomendowane",
      cena: 39999,
      description: "Najlepsza opcja z uwagi na jakość i ceną",
      inwerter: "FoxESS F3000 jedno fazowy",
      solarPanel: "LONGI SOLAR LR5-54HIH-410M",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
    },
    {
      title: "Premium",
      cena: 39999,
      description: "Najlepsze materiały i produkty na całym świecie",
      inwerter: "HUAWEI SUN 2000 3KTL-L1 jedno fazowy",
      solarPanel: "HYUNDAI-HiE-S430HG G12",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
    },
  ];

  const priceData6 = [
    {
      title: "Najtaniej",
      cena: 49999,
      description: "Najtańsza opcja inwestycji w przyszłość",
      inwerter: "SOFAR 3.6KTLM-G3 jedno fazowy",
      solarPanel: "Jetion Solar 450W JT450SGh",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
    },
    {
      title: "Rekomendowane",
      cena: 59999,
      description: "Najlepsza opcja z uwagi na jakość i ceną",
      inwerter: "FoxESS F3000 jedno fazowy",
      solarPanel: "LONGI SOLAR LR5-54HIH-410M",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
    },
    {
      title: "Premium",
      cena: 69999,
      description: "Najlepsze materiały i produkty na całym świecie",
      inwerter: "HUAWEI SUN 2000 3KTL-L1 jedno fazowy",
      solarPanel: "HYUNDAI-HiE-S430HG G12",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
    },
  ];

  const priceData10 = [
    {
      title: "Najtaniej",
      cena: 59999,
      description: "Najtańsza opcja inwestycji w przyszłość",
      inwerter: "SOFAR 3.6KTLM-G3 jedno fazowy",
      solarPanel: "Jetion Solar 450W JT450SGh",
      roof: "Trapezowy",
      button: "Wybierz tanio",
      color: false,
    },
    {
      title: "Rekomendowane",
      cena: 69999,
      description: "Najlepsza opcja z uwagi na jakość i ceną",
      inwerter: "FoxESS F3000 jedno fazowy",
      solarPanel: "LONGI SOLAR LR5-54HIH-410M",
      roof: "Trapezowy",
      button: "Wybierz rekomendowane",
      color: true,
    },
    {
      title: "Premium",
      cena: 79999,
      description: "Najlepsze materiały i produkty na całym świecie",
      inwerter: "HUAWEI SUN 2000 3KTL-L1 jedno fazowy",
      solarPanel: "HYUNDAI-HiE-S430HG G12",
      roof: "Trapezowy",
      button: "Wybierz premium",
      color: false,
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
          <div className="w-full px-4 transition-all duration-300 rounded-sm shadow md:w-1/2 lg:w-1/3 hover:scale-[1.02] hover:shadow-md">
            <div className={` ${e.color ? "bg-primary-mint-lighter2" : "bg-primary-mint-accent2"} relative z-10 px-8 py-10 mb-10 overflow-hidden border rounded-sm  border-primary shadow-pricing border-opacity-20 sm:p-12 lg:py-10 lg:px-6 xl:p-12`}>
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
              <a
                href=""
                className={` ${e.color ? "border-primary-dark" : "border-primary-mint-lighter2"} block w-full p-4 text-base font-semibold text-center transition bg-transparent border rounded-sm text-primary-dark hover:bg-primary-mint  hover:text-white`}
              >
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
