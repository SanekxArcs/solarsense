import React from 'react'
import uziom from "../../../../assets/Servise/instalacja-odgromowa-a-fotowoltaika.webp"

const AdditionalServices = () => {
  return (
    <section className="max-w-[1170px] px-6 mx-auto my-32">
      <img
        className="w-[600px] md:w-full md:max-w-[1170px] px-6 mx-auto my-14 border-b-2 pb-5 border-ocean-green-400"
        src={uziom}
        alt=""
      />
      <h3 className="mb-8 text-3xl font-bold tracking-tight text-center md:text-5xl ">
        Dodatkowe
        <span className="pl-2 text-ocean-green-400">Usługi</span>
      </h3>
      <div className="flex flex-col gap-2 py-10">
        <div className="flex justify-between px-4 py-4 font-bold rounded-sm ring-1 ring-ocean-green-700 bg-ocean-green-200">
          <p>Rodzaj</p>
          <p>Cena brutto</p>
        </div>
        <div className="flex justify-between gap-2 px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Wymiana paneli</p>
          <p>0d 250 zł</p>
        </div>
        <div className="flex justify-between gap-2 px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Mycie paneli</p>
          <p>od 350 zł</p>
        </div>
        <div className="flex justify-between gap-2 px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Wymiana falownika</p>
          <p>800 zł</p>
        </div>
        <div className="flex justify-between gap-2 px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Pozostałe usługi / z 1 h</p>
          <p>356 zł</p>
        </div>
        <p className="py-2 text-center text-gray-900/50">
          <span className="pr-1 text-red-400 ">*</span>Cennik skalkulowany dla
          miejscowości w promieniu 100 km od Warszawy.
        </p>
      </div>
    </section>
  );
}

export default AdditionalServices