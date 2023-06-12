import { motion } from "framer-motion";
import Accordion from "./Accordion";

const ServiseFaq = () => {
  const text1 = () => {
    return (
      <p>
        <b>
          Pakiety Inspekcji&nbsp;
          <span className=" text-ocean-green-700">Solar Sense</span> to
          najefektywniejszy sposób na regularne przeglądy i zapewnienie stałej,
          konkurencyjnej ceny przez nawet 3 lata.
        </b>
        <br />
        Po zakupie pakietu 1, 2 lub 3 inspekcji serwisowych, Twój system
        fotowoltaiczny będzie objęty profesjonalną opieką ekspertów
        <span className="font-medium text-ocean-green-700">Solar Sense</span>.
        Jeśli masz jakiekolwiek wątpliwości dotyczące działania Twojego systemu,
        skontaktuj się z naszą infolinią i umów się na wizytę naszych techników
        w dogodnym dla Ciebie terminie.
        <br />
        Przed rozpoczęciem sezonu 2023 przygotowaliśmy specjalne promocyjne
        pakiety inspekcji okresowych. Tylko teraz, kupując 2-letni pakiet,
        otrzymasz aż 15% rabatu na każdą z dwóch przeglądanych inspekcji. W
        przypadku wyboru opcji 3-letniej, nasi technicy odwiedzą Cię trzy razy w
        ustalonych terminach, a Ty zaoszczędzisz aż 20% w porównaniu do
        regularnej ceny, płacąc z góry.
        <br /> <b>W ramach wybranego pakietu otrzymasz:</b>
        <ul className="list-disc list-inside">
          <li>
            W pakiecie rocznym - przeprowadzimy 1 inspekcję eksploatacyjną
            Twojego systemu PV w umówionym terminie.
          </li>
        </ul>
        Zalecamy regularne przeglądy systemów fotowoltaicznych raz w roku,
        najlepiej na wiosnę, przed rozpoczęciem okresu o najwyższej produkcji
        energii elektrycznej.
      </p>
    );
  };
  const text2 = () => {
    return (
      <p>
        Przedmiotem rocznej oceny instalacji fotowoltaicznej jest analiza
        regularna parametrów działania oraz poprawności funkcjonowania
        wszystkich składników systemu. <br />
        Większość czynności kontrolnych, które są przeprowadzane w trakcie
        przeglądu, wykorzystuje specjalistyczne urządzenia pomiarowe i sprzęt. W
        przypadku instalacji fotowoltaicznych, narażonych na trudniejsze warunki
        niż instalacje elektryczne wewnątrz budynków (np. ze względu na
        nasłonecznienie, opady deszczu i śniegu), istnieje większe ryzyko
        awarii. System fotowoltaiczny składa się z wielu połączeń, z których
        każde może być potencjalnym źródłem usterek lub problemów.
        <br /> W ramach regularnej inspekcji eksploatacyjnej instalacji
        fotowoltaicznej (w zależności od wybranego przez właściciela pakietu PV)
        poddawane są badaniu kilka obszarów:
        <ul className="list-disc list-inside">
          <li>Analiza inwertera</li>
          <li>Pomiary elektryczne </li>
          <li>Test przeciwpożarowy</li>
          <li>Test uziemienia</li>
          <li>Kontrola stanu modułów</li>
          <li>Kontrola konstrukcji wsporczej</li>
          <li>Kontrola połączeń w rozdzielnicy</li>
          <li>Kontrola monitoringu</li>
          <li>Badanie kamerą termowizyjną</li>
          <li>Pomiary impedancji i rezystancji</li>
          <li>Sprawdzenie mocowań modułów</li>
        </ul>
      </p>
    );
  };
  const accordionData = [
    {
      title: "Jak działa pakiet przeglądów serwisowych fotowoltaiki?",
      content: text1(),
    },
    {
      title: "Na czym polega przegląd instalacji fotowoltaicznej?",
      content: text2(),
    },
    {
      title: "Czy ktoś w Solar Sense pomoże mi wybrać odpowiedni pakiet?",
      content: `Oczywiście! Z przyjemnością wysłuchamy Twoich potrzeb i podzielimy się najlepszymi sugestiami. Aby skorzystać z naszej pomocy, prosimy o wypełnienie formularza kontaktowego lub skontaktowanie się z nami telefonicznie. Rezerwując przegląd regularny dla Twojego systemu fotowoltaicznego już teraz, zapewnisz mu nie tylko optymalne funkcjonowanie przez cały sezon wiosenno-letni, ale także skorzystasz z dogodnego terminu, nie czekając na dostępność naszego zespołu serwisowego.`,
    },
    {
      title: "Jakie korzyści dają regularne, coroczne serwisy fotowoltaiki?",
      content: `Coroczny przegląd fotowoltaiki w ramach przygotowanych przez Solar Sense, to:

Zwiększenie bezpieczeństwa nieruchomości, na której posadowiona jest instalacja fotowoltaiczna.
Poprawa parametrów pracy i wzrost wydajności systemu fotowoltaicznego.
Zwiększenie przychodów gospodarstwa domowego lub firmy przy jednoczesnym ograniczeniu kosztów związanych z zakupem energii elektrycznej, potrzebnej do ogrzania nieruchomości lub zasilania urządzeń elektrycznych.
Poprawa komfortu użytkowania instalacji fotowoltaicznej.
Możliwość wcześniejszego wykrycia usterki, która nie wykryta wystarczająco wczesnie może przyczynić się do powstania strat lub szkód - to pozwala na oszczędności na kosztach napraw czy wymiany podzespołów. `,
    },
    {
      title:
        "Pakiet przeglądów serwisowych fotowoltaiki dla firm - Solar Sense. Jak często należy dokonywać przeglądów?",
      content: `Przy ustalaniu częstości sprawdzania instalacji elektrycznych należy brać pod uwagę rodzaj instalacji, sposób użytkowania i narażenia środowiskowe. Należy pamiętać, że wykonywane okresowe przeglądy instalacji elektrycznej nie są w zakresie dobrowolności właściciela obiektów budowlanych, ale wynikają z przepisów prawa. W zakres przeglądu instalacji elektrycznej wchodzi m.in.: ocena sprawności stanu połączeń, osprzęt, zabezpieczenia i środków ochrony przed porażeniem, oporność izolacji przewodów i uziemień instalacji oraz aparatów.`,
    },
    {
      title:
        "Czy do ubezpieczenia nieruchomości potrzebny jest protokół przeglądu instalacji elektrycznej?",
      content: `W zdecydowanej większości tak. Brak przeglądów może skutkować odmową wypłaty odszkodowania przez ubezpieczyciela.

Wykonywanie okresowych przeglądów elektrycznych jest niezwykle istotne w kwestii uzyskania odszkodowania pieniężnego w razie wystąpienia nieszczęśliwego zdarzenia, takiego jak np. pożar budynku. Często mają miejsce sytuacje, że firma ubezpieczeniowa bez uprzedniego poinformowania właściciela firmy lub zarządcy budynku o konieczności posiadania aktualnych wyników z przeglądów instalacji elektrycznej, po prostu nie wypłaca odszkodowania.`,
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section
          id="faq"
          className="py-24 text-center select-none bg-port-gore-950 "
        >
          <div className="flex justify-center">
            <div className="max-w-[1000px]">
              <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl text-ocean-green-50">
                PRZEGLĄDY SERWISOWE FOTOWOLTAIKI
                <br />
                <span className=" text-ocean-green-400">
                  NAJCZĘŚCIEJ ZADAWANE PYTANIA
                </span>
              </h2>
            </div>
          </div>

          <div className="max-w-7xl px-6 mx-auto md:my-32 my-10">
            <div className="flex flex-col gap-2 mb-20">
              {accordionData.map(({ title, content, index }) => (
                <Accordion key={index} title={title} content={content} />
              ))}
            </div>
            <p class="text-center text-gray-300 text-base mt-9 ">
              Nie znalazłeś odpowiedzi, której szukasz?
              <a
                href="/#contact"
                title="kontakt"
                class="pl-2 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                Skontaktuj się z naszym wsparciem
              </a>
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ServiseFaq;
