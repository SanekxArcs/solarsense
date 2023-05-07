import jinko from '../../../assets/logos/1200px-Jinko_Solar_logo.svg.webp'
import trina from '../../../assets/logos/2560px-Trina_Solar_logo.svg.webp'
import fronius from '../../../assets/logos/fronius.webp'
import sofar from '../../../assets/logos/sofar-solar.webp'
import longosolar from '../../../assets/logos/Longi-Solar-Logo.webp'
import sma from '../../../assets/logos/Logo_SMA.svg-2-1024x673.webp'
import santader from '../../../assets/logos/SolarEdge_logo.svg'
import solaredge from '../../../assets/logos/Banco_Santander_Logotipo.svg'
import huawei from '../../../assets/logos/logo-v1.svg'

const Partners = () => {
  const styleLogo = "w-32 transition-all img-fluid grayscale hover:grayscale-0";
  return (
    <>
      <section className="mt-10 text-center text-gray-800">
        {/* <h2 className=" text-3xl font-bold">
          Trusted by 2,000,000+ users
        </h2> */}

        <div className="grid gap-6 px-6 grid-cols-2 lg:grid-cols-8 items-center">
          <div className="mx-auto">
            <img
              src={jinko}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>
          <div className="mx-auto">
            <img
              src={santader}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>
          <div className="mx-auto">
            <img
              src={solaredge}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>
          <div className="mx-auto">
            <img
              src={huawei}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>

          <div className="mx-auto">
            <img
              src={trina}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>

          <div className="mx-auto">
            <img
              src={fronius}
              className={styleLogo}
              alt="Sony - logo"
            />
          </div>

          <div className="mx-auto">
            <img
              src={sofar}
              className={styleLogo}
              alt="Sony - logo"
              
            />
          </div>

          <div className="mx-auto">
            <img
          src={longosolar}
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
