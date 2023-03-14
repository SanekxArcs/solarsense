import topImg from "../resourses/wave-haikei.svg";
import bottomImg from "../resourses/wave-haikei (1).svg";

function Galeria() {
  return (
    <div id="galeria" class="relative">
      <section class="overflow-hidden text-neutral-700 max-w-[1170px] py-24 px-6 mx-auto ">
        <h2 className="py-10 text-6xl font-bold text-center uppercase text-cadet-space">
          wykonane montaże
        </h2>
        <div class="w-[1170px] mx-auto px-5 py-2 lg:px-32 ">
          <div class="-m-1 flex flex-wrap md:-m-2 py-5">
            <div class="flex w-1/2 flex-wrap ">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-sm object-cover object-center hover:scale-110 transition-all duration-300 hover:rounded-md"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        className="absolute top-0 left-0 right-0 w-full -z-40"
        src={topImg}
        alt=""
      />
      <img
        className="absolute bottom-0 left-0 right-0 w-full -z-50"
        src={bottomImg}
        alt=""
      />
    </div>
  );
}

export default Galeria;
