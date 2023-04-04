import HeroImg from "../../../resourses/hero.webp";
import BorderImg from "../../../resourses/slider-dash.svg";
import BorderImgWhite from "../../../resourses/wave-haikei-white.svg";

function Hero() {
  return (
    <section
      id="home"
      className="relative transition-all duration-300 bg-center bg-no-repeat bg-cover xl:min-h-[100%-10rem] min-h-144"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="grid w-full min-h-screen transition-all duration-500 place-content-center lg:py-32 md:backdrop-blur-sm hover:backdrop-blur-none bg-cadet-space bg-opacity-40 ">
        <div className="relative flex flex-col items-center justify-center gap-12 mx-auto max-h-102 max-w-[1170px] text-center text-mint-cream px-5 py-10">
          <h1 className="hidden text-3xl font-black uppercase md:block animate-text-focus-in">
            <span className=" text-cadet-space">Solar </span>{" "}
            <span className=" text-primary-mint">Sense</span>
          </h1>
          <p className="text-2xl font-bold select-none md:text-6xl animate-text-focus-in">
            Z nami zyskasz nie tylko oszczędności, ale także pewność, jakość i
            niezawodność
          </p>
          <p className="text-sm select-none md:text-lg animate-text-focus-in">
            Nasza firma specjalizuje się w sprzedaży i montażu instalacji
            fotowoltaicznych. Jesteśmy na rynku już od 5 lat, co świadczy o
            solidnym doświadczeniu w branży.
          </p>
          <a
            className="z-40 px-8 py-4 text-xl font-bold transition-all duration-300 rounded-sm shadow bg-primary-mint text-mint-cream hover:scale-125 hover:bg-cadet-space hover:shadow-md "
            href="#contact"
          >
            Wycena
          </a>

          <img
            className="absolute bottom-2 left-2 animate-fadeInUpBig animate-delay-500"
            src={BorderImg}
            alt="design image1"
          />
          <img
            className="absolute -rotate-90 bottom-2 right-2 animate-fadeInUpBig animate-delay-700"
            src={BorderImg}
            alt="design image2"
          />
          <img
            className="absolute rotate-90 top-2 left-2 animate-fadeInUpBig animate-delay-1000"
            src={BorderImg}
            alt="design image3"
          />
          <img
            className="absolute rotate-180 top-2 right-2 animate-fadeInUpBig animate-delay-2"
            src={BorderImg}
            alt="design image4"
          />
        </div>
        <img
          className="absolute bottom-0 left-0 right-0 z-0 w-full max-h-1/2"
          src={BorderImgWhite}
          alt="design image5"
        />
      </div>
    </section>
  );
}

export default Hero;
