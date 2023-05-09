import React from "react";

const SecondEtap = () => {
  return (
    <div>
      <div>
        <h4>Twój rachunek w 2023 roku</h4>
        <div>
          <h5>Zaznacz, jaki limit Cię dotyczy</h5>
          <div>
            <button>2000 kWh - standard</button>
            <button>2600 kWh - niepełnosprawność</button>
            <button>3000 kWh - Karta Dużej Rodziny</button>
            <button>3000 kWh - gospodarstwo rolne</button>
          </div>
          <div>
            <p>Stawka za 1 kWh powyżej progu: 1.38 zł</p>
            <button>Zmien</button>
          </div>
          <div>
            <p>
              Nie przekraczasz progu, powyżej którego cena 1 kWh jest dużo
              wyższa, dlatego pod warunkiem tego samego zużycia w 2023 r.
              zapłacisz prawie tyle samo.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5>
        Porównanie rocznych rachunków za prąd
        </h5>
        <div>
            <button>fotowoltaika</button>
            <button>fotowoltaika + magazyn energii</button>
        </div>
        <div>
            grafic
        </div>
        <p>Czy wiesz, że fotowoltaika z magazynem energii zmniejszy Twoje opłaty do zera? Co więcej, sprzedasz dużo więcej energii niż kupisz, a to oznacza, że możesz dodatkowo zarobić nawet 311 zł.</p>
      </div>
      <div>
        <button>Nazad</button>
        <button>Dalej</button>
      </div>
    </div>
  );
};

export default SecondEtap;
