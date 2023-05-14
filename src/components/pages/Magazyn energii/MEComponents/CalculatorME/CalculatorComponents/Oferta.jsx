import React from 'react'

const Oferta = ({ActivePV, ActivePVME, result}) => {
  return (
    <div className='grid gap-10 mt-5'>
        <div className='flex flex-col gap-5'>
            <h5 className='text-xl font-bold'>
            Bezpłatna oferta już do 1 dni
            </h5>
            <p>Wyślij formularz, a my prześlemy Ci w wiadomości mailowej szczegóły kalkulacji i do 24 godzin skontaktujemy się z Tobą telefonicznie w celu przygotowania specjalnej oferty dopasowanej do Twoich potrzeb.</p>
            <div className='p-5 rounded-md shadow-md bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 shadow-ocean-green-200'>
                <h6 className='text-xl font-medium'>
                Podsumowanie kalkulacji <button><i className="text-base text-primary-dark-accent1 fa-solid fa-circle-info"></i></button>
                </h6>
                <ul>
                    <li>
                    Oszczędności w ciągu roku: {result} zł
                    </li>
                    <li>
                    Dotacja Mój Prąd 5.0: {ActivePV ? "6 000" : ""} {ActivePVME ? "26 000" : ""} zł <button><i className="text-base text-primary-dark-accent1 fa-solid fa-circle-info"></i></button>
                    </li>
                </ul>
                <div className='flex gap-2'>
                    <p>
                    Więcej informacji na temat tej kalkulacji otrzymasz w wiadomości mailowej.
                    </p>
                </div>
                
            </div>
        </div>
        <div className='grid place-content-center'><a href='#contact' className='px-4 py-2 mb-5 text-xl transition-all rounded-md ring-ocean-green-400 ring-offset-2 ring-offset-ocean-green-50 ring bg-gradient-to-br from-ocean-green-100 to-ocean-green-200 text-ocean-green-800 hover:from-ocean-green-200 hover:to-ocean-green-300'>
                    Zapytaj o ofertę
                </a></div>
    </div>
  )
}

export default Oferta