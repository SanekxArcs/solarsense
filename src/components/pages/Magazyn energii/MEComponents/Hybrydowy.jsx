import React from 'react'
import HybrydowyIMG from '../../../../assets/me/zestaw-inwerter-hybrydowy-all-in-one-foxess-10kw-3-fazowy-4-moduly-bateryjne-hv2600.png'
import icohybryd from '../../../../assets/me/security_icon.svg'



const Hybrydowy = () => {
  return (
    <>
    <div className=' bg-primary-dark text-primary-mint-white'>
        <section className='py-10 text-center md:text-left max-w-[1170px] mx-auto px-6'>
    <div className='grid md:grid-cols-3'>
        <div className=' col-span-2'>
            <h2 className='mb-2 text-4xl font-bold tracking-tight '>Inwerter hybrydowy</h2>
            <p className='mb-5'>jeszcze więcej możliwości</p>
            <p>Inwerter hybrydowy może współpracować jednocześnie z siecią publiczną oraz tworzyć instalację on-grid pracującą z akumulatorami. Inwerter Solis dostępny w ofercie Columbus, charakteryzuje się jedną z najwyższych sprawności na rynku na poziomie 98,4%. Urządzenie optymalizuje korzyści z użytkowania domowych systemów fotowoltaicznych współpracujących z magazynami energii. Wbudowane oprogramowanie typu BMS (Battery Management System) pozwala na bieżące kontrolowanie poziomu naładowania akumulatora oraz gwarantuje bezpieczne użytkowanie.</p>
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
            W naszej ofercie znajdziesz inwerter sieciowy oraz hybrydowy. Jeśli wybierzesz wersję hybrydową zyskasz możliwość rozbudowy swojej instalacji o magazyn energii bez dodatkowych kosztów, a także dostęp do Regulatora Napięcia.
        </p>
    </div>
  </section>
        </div>      
    
  </>
  )
}

export default Hybrydowy