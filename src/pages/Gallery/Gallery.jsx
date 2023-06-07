import React from 'react'
// import Galeria from './Galeria'
import pic1 from "./../../assets/Home/gal1.webp";
import pic2 from "./../../assets/Home/gal2.webp";
import albert from "./../../assets/Gallery/albert.webp";
import anna from "./../../assets/Gallery/anna.webp";
import bialas from "./../../assets/Gallery/bialas.webp";
import ewa from "./../../assets/Gallery/ewa.webp";
import gutter from "./../../assets/Gallery/gutter.webp";
import jaroslaw from "./../../assets/Gallery/jaroslaw.webp";
import karol from "./../../assets/Gallery/karol.webp";
import robert from "./../../assets/Gallery/robert.webp";
import tadeusz from "./../../assets/Gallery/tadeusz.webp";
import tomasz from "./../../assets/Gallery/tomasz.webp";
import zdunek from "./../../assets/Gallery/zdunek.webp";

import TopImg from '../../service/com for style/TopImg';
import Card from './Card';

const Gallery = () => {
  const data = [
    {
      pic: ewa,
      moc: "12,3",
      imie: "Ewa",
      opinie:
        "Firma naprawdę godna polecenia. Instalacja założona szybko i sprawnie. Pan Krzysztof odpowiedział na wszystkie nasze pytania i zajął się całą dokumentacją związaną z elektrownią oraz dotacją, przez co nie musieliśmy włóczyć się po urzędach. Wszystko przebegało terminowo i na czas. Nie trzeba było 'gonić' za fachowcami. Pan Krzysztof odbierał wszystkie telefony dzięki czemu czuliśmy się bezpiecznie (mieliśmy różne nie miłe doświadczenia z wykonawcami w czasie budowy). Prace przebiegły sprawnie  a po realizacji firma zostawiła porządek na działce. Instalacja przed odbiorem została sprawdzona przez niezależną osobę, która oceniła jakość i wykonanie na 5+. Z całego serca polecam. Konkretnie, terminowo i profesjonalnie.",
      modul: "Jinko 475w",
      invert: "FoxESS T12",
      typ: "Blachodachowka",
      loc: "Cisie",
    },
    {
      pic: jaroslaw,
      moc: "12,3",
      imie: "Jarosław",
      opinie:
        "Nie sądziłem, że w obecnych czasach można spotkać jeszcze ludzi rzetelnych, punktualnych i godnych zaufania. Długo szukałem firmy, która nieszablonowo podejdzie do instalacji PV. Szczerze będę polecał Solar Sense jako super firmę, która nie boi się wyzwań i uważnie słucha potrzeb klienta. Dziękuję całej ekipie za super atmosferę, jakość i profesjonalizm. Instalacja przerosła moje oczekiwania, a mierzyłem wysoko :)",
      modul: "Jinko 475w",
      invert: "FoxEss T12",
      typ: "Dachowca betonowa",
      loc: "Topolin",
    },
    {
      pic: zdunek,
      moc: "",
      imie: "Krzysztof",
      opinie:
        "Polecam w 100%!!! Realizacja w niecały dzień. Wszystko załatwione nawet z PGE!!! Jeśli, każdy właściciel w taki sposób podchodziłby i traktował klientka jak Pan Krzysztof świat byłby piękny!!! Prąd już się produkuje - POLECAM!!!",
      modul: "",
      invert: "",
      typ: "",
      loc: "Jabłonna",
    },
    {
      pic: pic1,
      moc: "?",
      imie: "Damian",
      opinie:
        "Polecam w 100%!!! Realizacja w niecały dzień. Wszystko załatwione nawet z PGE!!! Jeśli, każdy właściciel w taki sposób podchodziłby i traktował klientka jak Pan Krzysztof świat byłby piękny!!! Prąd już się produkuje - POLECAM!!!",
      modul: "?",
      invert: "?",
      typ: "Grunt",
      loc: "Cisie",
    },
    {
      pic: tomasz,
      moc: "",
      imie: "Tomasz",
      opinie:
        "Firma solidna. Fachowcy zrobili profesjonalnie, sprawnie i dokładnie. Super kontakt z wykonawcą. Polecam!",
      modul: "",
      invert: "",
      typ: "",
      loc: "Kamionka",
    },
    {
      pic: pic2,
      moc: "?",
      imie: "Sebastian",
      opinie:
        "Godna polecenia firma Duże doświadczenie właściciela 'praktyczne' jak i załogi sprawia, że można powiedzieć FACHOWCY Kontakt wzorcowy, informacja rzetelna Polecam współpracę",
      modul: "?",
      invert: "?",
      typ: "?",
      loc: "?",
    },
    {
      pic: albert,
      moc: "",
      imie: "Albert",
      opinie: false,
      modul: "",
      invert: "",
      typ: "",
      loc: "Cisie",
    },
    {
      pic: anna,
      moc: "",
      imie: "Anna",
      opinie: false,
      modul: "",
      invert: "",
      typ: "",
      loc: "Warszawa",
    },
    {
      pic: gutter,
      moc: "",
      imie: "Gutter",
      opinie: false,
      modul: "",
      invert: "",
      typ: "",
      loc: "Kobylanka",
    },
    {
      pic: karol,
      moc: "",
      imie: "Karol",
      opinie: false,
      modul: "",
      invert: "",
      typ: "",
      loc: "Jabłonna",
    },
    {
      pic: bialas,
      moc: "",
      imie: "Konrad",
      opinie: false,
      modul: "",
      invert: "",
      typ: "",
      loc: "",
    },
    {
      pic: robert,
      moc: "",
      imie: "Robert",
      opinie: false,
      modul: "",
      invert: "",
      typ: "",
      loc: "Jabłonna",
    },
    {
      pic: tadeusz,
      moc: "",
      imie: "Tadeusz",
      opinie: false,
      modul: "",
      invert: "",
      typ: "",
      loc: "Warszawa",
    },
  ];
  return (
    <div>
      <section className="py-24 text-center select-none text-port-gore-50 bg-port-gore-950">
        <div className="flex justify-center">
          <div className="max-w-[1000px]">
            <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Poznaj nasze <br />
              <span className=" text-ocean-green-300">realizacje</span>
            </h2>
            <p className="text-lg text-port-gore-200"></p>
          </div>
        </div>
      </section>
      <TopImg />
      <div className="grid max-w-6xl gap-5 mx-auto my-32 max-w-8xl">
        {data.map((i) => {
          return (
            <Card
              moc={i.moc}
              pic={i.pic}
              opinie={i.opinie}
              imie={i.imie}
              modul={i.modul}
              invert={i.invert}
              typ={i.typ}
              loc={i.loc}
            />
          );
        })}
        
      </div>
      {/* <Galeria /> */}
    </div>
  );
}

export default Gallery