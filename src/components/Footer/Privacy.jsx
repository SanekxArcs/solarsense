import React from "react";

const Privacy = ({ isOpenModal, toggleMOdal }) => {
  return (
    <>
                <div
                  className={`${
                    isOpenModal
                      ? " animate-fadeIn bg-port-gore-950/50"
                      : "hidden"
                  } fixed top-0 left-0 z-[1055]  h-full w-full overflow-y-auto overflow-x-hidden outline-none`}
                >
                  <div className="mt-5 pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px]  transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                    <div className="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-sm border-none  bg-ocean-green-50 bg-clip-padding text-current shadow-lg outline-none  ">
                      <div className="flex items-center justify-between flex-shrink-0 p-4 border-b-2 border-opacity-100 rounded-sm border-port-gore-50 ">
                        <h5
                          className="pt-4 text-lg font-medium leading-normal text-center text-port-gore-950"
                          id="exampleModalScrollableLabel"
                        >
                          POLITYKA PRYWATNOŚCI STRONY INTERNETOWEJ <br />
                          WWW.SOLARSENSE.PL
                        </h5>
                        <button
                          onClick={toggleMOdal}
                          type="button"
                          className="box-content border-none rounded-sm text-port-gore-950 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                  <div className="relative p-4 overflow-y-auto text-port-gore-950">
                    <p>
                      1. Dla Właściciela niniejszej strony internetowej, ochrona
                      danych osobowych Użytkowników jest sprawą najwyższej wagi.
                      Dokłada on ogrom starań, aby Użytkownicy czuli się
                      bezpiecznie, powierzając swoje dane osobowe w trakcie
                      korzystania ze strony internetowej. <br /> 2. Użytkownik
                      to osoba fizyczna, osoba prawna albo jednostka
                      organizacyjna, nieposiadająca osobowości prawnej, której
                      ustawa przyznaje zdolność prawną, korzystająca z usług
                      elektronicznych, dostępnych w ramach strony internetowej.{" "}
                      <br /> 3. Niniejsza polityka prywatności wyjaśnia zasady i
                      zakres przetwarzania danych osobowych Użytkownika,
                      przysługujące mu prawa, jak też obowiązki administratora
                      tych danych, a także informuje o używaniu plików cookies.{" "}
                      <br /> 4. Administrator stosuje najnowocześniejsze środki
                      techniczne i rozwiązania organizacyjne, zapewniające
                      wysoki poziom ochrony przetwarzanych danych osobowych oraz
                      zabezpieczenia przed dostępem osób nieupoważnionych.{" "}
                      <br />
                      <b>I. ADMINISTRATOR DANYCH OSOBOWYCH</b>
                      <br />
                      Administratorem danych osobowych jest Pan Krzysztof
                      Gutter, zamieszkały przy: Szczęsna 26, 02-454 Warszawa
                      (zwany dalej: „<b>Właściciel</b>"). <br />
                      <b>II. CEL PRZETWARZANIA DANYCH OSOBOWYCH</b> <br />
                      1. Administrator przetwarza dane osobowe Użytkownika w
                      celu: W celu prawidłowej realizacji umów sprzedaży.
                      <br /> 2. Oznacza to, że dane te są potrzebne w
                      szczególności do a. zawarcia umowy; b. dokonania
                      rozliczeń; c. dostarczenia zamówionego przez Użytkownika
                      towaru lub wykonanie usług; <br /> 3. Użytkownik może
                      również wyrazić zgodę na otrzymywanie informacji o
                      nowościach i promocjach, co spowoduje, że administrator
                      będzie również przetwarzać dane osobowe, w celu
                      przesyłania Użytkownikowi informacji handlowych,
                      dotyczących m.in. nowych produktów lub usług, promocji czy
                      wyprzedaży. <br />
                      4. Dane osobowe są również przetwarzane w ramach
                      wypełnienia prawnych obowiązków, ciążących na
                      administratorze danych oraz realizacji zadań, w interesie
                      publicznym m.in. do wykonywania zadań, związanych z
                      bezpieczeństwem i obronnością lub przechowywaniem
                      dokumentacji podatkowej. <br /> 5. Dane osobowe mogą być
                      również przetwarzane w celach marketingu bezpośredniego
                      produktów, zabezpieczenia i dochodzenia roszczeń lub
                      ochrony przed roszczeniami Użytkownika lub osoby trzeciej,
                      jak również marketingu usług i produktów podmiotów
                      trzecich lub marketingu własnego, niebędącego marketingiem
                      bezpośrednim.
                      <br />
                      <b>III. RODZAJ DANYCH</b> <br /> 1. Administrator
                      przetwarza następujące dane osobowe, których podanie jest
                      niezbędne do: <br /> a. dokonywania zakupów za pomocą
                      strony internetowej: <br /> - imię i nazwisko;
                      <br /> - płeć; - adres dostawy;
                      <br /> - numer telefonu; - adres e-mail; b. Dane podawane
                      przez Użytkownika opcjonalnie: <br /> - data urodzenia;{" "}
                      <br /> - numer PESEL (w przypadku żądania wystawienia
                      faktury); <br /> - numer NIP (w przypadku żądania
                      wystawienia faktury dla przedsiębiorcy).
                      <br />
                      <b>IV. PODSTAWA PRAWNA PRZETWARZANIA DANYCH OSOBOWYCH</b>
                      <br /> 1. Dane osobowe są przetwarzane zgodnie z
                      przepisami Rozporządzenia Parlamentu Europejskiego i Rady
                      (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
                      osób fizycznych w związku z przetwarzaniem danych
                      osobowych i w sprawie swobodnego przepływu takich danych
                      oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o
                      ochronie danych), OJ L 119, 4.5.2016, p. 1–88, dalej
                      zwane: „<b>rozporządzenie RODO</b> ". <br /> 2.
                      Administrator przetwarza dane osobowe wyłącznie po
                      uprzednim uzyskaniu zgody Użytkownika w chwili
                      potwierdzenia dokonanej na stronie internetowej
                      transakcji. 3. Wyrażenie zgody na przetwarzanie danych
                      osobowych jest całkowicie dobrowolne, jednakże brak jej
                      udzielenia uniemożliwia dokonywanie zakupów, za
                      pośrednictwem strony internetowej. <br />
                      <b>V. PRAWA PRZYSŁUGUJĄCE UŻYTKOWNIKOWI</b>
                      <br /> 1. Użytkownik może w każdej chwili zażądać od
                      administratora informacji o zakresie przetwarzania danych
                      osobowych. <br /> 2. Użytkownik może w każdej chwili
                      zażądać poprawienia bądź sprostowania swoich danych
                      osobowych. <br /> 3. Użytkownik może w każdej chwili
                      wycofać swoją zgodę na przetwarzanie jego danych
                      osobowych, bez podawania przyczyny. Żądanie
                      nieprzetwarzania danych może dotyczyć wskazanego przez
                      Użytkownika konkretnego celu przetwarzania np. wycofanie
                      zgody na otrzymywanie informacji handlowych bądź dotyczyć
                      wszystkich celów przetwarzania danych. Wycofanie zgody co
                      do wszystkich celów przetwarzania spowoduje, że konto
                      Użytkownika zostanie usunięte ze strony internetowej, wraz
                      ze wszystkimi wcześniej przetwarzanymi przez
                      administratora danymi osobowymi Użytkownika. Wycofanie
                      zgody nie wpłynie na już dokonane czynności. <br /> 4.
                      Użytkownik może w każdej chwili żądać, bez podawania
                      przyczyny, aby administrator usunął Jego dane. Żądanie
                      usunięcia danych nie wpłynie na dotychczas dokonane
                      czynności. Usunięcie danych oznacza jednoczesne usunięcie
                      konta Użytkownika, wraz ze wszystkimi zapisanymi i
                      przetwarzanymi do tej pory przez administratora danymi
                      osobowymi. <br /> 5. Użytkownik może w każdej chwili
                      wyrazić sprzeciw przeciwko przetwarzaniu danych osobowych,
                      zarówno w zakresie wszystkich przetwarzanych przez
                      administratora danych osobowych Użytkownika, jak również
                      jedynie w ograniczonym zakresie np. co do przetwarzania
                      danych w konkretnie wskazanym celu. Sprzeciw nie wpłynie
                      na dotychczas dokonane czynności. Wniesienie sprzeciwu
                      spowoduje usunięcie konta Użytkownika, wraz ze wszystkimi
                      zapisanymi i przetwarzanymi do tej pory, przez
                      administratora, danymi osobowymi. <br /> 6. Użytkownik
                      może zażądać ograniczenia przetwarzania danych osobowych,
                      czy to przez określony czas, czy też bez ograniczenia
                      czasowego, ale w określonym zakresie, co administrator
                      będzie obowiązany spełnić. Żądanie to nie wpłynie na
                      dotychczas dokonane czynności. <br />
                      7. Użytkownik może zażądać, aby administrator przekazał
                      innemu podmiotowi, przetwarzane dane osobowe Użytkownika.
                      Powinien w tym celu napisać prośbę do administratora,
                      wskazując, jakiemu podmiotowi (nazwa, adres) należy
                      przekazać dane osobowe Użytkownika oraz jakie konkretnie
                      dane Użytkownik życzy sobie, żeby administrator przekazał.
                      Po potwierdzeniu przez Użytkownika swojego życzenia,
                      administrator przekaże, w formie elektronicznej,
                      wskazanemu podmiotowi, dane osobowe Użytkownika.
                      Potwierdzenie przez Użytkownika żądania jest niezbędne z
                      uwagi na bezpieczeństwo danych osobowych Użytkownika oraz
                      uzyskanie pewności, że żądanie pochodzi od osoby
                      uprawnionej. <br /> 8. Administrator informuje Użytkownika
                      o podjętych działaniach, przed upływem miesiąca od
                      otrzymania jednego z żądań wymienionych w poprzednich
                      punktach.
                      <br />
                      <b>VI. OKRES PRZECHOWYWANIA DANYCH OSOBOWYCH</b>
                      <br /> 1. Zasadniczo dane osobowe są przechowywane tylko
                      tak długo, jak to jest konieczne do wypełnienia zobowiązań
                      umownych lub ustawowych, dla których zostały one
                      zgromadzone. Dane te zostaną usunięte natychmiast, gdy ich
                      przechowywanie nie będzie konieczne, w celach dowodowych,
                      zgodnie z prawem cywilnym lub w związku z ustawowym
                      obowiązkiem przechowywania danych. <br /> 2. Informacje,
                      dotyczące umowy, przechowuje się w celach dowodowych,
                      przez okres trzech lat, począwszy od końca roku, w którym
                      zakończono relacje handlowe z Użytkownikiem. Usunięcie
                      danych nastąpi po upływie ustawowego terminu przedawnienia
                      dochodzenia roszczeń umownych. <br /> 3. Ponadto,
                      administrator może zachować informacje archiwalne,
                      dotyczące zawartych transakcji, gdyż ich przechowywanie
                      jest związane z przysługującymi Użytkownikowi roszczeniami
                      np. z tytułu rękojmi.
                      <br /> 4. Jeśli żadna umowa nie została zawarta, między
                      Użytkownikiem i Właścicielem, dane osobowe Użytkownika są
                      przechowywane do czasu usunięcia konta Użytkownika na
                      stronie internetowej. Usunięcie konta może nastąpić w
                      wyniku wysunięcia żądania przez Użytkownika, wycofania
                      zgody na przetwarzanie danych osobowych, bądź też
                      zgłoszenia sprzeciwu co do przetwarzania tych danych.{" "}
                      <br />
                      <b>
                        VII. POWIERZENIE PRZETWARZANIA DANYCH INNYM PODMIOTOM
                      </b>
                      <br />
                      1. Administrator może powierzać przetwarzanie danych
                      osobowych podmiotom współpracującym z administratorem, w
                      zakresie niezbędnym dla realizacji transakcji np. w celu
                      przygotowania zamówionego towaru oraz dostarczania
                      przesyłek lub przekazywania informacji handlowych,
                      pochodzących od administratora (ostatnie dotyczy
                      Użytkowników, którzy wyrazili zgodę na otrzymywanie
                      informacji handlowych). <br /> 2. Poza celami, wskazanymi
                      w niniejszej Polityce Prywatności, dane osobowe
                      Użytkowników, nie będą w żaden sposób udostępniane osobom
                      trzecim, ani przekazywane innym podmiotom, w celu
                      przesyłania materiałów marketingowych tych osób trzecich.{" "}
                      <br /> 3. Dane osobowe Użytkowników strony internetowej
                      nie są przekazywane poza obszar Unii Europejskiej. <br />{" "}
                      4. Niniejsza Polityka Prywatności jest zgodna z przepisami
                      wynikającymi z art. 13 ust. 1 i ust. 2 rozporządzenia
                      RODO.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-end flex-shrink-0 p-4 border-t-2 border-opacity-100 rounded-sm border-port-gore-50">
                    <button
                      onClick={toggleMOdal}
                      type="button"
                      className="inline-block rounded-sm  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  text-ocean-green-50 bg-ocean-green-400 transition duration-150 ease-in-out hover:bg-ocean-green-accent-100 focus:bg-ocean-green-accent-100 focus:outline-none focus:ring-0 active:bg-ocean-green-accent-200"
                    >
                      Zamknąć
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default Privacy;
