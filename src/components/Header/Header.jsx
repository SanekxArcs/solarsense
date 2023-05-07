import Logo from "../../assets/logo-solar-sense.svg";

function Header() {
  const iHover = `transition-all hover:text-primary-mint`

  return (
    <header className="hidden shadow-md bg-primary-dark text-primary-mint-white lg:block" >
      {/* TIME AND LINKS */}
      <div className=" lg:flex justify-between items-center max-w-[1170px] h-5 mx-auto text-xs hidden px-4">
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
      </div>
      {/* HEADER CONTENT  */}
      <nav className="flex items-center h-20 bg-primary-mint-white text-primary-dark px-4">
        <ul className="flex justify-between w-[1170px] mx-auto">
          <li>
            <a
            className="transition-all duration-300 hover:scale-110"
            href="http://solarsense.pl"
          >
            <img className="h-10" src={Logo} alt="logo solar sense" />
          </a>
          </li>
          <li>
            <div className="hidden font-bold md:flex md:pl-5 md:gap-2 lg:gap-5 md:text-md lg:text-xl">
            <a
              className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow "
              href="tel:+48733897120"
            >
              <i className="p-3 mr-2 transition-all border rounded-sm fa-solid fa-phone text-primary-dark bg-primary-mint-white hover:bg-primary-mint"></i>
              +48 733 897 120
            </a>

            <a
              className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow"
              href="mailto:buiro@solarsense.com"
            >
              <i className="p-3 mr-2 transition-all border rounded-sm fa-solid fa-at text-primary-dark bg-primary-mint-white hover:bg-primary-mint"></i>
              biuro@solarsense.pl
            </a>
          </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
