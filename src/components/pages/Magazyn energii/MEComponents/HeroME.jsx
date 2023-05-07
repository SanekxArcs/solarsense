import React from 'react'
import mehuawei from '../../../../assets/me/05-700009_Pylontech_H2_142kWh_4xbattery.jpg.webp'

const HeroME = () => {
  return (
    <>
    <section className="max-w-[1170px] px-6 mx-auto my-10 md:my-32">
        <div className='grid grid-cols-1 md:grid-cols-3 '>
            <div className='flex flex-col items-center justify-center col-span-2 gap-2 md:px-20'>
                <p className='pb-10 text-xl'>
                  Pylontech zaprojektował magazyny energii w taki sposób, że zapewniają one bezpieczeństwo i wygodę dla Ciebie i Twojej rodziny w przypadku przerw w zasilaniu. System jest w stanie reagować na przerwy w dostawie prądu już w 40 milisekund, co stanowi znacznie szybszą reakcję niż przeciętne mrugnięcie oka, które trwa 10 razy dłużej.</p>
                <a href='#contact' className='block w-full p-4 text-base font-semibold text-center transition bg-transparent border rounded-sm border-primary-dark text-primary-dark hover:bg-primary-mint hover:text-white '>
                    Zapytaj o ofertę na magazyn energii 
                </a>
                </div>
            <div className=' order-first pb-5' >
                <img className='' src={mehuawei} alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default HeroME;