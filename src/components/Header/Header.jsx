import Logo from "../../assets/logo-solar-sense.svg";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="hidden shadow-md bg-port-gore-950  text-port-gore-50 lg:block">
      <motion.div
      initial={{ opacity: 0, y: -20}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}   className=" lg:flex justify-between items-center max-w-[1170px] h-5 mx-auto text-xs hidden px-4">
        <span>
          <i className="pr-2 fa-regular fa-clock"></i>
          Godziny otwarcia: pon. - sob. 8.00 - 18.00
        </span>
        <span className="flex gap-2">
          Bądź na bieżąco:
          <a href="#contact">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#contact">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="tel:+48733897120">
            <i className="fa-solid fa-headset"></i>
          </a>
          <a href="mailto:buiro@solarsense.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </span>
      </motion.div>
      <nav className="flex items-center h-20 bg-port-gore-50 text-port-gore-950  px-4">
        <ul className="flex justify-between w-[1170px] mx-auto">
          <motion.li
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}  >
            <a
              className="transition-all duration-300 hover:scale-110"
              href="http://solarsense.pl"
            >
              <img className="h-10" src={Logo} alt="logo solar sense" />
            </a>
          </motion.li>
          <li>
            <div className="hidden font-bold md:flex md:pl-5 md:gap-2 lg:gap-5 md:text-md lg:text-xl">
              <motion.a
              initial={{ opacity: 0, x: 100}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}  
                className="transition-all  group"
                href="tel:+48733897120"
              >
                <i className="p-3 mr-2 transition-all  rounded-full fa-solid fa-phone text-port-gore-950  bg-port-gore-50 group-hover:bg-port-gore-200"></i>
                <span className=" group-hover:text-port-gore-700 group-hover:-translate-y-1 ">+48 733 897 120</span>
              </motion.a>

              <motion.a
              initial={{ opacity: 0, x: 100}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}  
                className="transition-all group"
                href="mailto:buiro@solarsense.com"
              >
                <i className="p-3 mr-2 transition-all  rounded-full fa-solid fa-at text-port-gore-950  bg-port-gore-50 group-hover:bg-port-gore-200"></i>
                <span className=" group-hover:text-port-gore-700 group-hover:-translate-y-1 ">biuro@solarsense.pl</span> 
              </motion.a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
