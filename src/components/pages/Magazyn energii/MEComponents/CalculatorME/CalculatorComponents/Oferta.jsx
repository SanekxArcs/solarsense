import React from 'react'

const Oferta = () => {
  return (
    <div className='grid grid-cols-2 mt-5'>
        <div className='flex flex-col gap-5'>
            <h5 className='text-xl font-bold'>
            Bezpłatna oferta już do 2 dni
            </h5>
            <p>Wyślij formularz, a my prześlemy Ci w wiadomości mailowej szczegóły kalkulacji i do 48 godzin skontaktujemy się z Tobą telefonicznie w celu przygotowania specjalnej oferty dopasowanej do Twoich potrzeb.</p>
            <div className='flex flex-col gap-2 p-5 rounded-md shadow-md bg-primary-mint-lighter2/30 shadow-primary-mint-lighter2/30'>
                <h6 className='text-xl font-medium'>
                Podsumowanie kalkulacji <button><i className="text-base text-primary-dark-accent1 fa-solid fa-circle-info"></i></button>
                </h6>
                <ul>
                    <li>
                    Oszczędności w ciągu roku: 498 zł
                    </li>
                    <li>
                    Dotacja Mój Prąd 5.0: 26 000 zł <button><i className="text-base text-primary-dark-accent1 fa-solid fa-circle-info"></i></button>
                    </li>
                </ul>
                <div className='flex gap-2'>
                    <p>
                    Szczegóły kalkulacji
                    </p>
<button className='font-bold text-primary-mint'>
                    Rozwin | Zwin
                </button>
                </div>
                
            </div>
        </div>
        <div>Kontakt</div>
    </div>
  )
}

export default Oferta