import HeroImg from "../resourses/Hero.webp";
import BorderImg from "../resourses/slider-dash.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-center bg-no-repeat bg-cover transition-all duration-300"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="w-full py-32 backdrop-blur-sm hover:backdrop-blur-none transition-all duration-500 bg-rich-black bg-opacity-40 animate-text-focus-in">
        <div className="relative flex flex-col items-center justify-center gap-12 mx-auto h-102 xl:w-[900px]   text-center text-mint-cream p-5">
          <h1 className="text-3xl ">Solar Sense</h1>
          <p className="text-6xl font-bold">CLEAN, SAFE, RENEWABLE. </p>
          <p className="text-lg ">
            Nulla eget ipsum id est accumsan pellentesque nec et odio. Duis sit
            amet convallis sem, tincidunt feugiat lorem. Nunc porttitor arcu ac
            dui aliquam efficitur.{" "}
          </p>
          <button className="px-8 py-4 text-xl font-bold rounded-sm bg-primary-mint text-mint-cream hover:scale-125  hover:bg-cadet-space  hover:shadow-md transition-all duration-300 ">
            Wycena
          </button>

          <img
            className=" absolute bottom-0 left-0 animate-fadeInLeftBig animate-delay-300"
            src={BorderImg}
            alt=""
          />
          <img
            className=" absolute bottom-0 right-0 -rotate-90  animate-fadeInRightBig animate-delay-500"
            src={BorderImg}
            alt=""
          />
          <img
            className=" absolute top-0 left-0 rotate-90 animate-fadeInLeftBig animate-delay-700"
            src={BorderImg}
            alt=""
          />
          <img
            className=" absolute top-0 right-0 rotate-180  animate-fadeInRightBig animate-delay-1000"
            src={BorderImg}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;
