import HeroImg from "../resourses/Hero.webp";
import BorderImg from "../resourses/slider-dash.png";
import BorderImgWhite from "../resourses/wave-haikei-white.svg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen transition-all duration-300 bg-center bg-no-repeat bg-cover -z-50"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="z-10 grid w-full h-screen transition-all duration-500 place-content-center lg:py-32 backdrop-blur-sm hover:backdrop-blur-none bg-rich-black bg-opacity-40 animate-text-focus-in">
        <div className="relative flex flex-col items-center justify-center gap-12 mx-auto max-h-102 max-w-[900px] text-center text-mint-cream px-5 py-10">
          <h1 className="hidden text-3xl">Solar Sense</h1>
          <p className="text-xl font-bold lg:text-6xl">
            CLEAN, SAFE, RENEWABLE.{" "}
          </p>
          <p className="text-sm lg:text-lg ">
            Nulla eget ipsum id est accumsan pellentesque nec et odio. Duis sit
            amet convallis sem, tincidunt feugiat lorem. Nunc porttitor arcu ac
            dui aliquam efficitur.{" "}
          </p>
          <button className="px-8 py-4 text-xl font-bold transition-all duration-300 rounded-sm bg-primary-mint text-mint-cream hover:scale-125 hover:bg-cadet-space hover:shadow-md ">
            Wycena
          </button>

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
      </div>
      <img
        className="absolute bottom-0 left-0 right-0 z-0 w-full"
        src={BorderImgWhite}
        alt=""
      />
    </section>
  );
}

export default Hero;
