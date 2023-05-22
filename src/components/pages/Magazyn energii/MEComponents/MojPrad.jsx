import React from 'react'
import monejPanel from "../../../../assets/me/subsidies_main_img.webp"

const MojPrad = () => {
  return (
    <>
    <div id='Myprad50' className=' bg-port-gore-950 text-ocean-green-50 snap-always snap-start'>
        <section className='py-20 text-center md:text-left max-w-[1170px] mx-auto px-6'>
    <div className='grid md:grid-cols-3'>
        <div className='col-span-2 '>
            <img src="" alt="icon money" />
            <h2 className='mb-5 text-4xl font-bold tracking-tight md:text-6xl xl:text-7xl text-ocean-green-300'>Mój prąd 5.0</h2>
            <p>dofinansowanie do <b>23 000 zł</b>  </p>
            <p className='pt-5 md:text-xl'>
                <b>Chcesz by Twój dom był oszczędny i samowystarczalny?</b> <br />  Postaw na fotowoltaikę z magazynem energii od Solar Sense. Dotacja w programie "Mój Prąd 5.0" wynosi aż 23 000 złotych.</p>
            <p  className='pt-5 md:text-xl'>Dotacja ta jest przeznaczona na zakup komponentów, które zwiększą autokonsumpcję energii elektrycznej w domu, a w szczególności na zakup fotowoltaiki oraz magazynu energii. W ramach dotacji można otrzymać do 7 000 zł na zakup fotowoltaiki oraz do 16 000 zł na zakup magazynu energii. Dzięki temu programowi możesz postawić na niezależny i oszczędny dom, który będzie samowystarczalny pod względem energetycznym.</p>
            <p className='pt-5 text-xl '><b>Ile wynosi dotacja w Mój Prąd 5.0?</b> </p>
        </div>
        <div className='hidden md:flex items-center justify-center'>
            <img src={monejPanel} alt="ico money" />
        </div>
    </div>
    <div className='grid md:grid-cols-3 gap-10 pt-20 place-content-center'>
        <div className={`relative grid py-5 text-center rounded-sm place-content-center bg-ocean-green-100 ring-port-gore-950 ring-1 text-port-gore-950 after:content-['+'] after:text-5xl after:font-bold after:absolute after:-bottom-16 after:left-1/2 md:after:-right-5 md:after:top-[70%] after:-translate-x-1/2 md:after:translate-x-1/2 after:-translate-y-1/2 after:text-ocean-green-50`}>
            <p className='text-2xl font-black'>do 7 000 zł</p>
            <p>instalacja fotowoltaiczna</p>
        </div>
        <div className={`relative grid py-5 text-center rounded-sm place-content-center bg-ocean-green-100 ring-port-gore-950 ring-1 text-port-gore-950 after:content-['='] after:text-5xl after:font-bold after:absolute after:-bottom-16 after:left-1/2 md:after:-right-5 md:after:top-[70%] after:-translate-x-1/2 md:after:translate-x-1/2 after:-translate-y-1/2 after:text-ocean-green-50`}>
            <p className='text-2xl font-black'>do 16 000 zł</p>
            <p>magazyn energii</p>
        </div>
        <div className='grid py-5 text-center rounded-sm place-content-center bg-ocean-green-300 ring-1 text-port-gore-950'>
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