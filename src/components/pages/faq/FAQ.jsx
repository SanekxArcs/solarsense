import React from "react";
import Accordion from "./Accordion";
import TopImg from "../../service/com for style/TopImg";

const FAQ = () => {
  const accordionData = [
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
      content: `Nie musisz. System fotowoltaiczny jest praktycznie całkowicie bezobsługowy, nie posiada ruchomych elementów i jest bardzo odporny na awarie. Nie wymaga też regularnego serwisowania. Nie musisz myć ani odśnieżać paneli - deszcz spłucze z nich zabrudzenia, a śnieg zsuje się sam pod wpływem grawitacji. Wystarczy skorzystać z dedykowanej aplikacji, która pozwoli Ci na monitorowanie pracy systemu i produkcji energii elektrycznej z dowolnego miejsca z dostępem do internetu.`,
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
      <section className="py-24 text-center  text-primary-mint-accent2 bg-primary-dark">
        <div className="flex justify-center">
          <div className="max-w-[1000px]">
            <h2 className="mb-5 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Najczęściej <br />
              <span className=" text-primary-mint">zadawane pytania</span>
            </h2>
            {/* <p className="text-lg text-gray-500">
    
    </p> */}
          </div>
        </div>
      </section>
      <TopImg />
      <div className="max-w-[1170px] px-6 mx-auto my-32">
        <div className="mb-20">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-[1170px] mx-auto mb-32">
        <div className="">
          <h3 className="mb-10 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-center">
            Karty katalogowe produktów
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="pb-5 text-xl font-semibold text-center">Falowniki FoxESS</h4>
          <div className="flex justify-between  py-2 px-4  bg-primary-mint-lighter2 rounded-sm shadow font-medium">
            <p>Nazwa</p>
            <p>Link na PDF</p>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>Falowniki trójfazowe SERIA T</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/T_DS_PL_29dbdf1b5a.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>Falowniki jednofazowe
SERIA F</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/F_G1_PL_9edc136e09.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>Falowniki jednofazowe
SERIA S</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/S_DS_PL_aee906850d.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>Falowniki jednofazowe
SERIA S-G2</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/G2_S_Mini_DS_PL_514d9917ee.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>Falowniki trójfazowe
SERIA T-G3</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/T_G3_PL_afce301aac.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>Falowniki trójfazowe
HYBRYDA H3/ŁADOWARKA AC3</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/NEW_AC_3_H3_DS_PL_6608648ec0.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>Falowniki jednofazowe
HYBRYDA H1/ŁADOWARKA AC1</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/H1_AC_1_DS_PL_1_637437a287.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between py-2 px-4 bg-white rounded-sm shadow">
            <p>AIO Trójfazowe
ALL IN ONE</p>
            <a className="hover:text-primary-mint transition-colors " href="https://static.fox-ess.pro/upload/AIO_3_P_PL_c0d971342f.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>KARTA KATALOGOWA</a>
          </div>
          <div className="flex justify-between bg-white py-4 px-4  rounded-sm shadow">
            <p>Strona producenta z certyfikatami</p>
            <a className="hover:text-primary-mint transition-colors " href="https://www.fox-ess.pro/do-pobrania/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf pr-2"></i>Pozostale do pobrania</a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default FAQ;
