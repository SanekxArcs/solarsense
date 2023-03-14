import topImg from "../resourses/wave-haikei.svg";
import bottomImg from "../resourses/wave-haikei (1).svg";
import pic1 from "../resourses/gal1.webp";
import pic2 from "../resourses/gal2.webp";
import pic3 from "../resourses/ga3.webp";
import pic4 from "../resourses/gal4.webp";
import pic5 from "../resourses/gal5.webp";
import pic6 from "../resourses/gal6.webp";

function Galeria() {
  return (
    <div id="galeria" class="relative max-h-screen">
      <section class="max-w-[1170px] mx-auto py-32">
        <h2 className="py-10 text-6xl font-bold text-center uppercase text-cadet-space">
          wykonane montaże
        </h2>
        <div class="grid grid-cols-3 grid-rows-3 gap-2 max-h-144 mb-10">
          <div class="overflow-hidden rounded-sm">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center hover:scale-110 transition-all duration-300 hover:rounded-md "
              src={pic1}
            />
            <div></div>
            <span></span>
          </div>

          <div class="overflow-hidden rounded-sm row-span-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic2}
            />
          </div>

          <div class="overflow-hidden rounded-sm">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic3}
            />
          </div>

          <div class="overflow-hidden rounded-sm">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic4}
            />
          </div>

          <div class="overflow-hidden rounded-sm row-span-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic5}
            />
          </div>

          <div class="overflow-hidden rounded-sm col-span-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic6}
            />
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
