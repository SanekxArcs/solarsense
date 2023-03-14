import Logo from "../resourses/Монтажна-область-1.webp";

function Header() {
  return (
    <header className=" shadow-md bg-cadet-space text-mint-cream">
      {/* TIME AND LINKS */}
      <div className=" flex justify-between items-center w-[1170px] h-5 mx-auto text-xs animate-text-focus-in">
        <span>
          <i className="fa-regular fa-clock pr-2"></i>
          Opening Times: Mon - Sat 8.00 - 18.00
        </span>
        <span className="flex gap-2 ">
          Follow Us:
          <a href="http://">
            <i className="fa-brands fa-linkedin hover:text-primary-mint transition-all"></i>
          </a>
          <a href="http://">
            <i className="fa-brands fa-telegram  hover:text-primary-mint transition-all"></i>
          </a>
          <a href="tel:+">
            <i className="fa-solid fa-headset hover:text-primary-mint transition-all"></i>
          </a>
          <a href="mailto:">
            <i className="fa-regular fa-envelope hover:text-primary-mint transition-all"></i>
          </a>
        </span>
      </div>
      {/* HEADER CONTENT  */}
      <nav className="flex items-center justify-between h-32 bg-mint-cream text-rich-black animate-text-focus-in animate-delay-300">
        <div className="flex items-center justify-between w-[1170px] mx-auto">
          <a
            className="hover:scale-110 transition-all duration-300"
            href="http://solarsense.pl"
          >
            <img className="h-10" src={Logo} alt="" />
          </a>
          <div className="flex gap-5 text-xl font-bold">
            <a
              className="hover:text-primary-mint transition-all hover:-translate-y-1 hover:drop-shadow "
              href="tel:+48735145620"
            >
              <i className="fa-solid fa-phone p-3 mr-2 transition-all border rounded-sm bg-cadet-space text-mint-cream hover:bg-primary-mint  "></i>
              +48 735 145 620
            </a>

            <a
              className="hover:text-primary-mint transition-all hover:-translate-y-1 hover:drop-shadow  "
              href="mailto:test@gmail.com"
            >
              <i className="fa-solid fa-at p-3 mr-2 transition-all border rounded-sm bg-cadet-space text-mint-cream hover:bg-primary-mint "></i>
              solar.sense@gmail.com
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
