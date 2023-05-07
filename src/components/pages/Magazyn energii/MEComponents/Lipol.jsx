import React from 'react'
import Pylotech from '../../../../assets/me/Product_ME.webp'
import icolifepo from '../../../../assets/me/Union-1.svg'

const Lipol = () => {
  return (
    <>      
    <div className=' bg-primary-dark text-primary-mint-white snap-always snap-start'>
<section className='py-20 text-center md:text-left max-w-[1170px] mx-auto px-6 '>
    <div className='grid md:grid-cols-2'>
        <div className='grid place-content-center'>
            <img className=' md:scale-150' src={Pylotech} alt="" />
        </div>
        <div >
            <div className='flex gap-5 items-center'>
                <img src={icolifepo} alt="" />
                <h3 className='mt-5 text-2xl md:text-4xl font-bold tracking-tight mb-2'>Technologia LiFePO4</h3>
            </div>
            
            <p  className='mb-5 text-xl md:text-2xl tracking-tight'>
                bez efektu pamięci
            </p>
            <p className=' md:text-lg'>
                Magazyny energii od Pylontech wykonane są w technologii LiFePO4, która łączy w sobie zalety wysokiej wydajności prądowej oraz długiego czasu eksploatacji, pozwalającego osiągnąć kilka tysięcy cykli ładowania/rozładowania. Akumulatory LiFePO4 mają dużą gęstość energetyczną, dzięki czemu wyróżniają się możliwością dużej koncentracji energii przy zachowaniu kompaktowych rozmiarów. Ogniwa wykonane w tej technologii charakteryzują się również dużą odpornością na samorozładowywania. Co ważne, akumulatory LiFePO4 nie są podatne na “efekt pamięci” występujący np. w bateriach Ni-Cd, Ni-MH czy AGM, powodujący “utratę” rzeczywistej pojemności.
            </p>
        </div>
    </div>
  </section>
    </div>
    
  </>
  )
}

export default Lipol