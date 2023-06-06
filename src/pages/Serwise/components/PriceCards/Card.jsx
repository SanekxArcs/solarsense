import React from 'react'

const Card = ({data}) => {
  return (
    <>{data.map((i, index)=>{
      return (
        <div
          key={index}
          className="relative flex flex-col justify-between mx-auto transition-all rounded-md p-7 bg-gradient-to-br from-ocean-green-50 to-ocean-green-200 ring ring-ocean-green-700 text-ocean-green-700 hover:-translate-y-1"
        >
          <div>
            <h3 className="text-3xl font-semibold text-center">{i.name}</h3>
            <p className='text-center'>eksploatacyjne przeglądy okresowe</p>

            <div className="flex flex-col gap-2 mt-5">

            </div>
            <div className="mt-5">
              <p className="mb-2 font-medium">W pakiecie otrzymujesz:</p>
              <ul className="list-disc list-inside ">
                {i.list.map((e, index) => {
                  return <li key={index}>{e}</li>;
                })}
              </ul>
              <p className="text-sm opacity-50">Podane ceny zawierają VAT</p>
            </div>
          </div>

          <button className="w-full px-4 py-2 mt-5 font-bold transition-all border rounded-md text-ocean-green-800 border-ocean-green-700 bg-ocean-green-50 hover:shadow-md hover:shadow-ocean-green-100 hover:-translate-y-1 hover:bg-ocean-green-200">
            <a href="#contact"><span className="text-xl text-ocean-green-700">
              {i.priceThree} zł 
            </span>
            / rok</a>
            
          </button>
        </div>
      );
    })}

    </>
  );
}

export default Card