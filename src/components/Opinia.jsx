import openie1 from "../resourses/20210715_220221_156.jpg";
import openie2 from "../resourses/photo_2023-03-14_19-23-13.jpg";
import openie3 from "../resourses/photo_2023-03-14_19-23-15.jpg";

function Opinia() {
  return (
    <div id="opinia" className="py-32 bg-cadet-space">
      <section className="text-center lg:text-left xl:w-[1170px] mx-auto">
        <h2 className="mb-12 text-6xl font-bold text-center uppercase text-mint-cream">
          Opinia
        </h2>

        <div className="grid items-stretch px-2 place-content-end lg:grid-cols-3 gap-x-6 lg:gap-x-12">
          <div
            className="grid items-stretch mb-6 transition-all duration-300 rounded-sm shadow-lg lg:mb-0 bg-mint-cream hover:-translate-y-2 hover:shadow-md"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <div className="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                src={openie1}
                className="h-full bg-cover rounded-t-sm"
                alt=""
              />
              <a href="#!">
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"></div>
              </a>
              <svg
                className="absolute bottom-0 left-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#F0FAF5"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-between p-6">
              <h5 className="mb-3 text-lg font-bold">Nostalgic waves</h5>
              <p className="pb-2 mb-4">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
              {/* <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-primary-mint font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cadet-space hover:shadow-lg focus:bg-cadet-space focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:text-mint-cream"
              >
                Learn more
              </a> */}
            </div>
          </div>

          <div className="block mb-6 transition-all duration-300 rounded-sm shadow-lg lg:mb-0 bg-mint-cream hover:-translate-y-2">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover "
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src={openie2}
                className="w-full bg-cover rounded-t-sm"
                alt=""
              />
              <a href="#!">
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"></div>
              </a>
              <svg
                className="absolute bottom-0 left-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#F0FAF5"
                  d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-3 text-lg font-bold">Winter wildlife</h5>
              <p className="pb-2 mb-4">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
              </p>
              {/* <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Learn more
              </a> */}
            </div>
          </div>

          <div className="block transition-all duration-300 rounded-sm shadow-lg bg-mint-cream hover:-translate-y-2">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={openie3} className="w-full rounded-t-sm" alt="" />
              <a href="#!">
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"></div>
              </a>
              <svg
                className="absolute bottom-0 left-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#F0FAF5"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-3 text-lg font-bold">Camping travel</h5>
              <p className="pb-2 mb-4">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat.
              </p>
              {/* <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-primary-mint"
              >
                Learn more
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Opinia;
