import React from 'react'
import img1 from '../../../../assets/me/1.webp'
import img2 from '../../../../assets/me/2.webp'
import img3 from '../../../../assets/me/3.webp'
import img4 from '../../../../assets/me/4.webp'

const JakDzialaME = () => {
  return (
    <>
    <div className='bg-primary-dark'>
        <section className='py-10 text-center md:text-left max-w-[1170px] mx-auto px-6  text-mint-cream'>
    <h2 className='mb-12 text-4xl font-bold text-center uppercase md:text-5xl text-mint-cream'>Jak działa hybrydowa instalacja fotowoltaiczna z magazynem energii?</h2>
    <div className='grid grid-cols-4 gap-10'>
        <div>
            <img src={img1} alt="" />
            <p className='text-base '>W przypadku mikroinstalacji, generowany prąd trafia do inwertera znajdującego się w domu.</p>
        </div>
        <div>
            <img src={img2} alt="" />
            <p className='text-base '>Urządzenia elektryczne w domu zasilane są w pierwszej kolejności z prądu produkowanego przez mikroinstalację, co pozwala na zmniejszenie zużycia prądu z sieci energetycznej.</p>
        </div>
        <div>
            <img src={img3} alt="" />
            <p className='text-base '>Nadmiar energii, który nie jest wykorzystywany w czasie rzeczywistym, zostaje przekierowany do magazynu energii, gdzie jest magazynowany. Ta energia jest później używana, kiedy produkcja energii jest mniejsza niż zapotrzebowanie w domu, zwłaszcza po zachodzie słońca.</p>
        </div>
        <div>
            <img src={img4} alt="" />
            <p className='text-base '>Jeśli po zużyciu energii z magazynu wciąż występuje nadmiar energii, to wtedy taki nadmiar jest przekazywany do sieci energetycznej. W takiej sytuacji, jeśli energia w magazynie zostanie całkowicie wykorzystana, dom wciąż będzie miał zapewnione zasilanie z sieci energetycznej.</p>
        </div>
    </div>
  </section>
        </div>      
  </>
  )
}

export default JakDzialaME