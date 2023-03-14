const Etapy = () => {
  return (
    <div id="etapy" className="relative bg-cadet-space py-14 text-mint-cream">
      <div className="max-w-[1170px] mx-auto">
        <section className="text-center ">
          <h2 className="pb-10 text-6xl font-bold uppercase ">Etapy</h2>
          <div className="grid items-stretch gap-6 p-5 md:grid-cols-3 place-content-center lg:gap-x-6">
            <div className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space ">
              <i class="fa-solid fa-chalkboard-user text-5xl pb-2"></i>
              <h5 className="pb-2 text-lg font-medium">Contact</h5>
              <p className="text-sm">
                Skontaktuj się z nami telefonicznie, mailowo albo wypełnij
                formularz kontaktowy na naszej stronie
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                1
              </span>
              <i class="fa-solid fa-angle-right absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-6xl text-mint-cream hidden md:block"></i>
              <i class="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-mint-cream md:hidden"></i>
            </div>

            <div className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space">
              <i class="fa-solid fa-file-signature text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Meet</h5>
              <p className="text-sm">Bezpłatny audyt</p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                2
              </span>
              <i class="fa-solid fa-angle-right absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-6xl text-mint-cream hidden md:block"></i>
              <i class="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-mint-cream md:hidden"></i>
            </div>

            <div className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space">
              <i class="fa-solid fa-file-signature text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Audyt</h5>
              <p className="text-sm">Bezpłatny audyt</p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                3
              </span>
              <i class="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-mint-cream"></i>
            </div>

            <div className="relative p-10 transition-all duration-500 rounded-sm lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space">
              <i class="fa-regular fa-handshake text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Podpisanie umowy</h5>
              <p className="text-sm">
                Przygotowanie materiałów. Sprzęt na montaż wysyłamy kurierem
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                4
              </span>
              <i class="fa-solid fa-angle-left absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl text-mint-cream  hidden md:block"></i>
              <i class="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-mint-cream md:hidden"></i>
            </div>

            <div className="relative p-10 transition-all duration-500 rounded-sm md:col-start-2 md:row-start-2 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space">
              <i class="fa-solid fa-screwdriver-wrench text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Montaż</h5>
              <p className="text-sm">
                Po wcześniejszym ustaleniu terminu montażu zbieramy się do
                pracy. Zajmuję nam to od 1 do 3 dni.
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                5
              </span>
              <i class="fa-solid fa-angle-left absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl text-mint-cream hidden md:block"></i>
              <i class="fa-solid fa-angle-down absolute left-1/2  bottom-0 translate-y-1/2 -translate-x-1/2 text-6xl text-mint-cream md:hidden"></i>
            </div>

            <div className="relative p-10 transition-all duration-500 rounded-sm md:col-start-1 md:row-start-2 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space">
              <i class="fa-solid fa-handshake-simple text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Odebranie</h5>
              <p className="text-sm">
                Odbiór instalacji następuję po montażu i niezbędnych pomiarach,
                które znajdziesz na protokole odbioru usługi
              </p>
              <span className="absolute text-6xl font-black opacity-50 top-1 left-3">
                6
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Etapy;
