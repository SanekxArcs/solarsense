import React from 'react'
import monejPanel from "../../../../assets/me/subsidies_main_img.webp"

const MojPrad = () => {
  return (
    <>
    <div id='Myprad50' className=' bg-primary-dark text-primary-mint-white'>
        <section className='py-20 text-center md:text-left max-w-[1170px] mx-auto px-6'>
    <div className='grid md:grid-cols-3'>
        <div className='col-span-2 '>
            <img src="" alt="" />
            <h2 className='mb-5 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>Mój prąd 5.0</h2>
            <p>dofinansowanie do <b>23 000 zł</b>  </p>
            <p className='pt-5 text-xl'>
                <b>Chcesz by Twój dom był oszczędny i samowystarczalny?</b>  Postaw na fotowoltaikę z magazynem energii od Columbus. W 5 edycji programu “Mój Prąd” dotacja na ten duet wynosi aż 23 000 zł. </p>
            <p  className='pt-5 text-xl'>V edycji programu “Mój Prąd” podobnie jak poprzednia, wspiera zakup komponentów zwiększających autokonsumpcję energii elektrycznej. Inwestując w fotowoltaikę wraz z magazynem energii możesz liczyć nawet na 23 000 złotych dotacji (do 7 000 zł fotowoltaika + do 16 000 zł magazyn energii). Postaw na niezależny dom i skorzystaj z dotacji już dziś.</p>
            <p className='pt-5 text-xl '><b>Ile wynosi dotacja w Mój Prąd 5.0?</b> </p>
        </div>
        <div className='hidden md:flex items-center justify-center'>
            <img src={monejPanel} alt="" />
        </div>
    </div>
    <div className='grid md:grid-cols-3 gap-10 pt-20 place-content-center'>
        <div className={`relative grid py-5 text-center rounded-sm place-content-center bg-primary-mint-white ring-zinc-950 ring-1 text-primary-dark-accent1 after:content-['+'] after:text-5xl after:font-bold after:absolute after:-bottom-16 after:left-1/2 md:after:-right-5 md:after:top-1/2 after:-translate-x-1/2 md:after:translate-x-1/2 after:-translate-y-1/2 after:text-primary-mint-lighter2`}>
            <p className='text-2xl font-black'>do 7 000 zł</p>
            <p>instalacja fotowoltaiczna</p>
        </div>
        <div className={`relative grid py-5 text-center rounded-sm place-content-center bg-primary-mint-white ring-1 text-primary-dark-accent1 after:content-['='] after:text-5xl after:font-bold after:absolute after:-bottom-16 after:left-1/2 md:after:-right-5 md:after:top-1/2 after:-translate-x-1/2 md:after:translate-x-1/2 after:-translate-y-1/2 after:text-primary-mint-lighter2`}>
            <p className='text-2xl font-black'>do 16 000 zł</p>
            <p>magazyn energii</p>
        </div>
        <div className='grid py-5 text-center rounded-sm place-content-center bg-primary-mint-lighter2 ring-1 text-primary-dark-accent1'>
            <p className='text-2xl font-black'>do 23 000 zł</p>
            <p>na dom niezależny energetycznie/samowystarczalny</p>
        </div>
    </div>
  </section>
    </div>      
    
  </>
  )
}

export default MojPrad