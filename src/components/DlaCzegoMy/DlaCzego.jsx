import WhyWe from "./WhyWe";
import Borderimage from "../../resourses/slider-dash-primary-mint.png";
import bottomimage from "../../resourses/wave-haikei (1).svg";

function DlaCzego() {
  return (
    <div id="dlaChegoMy" className="relative py-5 select-none md:pt-32 pb-44">
      <section className="xl:w-[1170px] mx-auto">
        <div className="relative grid items-center grid-cols-1 ld:grid-cols-3">
          <div className="relative w-full p-10 mb-6 grow-0 shrink-0 basis-auto md:mb-0">
            <p className="mb-6 text-sm font-bold uppercase text-primary-mint lg:text-base">
              OFERUJEMY RÓŻNE USŁUGI
            </p>
            <h2 className="mb-6 text-3xl font-bold lg:text-5xl">
              Dlaczego my?
            </h2>

            <p className="text-sm lg:mb-12"></p>
          </div>
          {/* <image
            className="absolute bottom-0 left-0 animate-fadeInLeftBig animate-delay-300"
            src={Borderimage}
            alt=""
          /> */}
          <image
          loading="lazy"
            className="absolute -rotate-90 bottom-2 right-2 animate-fadeInUPBig animate-delay-500"
            src={Borderimage}
            alt="design1"
          />
          <image
          loading="lazy"
            className="absolute rotate-90 top-2 left-2 animate-fadeInUpBig animate-delay-700"
            src={Borderimage}
            alt="design2"
          />
          {/* <image
            className="absolute top-0 right-0 rotate-180 animate-fadeInRightBig animate-delay-1000"
            src={Borderimage}
            alt=""
          /> */}
          <WhyWe />
        </div>
      </section>
      <image
      loading="lazy"
        className="absolute bottom-0 left-0 right-0 w-full -z-50"
        src={bottomimage}
        alt="design3"
      />
    </div>
  );
}

export default DlaCzego;
