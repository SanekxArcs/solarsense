import WhyWe from "./WhyWe";
import BorderImg from "../../resourses/slider-dash-primary-mint.png";

function DlaCzego() {
  return (
    <div className="w-[1170px] mx-auto py-32">
      <section className="text-gray-800">
        <div className="relative grid grid-cols-3 items-center">
          <div className="relative w-full mb-6 grow-0 shrink-0 basis-auto  md:mb-0 p-10">
            <p className="mb-6 font-bold uppercase text-primary-mint">
              WE OFFER DIFFEREN SERVICES
            </p>
            <h2 className="mb-6 text-5xl font-bold">WHY CHOOSE US</h2>

            <p className="mb-12 text-gray-500">
              Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
              iaculis malesuada. Aenean gravida magna orci, non efficitur est
              porta id. Donec magna diam.
            </p>
          </div>
          {/* <img
            className=" absolute bottom-0 left-0 animate-fadeInLeftBig animate-delay-300"
            src={BorderImg}
            alt=""
          /> */}
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
          {/* <img
            className=" absolute top-0 right-0 rotate-180  animate-fadeInRightBig animate-delay-1000"
            src={BorderImg}
            alt=""
          /> */}
          <WhyWe />
        </div>
      </section>
    </div>
  );
}

export default DlaCzego;
