const WhyWe = () => {
  const dataWhyWe = [
    {
      logo: "fa-solid fa-headset ",
      name: "Wsparcie 24/7",
      text: "W ofercie naszej firmy znajdują się kompleksowe usługi w zakresie projektowania, sprzedaży oraz montażu instalacji fotowoltaicznych. Doradzamy klientom w doborze odpowiednich rozwiązań oraz zajmujemy się wszelkimi formalnościami związanymi z dotacjami i przyłączeniem do sieci.",
    },
    {
      logo: "fa-solid fa-shield-halved",
      name: "Bezpieczny i solidny",
      text: "Jesteśmy elastyczni i dopasowujemy się do wymagań klientów, oferując instalacje na terenie całego kraju. Dzięki wiedzy i doświadczeniu, instalacje fotowoltaiczne montowane przez naszą firmę są energooszczędne, niezawodne, opłacalne dla klientów a przede wszystkim bezpieczne.",
    },
    {
      logo: "fa-solid fa-truck-fast",
      name: "Ekstremalnie szybko",
      text: "Współpracujemy z czołowymi producentami paneli fotowoltaicznych i innych niezbędnych elementów do instalacji, co gwarantuje wysoką jakość i niezawodność naszych instalacji.",
    },
    {
      logo: "fa-solid fa-hand-holding-dollar",
      name: "Gwarancja",
      text: "Oferujemy także serwis i konserwację instalacji fotowoltaicznych, dzięki czemu klienci mogą cieszyć się ich bezawaryjnym działaniem przez wiele lat. Jako firma, dbamy o pełną satysfakcję klientów, oferując im kompleksową obsługę oraz wsparcie na każdym etapie projektu.",
    },
  ];

  return (
    <div className="w-full col-span-2 px-3 mb-6 grow-0 shrink-0 basis-auto md:mb-0 text-cadet-space">
      <div className="flex flex-wrap">
        {dataWhyWe.map((item) => {
          return (
            <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto lg:w-6/12">
              <div className="flex transition-all duration-300 hover:-translate-y-1">
                <div className="shrink-0">
                  <div className="grid w-16 h-16 text-2xl rounded-sm shadow-lg text-cadet-space bg-primary-mint place-content-center">
                    <i class={item.logo}></i>
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold text-cadet-space">{item.name}</p>
                  <p className="text-sm text-cadet-space">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyWe;
