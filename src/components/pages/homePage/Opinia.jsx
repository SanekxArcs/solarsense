import openie1 from "../../../assets/20210715_220221_156.jpg";
import openie2 from "../../../assets/photo_2023-03-14_19-23-13.jpg";
import openie3 from "../../../assets/photo_2023-03-14_19-23-15.jpg";
import svgRew from "../../../assets/wave-haikei (4).svg";

const opiniaData = [
  {
    name: "Piotr Szymański - Powstańców 8, 48-320 Sidzina",
    review:
      "Firma fotowoltaiczna, którą wybrałem, zrobiła świetną robotę z montażem paneli słonecznych. Jestem bardzo zadowolony z ich usług, a ich profesjonalizm i doświadczenie są godne pochwały.",
    photo: openie1,
    altText: "Zdjęcie fotowoltaiczne",
  },
  {
    name: "Janusz Kowalski",
    review:
      "Nigdy wcześniej nie miałem do czynienia z firmą fotowoltaiczną, ale ta firma wykonała montaż paneli słonecznych na gruncie i jestem pod wrażeniem ich pracy. Od pierwszego kontaktu byli bardzo pomocni i kompetentni, a wykonana praca była szybka i dokładna.",
    photo: openie2,
    altText: "Zdjęcie fotowoltaiczne",
  },
  {
    name: "Jan Nowakowski - (revolvefitness.pl)",
    review:
      "Polecam tę firmę fotowoltaiczną każdemu, kto potrzebuje montażu paneli słonecznych. Ich praca była dokładna, zorganizowana i wykonana z pasją. Nie tylko byli profesjonalni, ale również zadbali o każdy szczegół, aby zapewnić, że ich klient jest w pełni zadowolony.",
    photo: openie3,
    altText: "Zdjęcie fotowoltaiczne",
  },
];

function Opinia() {
  return (
    <div id="opinia" className="py-32 select-none bg-cadet-space">
      <section className="text-center lg:text-left xl:w-[1170px] mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center uppercase md:text-6xl text-mint-cream">
          Nasze najlepsze recenzje
        </h2>
        <div className="grid items-stretch px-2 place-content-end lg:grid-cols-3 gap-x-6 lg:gap-x-12">
          {opiniaData.map((item) => {
            return (
              <div
                className="grid items-stretch mb-6 transition-all duration-300 rounded-sm shadow-lg lg:mb-0 bg-mint-cream hover:-translate-y-2 hover:shadow-md"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                    src={item.photo}
                    className="w-full h-full bg-cover rounded-t-sm "
                    alt={item.altText}
                  />
                  <a href="#!">
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"></div>
                  </a>
                  <img
                    className="absolute bottom-0 left-0"
                    src={svgRew}
                    alt="svg"
                  />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <h5 className="mb-3 text-lg font-bold">{item.name}</h5>
                  <p className="pb-2 mb-4">{item.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Opinia;