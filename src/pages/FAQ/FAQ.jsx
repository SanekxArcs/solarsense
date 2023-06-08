import React from "react";
import Accordion from "./Accordion";
import FaqKatalogKarts from "./FaqKatalogKarts";
import PageHeader from "../../components/PageHeader";
import ContainerWrap from "../../components/Container";

const FAQ = () => {
  const accordionData = [
    {
      title: "Wysokie Rachunki?",
      content: `Gdy tylko wykonamy zgłoszenie Twojej instalacji do Zakładu Energetycznego, niezwłocznie Cię o tym poinformujemy za pośrednictwem wiadomości SMS. Termin przesłania przez nas Zgłoszenia Mikroinstalacji w Twoim imieniu, jest zależny od wybranej przez Ciebie oferty – dla przykładu, w ofercie Pro to zaledwie 7 dni od zakończenia montażu. Zanim się z nami skontaktujesz, upewnij się czy termin na zgłoszenie w Twoim przypadku minął. Twój Zakład Energetyczny od momentu przyjęcia Zgłoszenia ma z kolei do 30 dni kalendarzowych na wymianę licznika. Ważne – nie włączaj instalacji przed wymianą licznika. Jeśli już wcześniej byłeś posiadaczem instalacji, którą rozbudowałeś – wysyłamy w Twoim imieniu aktualizację zgłoszenia mikroinstalacji.`,
    },
    {
      title: "Termin wymiany licznika",
      content: `W ramach serwisu Solar Sense przysługuje Ci możliwość skorzystania z bezpłatnej weryfikacji rachunków przez naszych specjalistów. Niepokoi Cię wysokość kwoty do zapłaty? Prześlij do nas czytelne zdjęcie lub skan otrzymanego rachunki. Poddamy go analizie, sprawdzimy poprawność pracy instalacji i zasugerujemy odpowiednie rozwiązanie.`,
    },
    {
      title: "Monitoring instalacji",
      content: `Do śledzenia pracy instalacji możesz korzystać z dedykowanych aplikacji dostępnych do pobrania bezpłatnie ze Sklepu Play czy stron internetowych poszczególnych producentów. W dniu montażu otrzymujesz od nas wiadomość mailową z danymi do logowania – konfiguracją Twojego konta zajmują się nasi specjaliści. 
      Możesz założyć konto w danej aplikacji samodzielnie, jednak nie rekomendujemy takiego rozwiązania. Wówczas nie będziemy mieć wglądu w Twoją instalację, co może utrudnić sprawną reakcję, w razie zgłoszenia jakichkolwiek zapytań o jej pracę.
      Pamiętaj, że zdalny monitoring wymaga doprowadzenia internetu w pobliże inwertera bądź bramki zbierającej dane z mikroinwerterów.`,
    },
    {
      title: "Sprawne zgłoszenie podejrzenia awarii",
      content: `W trakcie rozmowy telefonicznej poprosimy Cię o podanie daty zaobserwowania problemu wraz z dokładnym opisem sytuacji. Uwzględnij warunki atmosferyczne i zweryfikuj, czy nie wystąpił równocześnie problem z zasilaniem w domowej instalacji elektrycznej. 
      W przypadku:
      alarmu – niezbędny nam będzie kod błędu z aplikacji lub wyświetlacza falownika oraz zdjęcia bezpieczników po stronie instalacji, jak i Twoich domowych, uszkodzenia mechanicznego – zdjęcia usterki i potwierdzenie miejsce, gdzie została wpięta instalacja (np. w rozdzielni głównej).`,
    },
    {
      title: "Jak działa energia słoneczna w fotowoltaice?",
      content: `Fotowoltaika opiera się na prostym mechanizmie - promienie słoneczne padają na panele fotowoltaiczne, gdzie zostają przetworzone na energię elektryczną. Aby to się stało, panele fotowoltaiczne wykorzystują foton - nośnik oddziaływań elektrycznych, który jest przyciągany przez panele. Foton wprawia w ruch elektrony, co generuje napięcie elektryczne. Prąd stały, który wytwarzają panele, jest przekształcany w prąd przemienny przez falownik, co pozwala na zasilanie urządzeń elektrycznych w domu i wyparcie prądu sieciowego. Dzięki temu procesowi energia słoneczna jest bezpośrednio wykorzystywana jako darmowe źródło zasilania.`,
    },
    {
      title:
        "Jak dużo energii może wyprodukować instalacja fotowoltaiczna z panelami?",
      content: `Zazwyczaj, instalacja fotowoltaiczna o mocy 1 kWp jest w stanie wygenerować około 1000 kWh energii elektrycznej rocznie, jednak to ile energii faktycznie wyprodukują panele, zależy przede wszystkim od ich umiejscowienia i nasłonecznienia.`,
    },
    {
      title: "Co dzieje się w przypadku braku światła słonecznego?",
      content: `Mimo że panele fotowoltaiczne są w stanie produkować energię nawet w pochmurne i deszczowe dni, to ich wydajność jest największa w słoneczne dni. Jeśli w danym dniu produkcja energii nie jest wystarczająca dla Twojego zapotrzebowania, możesz skorzystać z nadwyżek energii wprowadzonych do sieci w dniach, gdy produkcja przewyższa Twoje potrzeby energetyczne.`,
    },
    {
      title: "Czy panele fotowoltaiczne generują energię w okresie zimowym?",
      content: `Panele fotowoltaiczne są w stanie generować energię przez cały rok, bez względu na sezon lub warunki pogodowe. Ich wydajność największa jest jednak w okresie wiosenno-jesiennym, podczas gdy zimą zazwyczaj wykorzystujemy energię zgromadzoną wcześniej w sieci (dzięki mechanizmowi net-meteringu), lub dokupujemy brakującą energię z innych źródeł.`,
    },
    {
      title: "Czym jest system net-billing w związku z energią słoneczną?",
      content: `System net-billing dotyczy prosumentów, którzy zgłosili swoją instalację fotowoltaiczną do podłączenia do sieci po 31 marca 2022 r., lub którzy sami dokonali zmiany swojego dotychczasowego systemu rozliczeń na nowy. Net-billing polega na wartościowym rozliczaniu nadwyżek energii, które zostają przesłane do sieci. System ten opiera się na transakcji kupna-sprzedaży, co pozwala na dokładne monitorowanie i rozliczanie wytworzonej energii.`,
    },
    {
      title: "Czym jest autokonsumpcja energii elektrycznej?",
      content: `Autokonsumpcja energii elektrycznej oznacza procentową część energii wytwarzanej przez instalację fotowoltaiczną, która jest zużywana na bieżąco w gospodarstwie domowym, bez potrzeby oddawania jej do sieci (w zależności od systemu rozliczeń). W typowym gospodarstwie domowym poziom autokonsumpcji wynosi od 10% do 30% w skali roku.`,
    },
    {
      title: "Czy muszę zajmować się moją instalacją fotowoltaiczną?",
      content: `Nie musisz. System fotowoltaiczny jest praktycznie całkowicie bezobsługowy, nie posiada ruchomych elementów i jest bardzo odporny na awarie. Nie wymaga też regularnego serwisowania. Nie musisz myć ani odśnieżać paneli - deszcz spłucze z nich zabrudzenia, a śnieg szuje się sam pod wpływem grawitacji. Wystarczy skorzystać z dedykowanej aplikacji, która pozwoli Ci na monitorowanie pracy systemu i produkcji energii elektrycznej z dowolnego miejsca z dostępem do internetu.`,
    },
    {
      title: "Czym jest moduł HALF CUT?",
      content: `Moduł HALF CUT, czyli moduł z ogniwami ciętymi na pół, składa się z 120 ogniw - dwa razy więcej niż typowy moduł krzemowy. Ogniwa połówkowe są połączone w łańcuchy, co pozwala na osiągnięcie podobnego prądu i napięcia wyjściowego do całych ogniw. Moduły HALF CUT mają kilka zalet, takich jak wydajniejsze działanie w przypadku częściowego zacienienia, na przykład przez liście lub śnieg, oraz zmniejszenie strat cieplnych wynikających z przesyłu energii elektrycznej.`,
    },
    {
      title: "Co zrobić, jeśli występuje problem z napięciem w sieci?",
      content: `W przypadku nadmiernego napięcia w sieci, spowodowanego nadmierną produkcją energii przez wiele instalacji w jednym miejscu, może dojść do zakłóceń w dostawie energii lub nawet do całkowitego wyłączenia zasilania. W takiej sytuacji, odpowiedzialność za rozwiązanie problemu leży po stronie Zakładu Energetycznego. Warto więc skontaktować się z Zakładem Energetycznym i zgłosić problem, aby ich zespół mógł podjąć działania naprawcze i przywrócić właściwe napięcie w sieci.`,
    },
  ];
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
