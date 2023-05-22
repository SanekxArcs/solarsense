import React from "react";
import MEWspolPraca from "../../../../assets/me/Magazyn_icon_1.svg";
import Bezpieczenstwo from "../../../../assets/me/Magazyn_icon_2.svg";
import Nowoczesny from "../../../../assets/me/Magazyn_icon_3.svg";
import mocy from "../../../../assets/me/Magazyn_icon_4.svg";
import Długa from "../../../../assets/me/Magazyn_icon_5.svg";

const GlowneZalety = () => {
  return (
    <>
      <section className="py-20 text-center md:text-left max-w-[1170px] mx-auto px-6 mb-20 snap-always snap-start">
        <div>
          <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl md:mt-10">
            Magazyn energii
          </h1>
          <p className="mb-5 text-2xl tracking-tight pb-10">główne zalety</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5">
          <div className=" p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <div className="flex gap-2 items-center ">
              <img loading="lazy" src={MEWspolPraca} alt="" />
              <h3 className="font-medium">
                Współpraca z instalacją fotowoltaiczną
              </h3>
            </div>
            <p>
              Zamiast oddawać nadwyżki energii produkowanej przez instalację
              fotowoltaiczną, zatrzymaj je w magazynie. Zgromadzoną energię
              wykorzystasz w nocy, podczas awarii sieci lub gdy produkcja będzie
              niewystarczająca do Twoich potrzeb.
            </p>
          </div>
          <div className=" p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <div className="flex gap-2 items-center">
              <img loading="lazy" src={Bezpieczenstwo} alt="Bezpieczenstwo" />
              <h3 className="font-medium">Bezpieczeństwo</h3>
            </div>
            <p>
              Magazyn Energii od Pylontech posiada zabezpieczenia przed
              przeciążeniami i zwarciami. Posiada również funkcję backup, która
              chroni przed nagłą przerwą w dostawie energii z sieci.
            </p>
          </div>
          <div className=" p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <div className="flex gap-2 items-center">
              <img loading="lazy" src={Nowoczesny} alt="Nowoczesny" />
              <h3 className="font-medium">Nowoczesny design</h3>
            </div>
            <p>
              Niewielki rozmiar sprawia, że urządzenie nie potrzebuje dużej
              powierzchni do instalacji. Nowoczesna, estetyczna obudowa wykonana
              z metalu pozwala wkomponować się w praktycznie każde współczesne
              wnętrze.
            </p>
          </div>
          <div className=" p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <div className="flex gap-2 items-center">
              <img loading="lazy" src={mocy} alt="Jeszcze więcej mocy" />
              <h3 className="font-medium">Jeszcze więcej mocy</h3>
            </div>
            <p>
              Modułowa budowa pozwala na bezproblemową rozbudowę magazynu
              energii. W razie potrzeby, dzięki połączeniu kilku modułów możesz
              zyskać nawet kilkukrotnie większą pojemność użytkową.
            </p>
          </div>
          <div className=" p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200">
            <div className="flex gap-2 items-center">
              <img loading="lazy" src={Długa} alt="Długa żywotność" />
              <h3 className="font-medium">Długa żywotność</h3>
            </div>
            <p>
              Magazyn energii Pylontech umożliwia wykonanie przynajmniej 6 tys.
              pełnych cykli ładowania, przy zachowaniu min. 90% pojemności. To
              wszystko przekłada się nawet na ponad 30 lat trwałości.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlowneZalety;
