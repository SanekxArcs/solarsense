import React from 'react'
import ListComponent from './ListComponent'

const List = () => {
  return (
    <section className="bg-port-gore-950 text-ocean-green-50">
      <div className="max-w-[1170px] px-6 mx-auto py-32">
      <h2 className="mb-12 text-5xl font-bold tracking-tight text-center ">
        Porównanie Pakietów <br />
        <span className="pl-2 text-ocean-green-400">Eksploatacyjnych</span>
      </h2>
      <ListComponent />
      </div>
    </section>
  );
}

export default List