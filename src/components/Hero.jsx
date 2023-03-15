import HeroImg from "../resourses/photo_2023-03-15_11-34-12.webp";
import BorderImg from "../resourses/slider-dash.png";
import BorderImgWhite from "../resourses/wave-haikei-white.svg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen transition-all duration-300 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className=" grid w-full h-screen transition-all duration-500 place-content-center lg:py-32 backdrop-blur-sm hover:backdrop-blur-none bg-rich-black bg-opacity-40 animate-text-focus-in">
        <div className="relative flex flex-col items-center justify-center gap-12 mx-auto max-h-144 max-w-[900px] text-center text-mint-cream px-5 py-10">
          <h1 className="hidden text-3xl font-black uppercase md:block">
            <span className=" text-cadet-space">Solar </span>{" "}
            <span className=" text-primary-mint">Sense</span>
          </h1>
          <p className="text-xl font-bold md:text-6xl select-none">
            Z nami zyskasz nie tylko oszczędności, ale także pewność, jakość i
            niezawodność
          </p>
          <p className="text-sm md:text-lg select-none">
            Nasza firma specjalizuje się w sprzedaży i montażu instalacji
            fotowoltaicznych. Jesteśmy na rynku już od 5 lat, co świadczy o
            solidnym doświadczeniu w branży.
          </p>
          <a
            className="px-8 py-4 text-xl font-bold transition-all duration-300 rounded-sm bg-primary-mint text-mint-cream hover:scale-125 hover:bg-cadet-space hover:shadow-md "
            href="#contact"
          >
            Wycena
          </a>

          <img
            className="absolute bottom-2 left-2 animate-fadeInUpBig animate-delay-300"
            src={BorderImg}
            alt=""
          />
          <img
            className="absolute -rotate-90 bottom-2 right-2 animate-fadeInUpBig animate-delay-500"
            src={BorderImg}
            alt=""
          />
          <img
            className="absolute rotate-90 top-2 left-2 animate-fadeInUpBig animate-delay-700"
            src={BorderImg}
            alt=""
          />
          <img
            className="absolute rotate-180 top-2 right-2 animate-fadeInUpBig animate-delay-1000"
            src={BorderImg}
            alt=""
          />
        </div>
        <img
          className="absolute bottom-0 left-0 right-0 z-0 w-full"
          src={BorderImgWhite}
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;
