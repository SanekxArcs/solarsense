import topImg from "../resourses/wave-haikei.svg";
import bottomImg from "../resourses/wave-haikei (1).svg";
import pic1 from "../resourses/gal1.webp";
import pic2 from "../resourses/gal2.webp";
import pic3 from "../resourses/ga3.webp";
import pic4 from "../resourses/gal4.webp";
import pic5 from "../resourses/gal5.webp";
import pic6 from "../resourses/gal6.webp";
import svgRew from "../resourses/wave-haikei (4).svg";

function Galeria() {
  return (
    <div id="galeria" class="relative select-none">
      <section class="max-w-[1170px] mx-auto lg:py-32">
        <h2 className="py-10 text-4xl font-bold text-center uppercase lg:text-6xl text-cadet-space">
          wykonane montaże
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-5 max-h-144 pb-10">
          <div class="overflow-hidden rounded-sm relative hover:scale-110 transition-all duration-300 hover:rounded-md hover:z-50 ">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center peer"
              src={pic1}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img className="h-1/2" src={svgRew} alt="" />
              <div className="p-2 bg-mint-cream">27-200 Starachowice</div>
            </div>
          </div>

          <div class="overflow-hidden rounded-sm relative hover:scale-110 transition-all duration-300 hover:rounded-md hover:z-50    row-span-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic2}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img src={svgRew} alt="" />
              <div className="p-2 bg-mint-cream">55-216 Piskorzów</div>
            </div>
          </div>

          <div class="overflow-hidden rounded-sm relative hover:scale-110 transition-all duration-300 hover:rounded-md hover:z-50 ">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic3}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img src={svgRew} alt="" />
              <div className="p-2 bg-mint-cream">01-366 Warszawa</div>
            </div>
          </div>

          <div class="overflow-hidden rounded-sm relative hover:scale-110 transition-all duration-300 hover:rounded-md hover:z-50  row-span-2 md:row-span-1">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic4}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img src={svgRew} alt="" />
              <div className="p-2 bg-mint-cream">95-011 Bratoszewice</div>
            </div>
          </div>

          <div class="overflow-hidden rounded-sm relative hover:scale-110 transition-all duration-300 hover:rounded-md hover:z-50  md:row-span-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic5}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img src={svgRew} alt="" />
              <div className="p-2 bg-mint-cream">58-521 Jeżuw-Sudecki,</div>
            </div>
          </div>

          <div class="overflow-hidden rounded-sm relative hover:scale-110 transition-all duration-300 hover:rounded-md hover:z-50  md:col-span-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-sm object-cover object-center  hover:scale-110 transition-all duration-300 hover:rounded-md"
              src={pic6}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img src={svgRew} alt="" />
              <div className="p-2 bg-mint-cream">58-570 Jelenia Góra</div>
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
