import React from 'react'
import HybrydowyIMG from '../../../../assets/me/zestaw-inwerter-hybrydowy-all-in-one-foxess-10kw-3-fazowy-4-moduly-bateryjne-hv2600.png'
import icohybryd from '../../../../assets/me/security_icon.svg'



const Hybrydowy = () => {
  return (
    <>
    <div className=' bg-primary-dark text-primary-mint-white snap-always snap-start'>
        <section className='py-10 text-center md:text-left max-w-[1170px] mx-auto px-6'>
    <div className='grid md:grid-cols-3'>
        <div className=' col-span-2'>
            <h2 className='mb-2 text-4xl font-bold tracking-tight '>Inwerter hybrydowy</h2>
            <p className='mb-5'>jeszcze więcej możliwości</p>
            <p>Inwerter hybrydowy, który znajduje się w ofercie Solar Sense, umożliwia jednoczesną współpracę z siecią publiczną oraz z instalacją on-grid, która działa z akumulatorami. Warto zauważyć, że różne modele inwerterów w ofercie Solar Sense cechują się niezwykle wysoką sprawnością, wynoszącą nawet 98,4%, co stawia je w czołówce rynku. Warto również podkreślić, że dzięki temu urządzeniu można maksymalnie wykorzystać potencjał domowych systemów fotowoltaicznych, które współpracują z magazynami energii. Wbudowane oprogramowanie typu BMS (Battery Management System) pozwala na bieżące monitorowanie poziomu naładowania akumulatora oraz zapewnia bezpieczne użytkowanie całego systemu.</p>
        </div>
        <div className='hidden md:block'>
            <img  src={HybrydowyIMG} alt="" />
        </div>
    </div>
    <div className='mt-10 mb-20 bg-primary-mint bg-opacity-50 p-5 rounded-md shadow'>
        <div className='flex flex-col md:flex-row gap-5 items-center'>
            <img src={icohybryd} alt="" />
            <h3 className='text-2xl font-bold mb-5'>
            Chcesz by Twoja instalacja była gotowa na przyszłość?
            </h3>
        </div>
        <p className='md:text-xl'>
        W naszej ofercie oferujemy dużo urządzeń do przetwarzania energii: inwertery sieciowe i hybrydowe. Jeśli wybierzesz inwerter hybrydowy, będziesz miał możliwość rozbudowy swojego systemu o magazyn energii, bez ponoszenia dodatkowych kosztów. Ponadto, będziesz miał dostęp do Regulatora Napięcia, który umożliwi Ci kontrolowanie napięcia w Twojej sieci energetycznej i zminimalizuje ryzyko uszkodzeń urządzeń zasilanych z Twojej instalacji.</p>
    </div>
  </section>
        </div>      
    
  </>
  )
}

export default Hybrydowy