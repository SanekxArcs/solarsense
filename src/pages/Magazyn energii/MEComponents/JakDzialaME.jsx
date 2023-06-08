import React from "react";
import img1 from "./../../../assets/me/1.webp";
import img2 from "./../../../assets/me/2.webp";
import img3 from "./../../../assets/me/3.webp";
import img4 from "./../../../assets/me/4.webp";

const JakDzialaME = () => {
  return (
    <>
      <div id="jakdziala" className="bg-port-gore-950 snap-always snap-start">
        <section className="py-10 text-center md:text-left max-w-7xl mx-auto px-6  text-ocean-green-50">
          <h2 className="mb-12 text-2xl font-bold text-center uppercase md:text-5xl text-ocean-green-50">
            Jak działa hybrydowa instalacja fotowoltaiczna z magazynem energii?
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-start">
              <img loading="lazy" src={img1} alt="icon headphones" />
              <p className="text-base ">
                W przypadku mikroinstalacji, generowany prąd trafia do inwertera
                znajdującego się w domu.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <img loading="lazy" src={img2} alt="icon shield" />
              <p className="text-base ">
                Urządzenia elektryczne w domu zasilane są w pierwszej kolejności
                z prądu produkowanego przez mikroinstalację, co pozwala na
                zmniejszenie zużycia prądu z sieci energetycznej.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <img loading="lazy" src={img3} alt="icon delivery" />
              <p className="text-base ">
                Nadmiar energii, który nie jest wykorzystywany w czasie
                rzeczywistym, zostaje przekierowany do magazynu energii, gdzie
                jest magazynowany. Ta energia jest później używana, kiedy
                produkcja energii jest mniejsza niż zapotrzebowanie w domu,
                zwłaszcza po zachodzie słońca.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <img loading="lazy" src={img4} alt="icon hand with dollar" />
              <p className="text-base ">
                Jeśli po zużyciu energii z magazynu wciąż występuje nadmiar
                energii, to wtedy taki nadmiar jest przekazywany do sieci
                energetycznej. W takiej sytuacji, jeśli energia w magazynie
                zostanie całkowicie wykorzystana, dom wciąż będzie miał
                zapewnione zasilanie z sieci energetycznej.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JakDzialaME;
