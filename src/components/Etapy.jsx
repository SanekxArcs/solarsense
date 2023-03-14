function Etapy() {
  return (
    <div id="etapy" className=" bg-cadet-space py-14 text-mint-cream">
      <div className="container px-5 mx-auto">
        <section className=" text-center">
          <h2 className=" text-6xl font-bold uppercase pb-10">Etapy</h2>
          <div className=" grid items-center md:grid-cols-2 place-content-center lg:grid-cols-6 gap-6 lg:gap-x-6 p-5 ">
            <div className="relative mb-12 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space transition-all duration-500 rounded-sm p-10">
              <i class="fa-solid fa-chalkboard-user text-5xl pb-2"></i>
              <h5 className="text-lg font-medium pb-2">Contact</h5>
              <p className="text-sm">
                Skontaktuj się z nami telefonicznie, mailowo albo wypełnij
                formularz kontaktowy na naszej stronie
              </p>
              <span className=" absolute top-1 left-3 font-black text-6xl opacity-50">
                1
              </span>
            </div>

            <div className="relative mb-12 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space transition-all duration-500 rounded-sm p-10">
              <i class="fa-solid fa-file-signature text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Meet</h5>
              <p className="text-sm">Bezpłatny audyt</p>
              <span className=" absolute top-1 left-3 font-black text-6xl opacity-50">
                2
              </span>
            </div>

            <div className="relative mb-12 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space transition-all duration-500 rounded-sm p-10">
              <i class="fa-solid fa-file-signature text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Audyt</h5>
              <p className="text-sm">Bezpłatny audyt</p>
              <span className=" absolute top-1 left-3 font-black text-6xl opacity-50">
                3
              </span>
            </div>

            <div className="relative mb-12 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space transition-all duration-500 rounded-sm p-10">
              <i class="fa-regular fa-handshake text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Podpisanie umowy</h5>
              <p className="text-sm">
                Przygotowanie materiałów. Sprzęt na montaż wysyłamy kurierem
              </p>
              <span className=" absolute top-1 left-3 font-black text-6xl opacity-50">
                4{" "}
              </span>
            </div>

            <div className="relative mb-12 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space transition-all duration-500 rounded-sm p-10">
              <i class="fa-solid fa-screwdriver-wrench text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Montaż</h5>
              <p className="text-sm">
                Po wcześniejszym ustaleniu terminu montażu zbieramy się do
                pracy. Zajmuję nam to od 1 do 3 dni.
              </p>
              <span className=" absolute top-1 left-3 font-black text-6xl opacity-50">
                5
              </span>
            </div>

            <div className="relative mb-12 lg:mb-0 hover:bg-primary-mint bg-primary-mint bg-opacity-10 hover:text-cadet-space transition-all duration-500 rounded-sm p-10">
              <i class="fa-solid fa-handshake-simple text-5xl pb-2"></i>
              <h5 className="text-lg font-medium">Odebranie</h5>
              <p className="text-sm">
                Odbiór instalacji następuję po montażu i niezbędnych pomiarach,
                które znajdziesz na protokole odbioru usługi
              </p>
              <span className=" absolute top-1 left-3 font-black text-6xl opacity-50">
                6
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Etapy;
