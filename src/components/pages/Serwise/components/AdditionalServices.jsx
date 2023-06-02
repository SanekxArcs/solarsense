import React from 'react'

const AdditionalServices = () => {
  return (
    <section className="max-w-[1170px] px-6 mx-auto my-32">
            <h2 className="mb-8 text-5xl font-bold tracking-tight text-center ">
              Dodatkowe 
              <span className="pl-2 text-ocean-green-400">Uslugi</span>
            </h2>
      <div className="flex flex-col gap-2 py-10">
        <div className="flex justify-between px-4 py-4 font-bold rounded-sm ring-1 ring-ocean-green-700 bg-ocean-green-200">
          <p>Rodzaj</p>
          <p>Cena brutto</p>
        </div>
        <div className="flex flex-wrap justify-center px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Wymiana paneli</p>
          <p>0d 250 zł</p>
        </div>
        <div className="flex flex-wrap justify-center px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Mycie paneli</p>
          <p>od 350 zł</p>
        </div>
        <div className="flex flex-wrap justify-center px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Wymiana falownika</p>
          <p>750 zł</p>
        </div>
        <div className="flex flex-wrap justify-center px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Badanie kamerą termowizyjną paneli</p>
          <p>900 zł</p>
        </div>
        <div className="flex flex-wrap justify-center px-4 py-2 bg-white rounded-sm ring-1 ring-ocean-green-700 md:justify-between">
          <p>Pozostałe usługi / z 1 h</p>
          <p>250 zł</p>
        </div>
        <p className="py-2 text-gray-900/50">
          <span className="pr-1 text-red-400 ">*</span>Cennik skalkulowany dla
          miejscowości w promieniu 100 km od Warszawy.
        </p>
      </div>
    </section>
  );
}

export default AdditionalServices