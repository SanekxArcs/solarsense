import jinko from "./../../assets/logos/1200px-Jinko_Solar_logo.svg.webp";
import trina from "./../../assets/logos/2560px-Trina_Solar_logo.svg.webp";
import fronius from "./../../assets/logos/fronius.webp";
import sofar from "./../../assets/logos/sofar-solar.webp";
import longosolar from "./../../assets/logos/Longi-Solar-Logo.webp";
import santader from "./../../assets/logos/SolarEdge_logo.svg";
import solaredge from "./../../assets/logos/Banco_Santander_Logotipo.svg";
import huawei from "./../../assets/logos/logo-v1.svg";
import { motion } from "framer-motion";

const Partners = () => {
  const data = [
    jinko,
    santader,
    solaredge,
    huawei,
    trina,
    sofar,
    fronius,
    longosolar,
  ];

  const styleLogo = "w-32 transition-all img-fluid grayscale hover:grayscale-0";
  return (
    <>
      <section className="mt-10 text-center text-gray-800">
        <div className="grid items-center grid-cols-2 gap-6 px-6 lg:grid-cols-8">
          {data.map((e, index) => {
            return (
              <div key={index} className="mx-auto">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  src={e}
                  className={styleLogo}
                  alt="Brand - logo"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Partners;
