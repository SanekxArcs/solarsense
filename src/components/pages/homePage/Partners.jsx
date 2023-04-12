import jinko from '../../../assets/logos/1200px-Jinko_Solar_logo.svg.webp'
import trina from '../../../assets/logos/2560px-Trina_Solar_logo.svg.webp'
import fronius from '../../../assets/logos/fronius.webp'
import sofar from '../../../assets/logos/sofar-solar.webp'
import longosolar from '../../../assets/logos/Longi-Solar-Logo.webp'
import sma from '../../../assets/logos/Logo_SMA.svg-2-1024x673.webp'

const Partners = () => {
  const styleLogo = "w-32 transition-all img-fluid grayscale hover:grayscale-0";
  return (
    <>
      <section className="mt-32 text-center text-gray-800">
        {/* <h2 className="mb-12 text-3xl font-bold">
          Trusted by 2,000,000+ users
        </h2> */}

        <div className="grid px-6 md:grid-cols-2 lg:grid-cols-6">
          <div className="mx-auto mb-12 lg:mb-0">
            <img
              src={jinko}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0">
            <img
              src={trina}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0">
            <img
              src={fronius}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0">
            <img
              src={sofar}
              className={styleLogo}
              alt="Sony - logo"
              
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0">
            <img
          src={longosolar}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0">
            <img
              src={sma}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
