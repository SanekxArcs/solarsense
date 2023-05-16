import topImg from "../../../assets/wave-haikei.svg";
import bottomImg from "../../../assets/wave-haikei (1).svg";
import pic1 from "../../../assets/gal1.webp";
import pic2 from "../../../assets/gal2.webp";
import pic3 from "../../../assets/ga3.webp";
import pic4 from "../../../assets/gal4.webp";
import pic5 from "../../../assets/gal5.webp";
import pic6 from "../../../assets/gal6.webp";
import svgRew from "../../../assets/wave-haikei (4).svg";

function Galeria() {
  return (
    <div id="galeria" className="relative select-none ">
      <section className="max-w-[1170px] mx-auto lg:py-32 pb-20">
        <h2 className="py-10 text-4xl font-bold text-center uppercase max-h-144 lg:text-6xl text-port-gore-950">
          Wykonane montaże
        </h2>
        <div className="grid grid-cols-2 gap-5 px-4 pb-10 md:grid-cols-3 md:grid-rows-3 max-h-144">
          
          <div className="relative overflow-hidden transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md ">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-sm peer"
              src={pic1}
            />
            <div className="absolute left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 -bottom-1 hover:opacity-80 hover:translate-y-0">
              <img
                loading="lazy"
                className="h-1/2"
                src={svgRew}
                alt="Zdjęcie fotowoltaiczne na dachu Blachodachówka"
              />
              <div className="p-2 bg-ocean-green-50 ">27-200 Starachowice</div>
            </div>
          </div>

          <div className="relative row-span-2 overflow-hidden transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md ">
            <img
              loading="lazy"
              alt="gallery"
              className="block object-cover object-center w-full h-full transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md"
              src={pic2}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img
                src={svgRew}
                alt="Zdjęcie fotowoltaiczne na dachu Dachówka 2"
              />
              <div className="p-2 bg-ocean-green-50 ">55-216 Piskorzów</div>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md ">
            <img
              loading="lazy"
              alt="gallery"
              className="block object-cover object-center w-full h-full transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md"
              src={pic3}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img
                loading="lazy"
                src={svgRew}
                alt="Zdjęcie fotowoltaiczne na dachu Blacha na rąbek"
              />
              <div className="p-2 bg-ocean-green-50 ">01-366 Warszawa</div>
            </div>
          </div>

          <div className="relative row-span-2 overflow-hidden transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md md:row-span-1">
            <img
              loading="lazy"
              alt="gallery"
              className="block object-cover object-center w-full h-full transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md"
              src={pic4}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img
                loading="lazy"
                src={svgRew}
                alt="Zdjęcie fotowoltaiczne na dachu Blachodachówka"
              />
              <div className="p-2 bg-ocean-green-50 ">95-011 Bratoszewice</div>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md md:row-span-2">
            <img
              loading="lazy"
              alt="gallery"
              className="block object-cover object-center w-full h-full transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md"
              src={pic5}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img
                loading="lazy"
                src={svgRew}
                alt="Zdjęcie fotowoltaiczne na dachu Dachówka"
              />
              <div className="p-2 bg-ocean-green-50 ">58-521 Jeżow-Sudecki</div>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md md:col-span-2">
            <img
              loading="lazy"
              alt="gallery"
              className="block object-cover object-center w-full h-full transition-all duration-300 rounded-sm hover:scale-110 hover:rounded-md"
              src={pic6}
            />
            <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 translate-y-10 opacity-0 hover:opacity-80 hover:translate-y-0">
              <img
                loading="lazy"
                src={svgRew}
                alt="Zdjęcie fotowoltaiczne na dachu Blachodachówka 2"
              />
              <div className="p-2 bg-ocean-green-50 ">58-570 Jelenia Góra</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Galeria;
