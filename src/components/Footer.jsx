function Footer() {
  return (
    <>
      <footer className="text-center bg-cadet-space text-mint-cream dark:bg-cadet-space dark:text-neutral-200 lg:text-left">
        <div>
          <div className="mx-6 py-10 text-center md:text-left max-w-[1170px] mx-auto">
            <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <h6 className="pb-5 text-3xl font-black uppercase md:block">
                  <span className=" text-mint-cream">Solar </span>{" "}
                  <span className=" text-primary-mint">Sense</span>
                </h6>
                <p>
                  Z nami zyskasz nie tylko oszczędności, ale także pewność,
                  jakość i niezawodność
                </p>
              </div>
              <div className="">
                <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                  Linki
                </h6>
                <p className="mb-4">
                  <a href="#dlaChegoMy">Dlaczego my?</a>
                </p>
                <p className="mb-4">
                  <a href="#etapy">Etapy współpracy</a>
                </p>
                <p className="mb-4">
                  <a href="#galeria">Galeria</a>
                </p>
                <p>
                  <a href="#opinia">Opinia</a>
                </p>
              </div>

              <div>
                <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                  Kontact
                </h6>
                <p className="flex items-center justify-center mb-4 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  al. Jerzego Waszyngtona 102, <br /> 04-015 Warszawa
                </p>
                <p className="flex items-center justify-center mb-4 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  buiro@solarsense.pl
                </p>
                <p className="flex items-center justify-center mb-4 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a href="tel:+49735145620">+48 735 145 620</a>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a href="tel:+48733897120">+48 733 897 120</a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 text-center bg-rich-black dark:bg-rich-black">
            <span>© 2023 Copyright: </span>
            <a
              className="font-semibold text-neutral-600 dark:text-neutral-400"
              href="https://github.com/SanekxArcs"
            >
              Solar Sense
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
