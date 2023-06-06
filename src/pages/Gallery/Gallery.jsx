import React from 'react'
import Galeria from './Galeria'
import TopImg from '../../service/com for style/TopImg';

const Gallery = () => {
  return (
    <div>
      <section className="py-24 text-center select-none text-port-gore-50 bg-port-gore-950">
        <div className="flex justify-center">
          <div className="max-w-[1000px]">
            <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Nasza <br />
              <span className=" text-ocean-green-300">Galeria</span>
            </h2>
            <p className="text-lg text-port-gore-200">
            </p>
          </div>
        </div>
      </section>
      <TopImg/>
      <Galeria />
    </div>
  );
}

export default Gallery