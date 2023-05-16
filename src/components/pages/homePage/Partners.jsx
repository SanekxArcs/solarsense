import jinko from '../../../assets/logos/1200px-Jinko_Solar_logo.svg.webp'
import trina from '../../../assets/logos/2560px-Trina_Solar_logo.svg.webp'
import fronius from '../../../assets/logos/fronius.webp'
import sofar from '../../../assets/logos/sofar-solar.webp'
import longosolar from '../../../assets/logos/Longi-Solar-Logo.webp'
import santader from '../../../assets/logos/SolarEdge_logo.svg'
import solaredge from '../../../assets/logos/Banco_Santander_Logotipo.svg'
import huawei from '../../../assets/logos/logo-v1.svg'

const Partners = () => {
  const data = [jinko, santader, solaredge, huawei, trina, sofar, fronius, longosolar];

  const styleLogo = "w-32 transition-all img-fluid grayscale hover:grayscale-0";
  return (
    <>
      <section className="mt-10 text-center text-gray-800">
        <div className="grid gap-6 px-6 grid-cols-2 lg:grid-cols-8 items-center">
          {data.map((e) => {
            return (
              <div className="mx-auto">
            <img
              src={e}
              className={styleLogo}
              alt="Brand - logo"
            />
          </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Partners;
