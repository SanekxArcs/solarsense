import Logo from "../resourses/logo.webp";

function Header() {
  return (
    <header className="hidden shadow-md bg-cadet-space text-mint-cream md:block">
      {/* TIME AND LINKS */}
      <div className=" lg:flex justify-between items-center max-w-[1170px] h-5 mx-auto text-xs animate-text-focus-in hidden">
        <span>
          <i className="pr-2 fa-regular fa-clock"></i>
          Godziny otwarcia: pon. - sob. 8.00 - 18.00
        </span>
        <span className="flex gap-2 ">
          Bądź na bieżąco:
          <a href="#contact">
            <i className="transition-all fa-brands fa-linkedin hover:text-primary-mint"></i>
          </a>
          <a href="#contact">
            <i className="transition-all fa-brands fa-telegram hover:text-primary-mint"></i>
          </a>
          <a href="tel:+48733897120">
            <i className="transition-all fa-solid fa-headset hover:text-primary-mint"></i>
          </a>
          <a href="mailto:buiro@solarsense.com">
            <i className="transition-all fa-regular fa-envelope hover:text-primary-mint"></i>
          </a>
        </span>
      </div>
      {/* HEADER CONTENT  */}
      <nav className="flex items-center justify-between h-20 bg-mint-cream text-rich-black animate-text-focus-in animate-delay-300 ">
        <div className="flex items-center justify-between xl:w-[1170px] mx-auto">
          <a
            className="transition-all duration-300 hover:scale-110"
            href="http://solarsense.pl"
          >
            <img className="h-10" src={Logo} alt="logo solar sense" />
          </a>
          <div className="hidden font-bold md:flex md:pl-5 md:gap-2 lg:gap-5 md:text-md lg:text-xl">
            <a
              className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow "
              href="tel:+48733897120"
            >
              <i className="p-3 mr-2 transition-all border rounded-sm fa-solid fa-phone text-cadet-space bg-mint-cream hover:bg-primary-mint "></i>
              +48 733 897 120
            </a>

            <a
              className="transition-all hover:text-primary-mint hover:-translate-y-1 hover:drop-shadow"
              href="mailto:buiro@solarsense.com"
            >
              <i className="p-3 mr-2 transition-all border rounded-sm fa-solid fa-at text-cadet-space bg-mint-cream hover:bg-primary-mint "></i>
              biuro@solarsense.pl
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
