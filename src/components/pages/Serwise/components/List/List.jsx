import React from 'react'
import ListComponent from './ListComponent'

const List = () => {
  const data = [
    {
      name: "Kontrola wizualna stanu modułów fotowoltaicznych",
      items: [
        {
          variant: "Stan wizualny modułów fotowoltaicznych",
          one: false,
          two: true,
          three: true,
        },
        {
          variant: "Badanie kamerą termowizyjną",
          one: false,
          two: false,
          three: true,
        },
      ],
    },
    {
      name: "Kontrola konstrukcji wsporczej i mocowań",
      items: [
        {
          variant: "Ocena stabilności konstrukcji wspornej z poszyciem dachu",
          one: false,
          two: true,
          three: true,
        },
        {
          variant: "Ocena stabilności konstrukcji gruntowej",
          one: false,
          two: true,
          three: true,
        },
        {
          variant: "Sprawdzenie zabezpieczeń antykorozyjnych",
          one: false,
          two: true,
          three: true,
        },
        {
          variant: "Sprawdzenie mocowań modułów",
          one: false,
          two: false,
          three: true,
        },
      ],
    },
    {
      name: "Połączenia w rozdzielnicach elektrycznych",
      items: [
        {
          variant: "Ocena stanu zabezpieczeń AC/DC",
          one: false,
          two: true,
          three: true,
        },
        {
          variant:
            "Test działania wyłączników nadprądowych oraz różnicowoprądowych",
          one: false,
          two: true,
          three: true,
        },
        {
          variant: "Ocena wizualna przewodów AC/DC",
          one: false,
          two: true,
          three: true,
        },
      ],
    },
    {
      name: "Analiza inwertera",
      items: [
        {
          variant: "Ocena wizualna stanu inwertera",
          one: true,
          two: true,
          three: true,
        },
        {
          variant: "Sprawdzenie połączeń DC/AC",
          one: true,
          two: true,
          three: true,
        },
        {
          variant: "Analiza rejestru błędów",
          one: true,
          two: true,
          three: true,
        },
        {
          variant: "Wyczyszczenie rejestru błędów",
          one: false,
          two: true,
          three: true,
        },
        {
          variant:
            "Sprawdzenie poprawności działania wentylatora (jeśli jest zamontowany)",
          one: true,
          two: true,
          three: true,
        },
      ],
    },
    {
      name: "Pomiary elektryczne",
      items: [
        {
          variant: "Test polaryzacji",
          one: true,
          two: true,
          three: true,
        },
        {
          variant: "Pomiary napięcia obwodu otwartego DC",
          one: true,
          two: true,
          three: true,
        },
        {
          variant: "Pomiary napięcia oraz prądy w punkcie pracy maksymalnej",
          one: true,
          two: true,
          three: true,
        },
        {
          variant: "Pomiary napięcia fazowe oraz międzyfazowe sieci AC",
          one: false,
          two: true,
          three: true,
        },
        {
          variant: "Pomiary rezystancji izolacji DC",
          one: true,
          two: true,
          three: true,
        },
      ],
    },
    {
      name: "Rozłącznik przeciwpożarowy",
      items: [
        {
          variant: "Test poprawności działania rozłącznika",
          one: true,
          two: true,
          three: true,
        },
      ],
    },
    {
      name: "Uziemienie",
      items: [
        {
          variant: "Ocena wizualna przewodu uziemiającego",
          one: true,
          two: true,
          three: true,
        },
        {
          variant: "Pomiar rezystancji",
          one: true,
          two: true,
          three: true,
        },
      ],
    },
    {
      name: "Monitoring",
      items: [
        {
          variant:
            "W przypadku braku łączności falownika/ dtu z internetem, ponowne połączenie",
          one: true,
          two: true,
          three: true,
        },
      ],
    },
  ];
    
  return (
    <section className="bg-port-gore-950 text-ocean-green-50">
      <div className="max-w-[1170px] px-6 mx-auto py-32">
      <h2 className="mb-12 text-5xl font-bold tracking-tight text-center ">
        Porównanie Pakietów <br />
        <span className="pl-2 text-ocean-green-400">Eksploatacyjnych</span>
      </h2>
      <ListComponent data={data} />
      </div>
    </section>
  );
}

export default List