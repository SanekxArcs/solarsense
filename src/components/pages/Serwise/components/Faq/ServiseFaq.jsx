import { motion } from "framer-motion";
import Accordion from "./Accordion";

const ServiseFaq = () => {
  const accordionData = [
    {
      title: "Jak działa pakiet przeglądów serwisowych fotowoltaiki?",
      content: `Pakiety Przeglądów Fotowoltaiki BiomarCARE to najlepszy sposób na regularne korzystanie z przeglądów i pewność stałej niskiej ceny w okresie nawet 3 lat. Po zakupie pakietu przeglądów serwisowych Basic, Premium lub Biznes, Twoja instalacja fotowoltaiczna zostaje objęta opieką serwisową specjalistów Biomar. Gdy tylko masz wątpliwości, czy Twoja instalacja pracuje właściwie - skontaktuj się z naszą infolinią i umów wizytę serwisantów w odpowiednim dla siebie czasie.

Specjalnie przed sezonem 2023 przygotowaliśmy promocyjne pakiety przeglądów okresowych. Tylko teraz kupując pakiet 2 letni - otrzymasz dwa przeglądy okresowe z 15% rabatem na każdy z nich. Przy zamówieniu opcji na 3 lata - nasi serwisanci przyjadą do Ciebie trzykrotnie w ustalonych terminach, a Ty zaoszczędzisz aż 20% względem ceny regularnej, dzięki płatności "z góry".

W ramach zakupionego pakietu otrzymasz:

W pakiecie rocznym - serwis wykona 1 przegląd eksploatacyjny twojej instalacji PV w umówionym terminie.
W pakiecie 2-letnim - serwis wykona 2 przeglądy eksploatacyjne instalacji PV w umówionych terminach.
W pakiecie 3-letnim - serwis wykona 3 przeglądy eksploatacyjne instalacji PV w umówionych terminach.
Zaleca się wykonywanie przeglądów okresowych fotowoltaiki raz w roku, najlepiej wczesną wiosną, tuż przed początkiem okresu o największej produkcji energii elektrycznej. `,
    },
    {
      title: "Na czym polega przegląd instalacji fotowoltaicznej?",
      content: `Przegląd instalacji fotowoltaicznej polega na corocznym badaniu parametrów pracy i poprawności działania wszystkich elementów systemu. Większość czynności kontrolnych wykonywanych podczas przeglądu instalacji fotowoltaicznej odbywa się przy wykorzystaniu specjalistycznych mierników i sprzętu.

Instalacja fotowoltaiczna jest poddana oddziaływaniu zdecydowanie cięższych warunków niż instalacja elektryczna znajdująca się wewnątrz budynku (np. z uwagi na promieniowanie słoneczne, deszcz, śnieg). System fotowoltaiczny składa się dodatkowo z wielu połączeń, z których każde może potencjalnie być powodem usterki lub awarii.

W ramach okresowego przeglądu eksploatacyjnego fotowoltaiki (w zależności od wybranego przez właściciela instalacji PV pakietu) badaniu poddawanych jest kilka obszarów:

Analiza inwertera
Pomiary elektryczne
Test przeciwpożarowy
Test uziemienia
Kontrola stanu modułów
Kontrola konstrukcji wsporczej
Kontrola połączeń w rozdzielnicy
Kontrola monitoringu
Badanie kamerą termowizyjną
Pomiary impedancji i rezystancji
Sprawdzenie mocowań modułów`,
    },
    {
      title: "Jaki jest koszt przeglądu instalacji fotowoltaicznej?",
      content: `Koszt przeglądu instalacji fotowoltaicznej zależy od rodzaju wybranego pakietu. Ceny oraz zakres usług wykonywanych w ramach wizyty serwisantów Biomar znajdują się w Cenniku u góry strony. W ramach usługi BiomarCare dla klientów indywidualnych przygotowaliśmy dwa pakiety: Basic oraz Premium.

Jeżeli jesteś posiadaczem instalacji fotowoltaicznej od Biomar, możesz wybrać pakiet roczny w regularnej cenie lub pakiet 2-letni lub 3-letni w cenach promocyjnych. Cena Regularna Usługi BiomarCARE: 

Pakiet Basic - 1199 zł
Pakiet Premium - 1499 zł
W ramach usługi dokonamy jednego kompleksowego przeglądu Twojej instalacji fotowoltaicznej we wspólnie ustalonym terminie. Na skorzystanie z usługi masz 365 dni od dnia opłacenia zamówienia. 

Ceny Promocyjne Usługi BiomarCARE: 

Jeżeli zdecydujesz się od razu na zakup dwóch corocznych przeglądów serwisowych, otrzymasz 15% rabatu. Wybierając pakiet trzech przeglądów okresowych otrzymujesz aż 20% ulgi od Ceny Regularnej.  

Jeżeli nie posiadasz instalacji fotowoltaicznej zakupionej w OZE-Biomar, obowiązuje Cię cennik dla nowych klientów:

Pakiet Basic - 1199 zł
Pakiet Premium - 1499 zł`,
    },
    {
      title: "Czy ktoś w Biomar pomoże mi wybrać odpowiedni pakiet?",
      content: `Tak. Wysłuchamy Twoich potrzeb i doradzimy najlepsze rozwiązanie. Wypełnij formularz kontaktowy lub zadzwoń na naszą infolinię: 58 882 53 24

Umawiając się na okresowy przegląd instalacji fotowoltaicznej już dziś zapewnisz jej nie tylko prawidłowe i optymalne działanie w trakcie całego sezonu wiosenno-letniego, ale także wykonasz usługę w dogodnym dla siebie terminie bez czekania na wolne terminy ekipy serwisowej.`,
    },
    {
      title:
        "Czy jako konsument mogę zrezygnować z zakupionych usług/ pakietu?",
      content: `Jesteś konsumentem? W pakietach Basic oraz Premium samodzielnie możesz zrezygnować w ciągu 14 dni. Po ich przekroczeniu nie zwracamy środków za zamówione i zakupione usługi.

Prowadzisz jednoosobową działalność gospodarczą? W przypadku usługi eksploatacyjnych przeglądów okresowych w pakiecie Biznes, jeżeli dokonasz zakupu jako przedsiębiorca na potrzeby niezwiązane z prowadzoną działalnością - możesz zrezygnować w ciągu 14 dni.

Dokonujesz zakupu na cele związane z prowadzoną działalnością gospodarczą? Jeżeli jako przedsiębiorca zakupisz usługę na potrzeby prowadzonej działalności gospodarczej obowiązuję Cię warunki zawarte w umowie. `,
    },
    {
      title:
        "Jak często należy przeprowadzać przegląd instalacji fotowoltaicznej?",
      content: `Praca systemu fotowoltaicznego jest praktycznie bezawaryjna a sama instalacja bezobsługowa. Widać to zwłaszcza, gdy porównamy ją do obsługi tradycyjnych kotłów na pellet czy ekogroszek. System fotowoltaiczny, jak każda instalacja elektryczna, jest jednak pod napięciem, a dodatkowo nieustannie wystawiona jest na działanie czynników atmosferycznych, w tym śniegu, wiatru, mrozu czy wysokich temperatur, dlatego też wymaga przeprowadzania okresowych kontroli, a także monitoringu jej pracy. Dzięki nim można mieć pewność, że instalacja jest bezpieczna i że pracuje optymalnie.

Przeglądy okresowe pozwalają na zdiagnozowanie ewentualnych zakłóceń pracy i problemów spowodowanych występowaniem gwałtownych zjawisk pogodowych.

Serwis instalacji fotowoltaicznej powinien być wykonywany co najmniej raz na 5 lat. Jest to warunek uregulowany w ustawie Prawo budowlane z dnia 07.07.1994 r. (Dz. U. nr 106 z 2000 r. poz. 1126 z późniejszymi zmianami).

Idąc za ustawą:
„Obiekty budowlane powinny być w czasie ich użytkowania poddawane przez właściciela lub zarządcę kontroli: okresowej, co najmniej raz na 5 lat, polegającej na sprawdzeniu stanu technicznego i przydatności do użytkowania obiektu budowlanego, estetyki obiektu budowlanego oraz jego otoczenia; kontrolą tą powinno być objęte również badanie instalacji elektrycznej i piorunochronnej w zakresie stanu sprawności połączeń, osprzętu, zabezpieczeń i środków ochrony od porażeń, oporności izolacji przewodów oraz uziemień instalacji i aparatów.

(…) Kontrole stanu technicznego instalacji elektrycznych, piorunochronnych i gazowych mogą przeprowadzać osoby posiadające kwalifikacje wymagane przy wykonywaniu dozoru nad eksploatacją urządzeń, instalacji oraz sieci energetycznych i gazowych”.

Aby mieć pewność, że fotowoltaika działa sprawnie, bezpiecznie i z największą wydajnością zalecamy:
Regularnie, przynajmniej raz w miesiącu, sprawdzać parametry pracy instalacji oraz ilość wytwarzanej energii elektrycznej. Większość falowników umożliwia zdalny wgląd np. przy pomocy aplikacji mobilnej lub przeglądarki internetowej do podglądu bieżących wyników pracy całej instalacji w danym okresie.  
Przynajmniej raz na kwartał, najlepiej w okresach po zakończeniu sezonu zimowego i letniego lub po wystąpieniu silniejszych niż zwykle wyładowań atmosferycznych, gradu, burz dokonywać wizualnej oceny stanu całej instalacji.
Raz w roku, najlepiej przed rozpoczęciem okresu wiosenno-letniego, aby sprawdzić i przygotować instalację fotowoltaiczną do intensywnej pracy przy produkcji zielonej energii, dokonywać przeglądu ekploatacyjnego przez serwisantów z wymaganymi prawem kwalifikacjami. Polecamy pakiet przeglądów Premium w ramach usługi Biomar Care.`,
    },
    {
      title: "Jakie korzyści dają regularne, coroczne serwisy fotowoltaiki?",
      content: `Coroczny przegląd fotowoltaiki w ramach przygotowanych przez Biomar pakietów Basic, Premium lub Biznes to:

Zwiększenie bezpieczeństwa nieruchomości, na której posadowiona jest instalacja fotowoltaiczna.
Poprawa parametrów pracy i wzrost wydajności systemu fotowoltaicznego.
Zwiększenie przychodów gospodarstwa domowego lub firmy przy jednoczesnym ograniczeniu kosztów związanych z zakupem energii elektrycznej, potrzebnej do ogrzania nieruchomości lub zasilania urządzeń elektrycznych.
Poprawa komfortu użytkowania instalacji fotowoltaicznej.
Możliwość wcześniejszego wykrycia usterki, która nie wykryta wystarczająco wczesnie może przyczynić się do powstania strat lub szkód - to pozwala na oszczędności na kosztach napraw czy wymiany podzespołów. `,
    },
    {
      title:
        "Pakiet przeglądów serwisowych fotowoltaiki dla firm - BIZNES CARE. Jak często należy dokonywać przeglądów?",
      content: `Przy ustalaniu częstości sprawdzania instalacji elektrycznych należy brać pod uwagę rodzaj instalacji, sposób użytkowania i narażenia środowiskowe. Należy pamiętać, że wykonywane okresowe przeglądy instalacji elektrycznej nie są w zakresie dobrowolności właściciela obiektów budowlanych, ale wynikają z przepisów prawa. W zakres przeglądu instalacji elektrycznej wchodzi m.in.: ocena sprawności stanu połączeń, osprzęt, zabezpieczenia i środków ochrony przed porażeniem, oporność izolacji przewodów i uziemień instalacji oraz aparatów.

Polskie normy zalecają właścicielom instalacji fotowoltaicznych cykliczne okresowe kontrole:

Co 4 lata – poza budownictwem mieszkaniowym (firmy, budynki administracji), gdy nie wystepują szczególne warunki srodowiskowe,
Krótsze niż 4 lata w niżej podanych przypadkach:
obiekty o zwiekszonym zagrożeniu porażeniem, pożarem, wybuchem,
miejsca, w których znajdują się instalacje niskiego i wysokiego napięcia,
obiekty gromadzące publiczność,
instalacje bezpieczenstwa.
Zgodnie z ustawą Prawo budowlane kontrola instalacji elektrycznych, w zależności od narażeń środowiskowych, powinna być przeprowadzana:

nie rzadziej niż co 5 lat - budownictwo mieszkaniowe
nie rzadziej niż co 1 rok - pozostałe obiekty poza budownictwem mieszkaniowym
w szczególnych przypadkach dwa razy w roku*.
*Stanowi o tym zapis art. 62.1 Prawa budowlanego: „Obiekty budowlane powinny być w czasie ich użytkowania poddawane przez właściciela lub zarządcę kontroli (...) co najmniej dwa razy w roku, w terminach do 31 maja oraz do 30 listopada, w przypadku budynków o powierzchni zabudowy przekraczajacej 2000 m2 oraz innych obiektów budowlanych o powierzchni dachu przekraczajacej 1000 m2, (…)”`,
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
        <section className="py-24 text-center select-none bg-port-gore-950">
          <div className="flex justify-center">
            <div className="max-w-[1000px]">
              <h2 className="mb-5 text-5xl font-bold tracking-tight text-ocean-green-50">
                PRZEGLĄDY SERWISOWE FOTOWOLTAIKI
                <br />
                <span className=" text-ocean-green-400">
                  NAJCZĘŚCIEJ ZADAWANE PYTANIA
                </span>
              </h2>
            </div>
          </div>

          <div className="max-w-[1170px] px-6 mx-auto my-32">
            <div className="flex flex-col gap-2 mb-20">
              {accordionData.map(({ title, content, index }) => (
                <Accordion key={index} title={title} content={content} />
              ))}
            </div>
            <p class="text-center text-gray-300 textbase mt-9 ">
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
