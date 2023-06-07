import React from 'react'
// import Galeria from './Galeria'
import pic1 from "./../../assets/Home/gal1.webp";
import pic2 from "./../../assets/Home/gal6.webp";
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
      moc: "12,47",
      imie: "Jarosław",
      opinie:
        "Nie sądziłem, że w obecnych czasach można spotkać jeszcze ludzi rzetelnych, punktualnych i godnych zaufania. Długo szukałem firmy, która nieszablonowo podejdzie do instalacji PV. Szczerze będę polecał Solar Sense jako super firmę, która nie boi się wyzwań i uważnie słucha potrzeb klienta. Dziękuję całej ekipie za super atmosferę, jakość i profesjonalizm. Instalacja przerosła moje oczekiwania, a mierzyłem wysoko :)",
      modul: "Jinko Tiger 430w",
      invert: "FoxEss T12",
      typ: "Dachowca",
      loc: "Topolin",
    },
    {
      pic: zdunek,
      moc: "5,16",
      imie: "Krzysztof",
      opinie:
        "Polecam w 100%!!! Realizacja w niecały dzień. Wszystko załatwione nawet z PGE!!! Jeśli, każdy właściciel w taki sposób podchodziłby i traktował klientka jak Pan Krzysztof świat byłby piękny!!! Prąd już się produkuje - POLECAM!!!",
      modul: "Jinko 430w",
      invert: "FoxESS T5",
      typ: "Dachówka",
      loc: "Jabłonna",
    },
    // {
    //   pic: pic1,
    //   moc: "?",
    //   imie: "Damian",
    //   opinie:
    //     "Polecam w 100%!!! Realizacja w niecały dzień. Wszystko załatwione nawet z PGE!!! Jeśli, każdy właściciel w taki sposób podchodziłby i traktował klientka jak Pan Krzysztof świat byłby piękny!!! Prąd już się produkuje - POLECAM!!!",
    //   modul: "?",
    //   invert: "?",
    //   typ: "Grunt",
    //   loc: "Cisie",
    // },
    {
      pic: tomasz,
      moc: "6,0",
      imie: "Tomasz",
      opinie:
        "Firma solidna. Fachowcy zrobili profesjonalnie, sprawnie i dokładnie. Super kontakt z wykonawcą. Polecam!",
      modul: "Longi Solar 500w",
      invert: "FoxESS T8",
      typ: "Blachodachowka",
      loc: "Kamionka",
    },
    {
      pic: pic2,
      moc: "10,0",
      imie: "Sebastian",
      opinie:
        "Godna polecenia firma Duże doświadczenie właściciela 'praktyczne' jak i załogi sprawia, że można powiedzieć FACHOWCY Kontakt wzorcowy, informacja rzetelna Polecam współpracę",
      modul: "Longi Solar 500w",
      invert: "HUAWEI SUN 10KTL",
      typ: "Blachodachowka",
      loc: "Wroclaw",
    },
    {
      pic: albert,
      moc: "4,92",
      imie: "Albert",
      opinie: false,
      modul: "Jinko 410w",
      invert: "Sofar",
      typ: "Gont bitumiczny",
      loc: "Cisie",
    },
    {
      pic: anna,
      moc: "5,22",
      imie: "Anna",
      opinie: false,
      modul: "Jinko 475w",
      invert: "HUAWEI SUN 5KTL",
      typ: "Trójkąt",
      loc: "Warszawa",
    },
    {
      pic: gutter,
      moc: "9,98",
      imie: "Gutter",
      opinie:
        "Firma fotowoltaiczna, którą wybrałem, zrobiła świetną robotę z montażem paneli słonecznych. Jestem bardzo zadowolony z ich usług, a ich profesjonalizm i doświadczenie są godne pochwały.",
      modul: "JaSolar 430W",
      invert: "FoxEss T10",
      typ: "Trójkąt",
      loc: "Kobylanka",
    },
    {
      pic: karol,
      moc: "4,73",
      imie: "Karol",
      opinie: false,
      modul: "Jinko 430w",
      invert: "FoxEss T4",
      typ: "Dachówka",
      loc: "Jabłonna",
    },
    {
      pic: bialas,
      moc: "9,09",
      imie: "Konrad",
      opinie:
        "Polecam tę firmę fotowoltaiczną każdemu, kto potrzebuje montażu paneli słonecznych. Ich praca była dokładna, zorganizowana i wykonana z pasją. Nie tylko byli profesjonalni, ale również zadbali o każdy szczegół, aby zapewnić, że ich klient jest w pełni zadowolony.",
      modul: "Longi Solar 505w",
      invert: "Solis 3P8K-4G",
      typ: "Dachówka",
      loc: "Warsawa",
    },
    {
      pic: robert,
      moc: "6,88",
      imie: "Robert",
      opinie: false,
      modul: "Jinko 430w",
      invert: "FoxESS T6",
      typ: "Dachówka",
      loc: "Jabłonna",
    },
    {
      pic: tadeusz,
      moc: "6,14",
      imie: "Tadeusz",
      opinie: false,
      modul: "Jinko 475w",
      invert: "FoxEss T6",
      typ: "Gont bitumiczny",
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
      <div className="grid max-w-6xl gap-5 mx-auto mt-32 max-w-8xl">
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
      <div className="mt-10 mb-32 text-center text-gray-500">
        <h2>
          Jeśli nie widzisz swojej lub widzisz swoja instalacje na stronie i
          chcesz zasugerować zmiany to skontaktuj się z nami
          <a className="pl-2 font-medium text-blue-400 hover:text-blue-600" href="tel:+48735145620">
            Klikni tytaj
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Gallery