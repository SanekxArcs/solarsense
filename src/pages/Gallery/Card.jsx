import mocMobile from './../../assets/Gallery/moc-mobile.svg'
import modulFot from './../../assets/Gallery/6modulow.svg'
import falownik from './../../assets/Gallery/icon-1.svg'
import roof from './../../assets/Gallery/fotowoltaika-big.svg'
import local from './../../assets/Gallery/home_checklist.svg'

const Card = ({ pic, moc, imie, opinie, modul, invert, typ, loc }) => {
  return (
    <>
      <div className="flex flex-col gap-10 p-2 md:p-10 m-2 w-[310px] mx-auto rounded shadow-lg md:w-[750px] lg:w-[1000px] xl:w-[1144] bg-gradient-to-br from-ocean-green-50 to-ocean-green-200 ring-ocean-green-400 ring-2 select-none">
        <div className={`flex flex-col md:flex-row gap-5 w-full`}>
          <img
            className="object-cover rounded shadow-lg max-w-80 max-h-60 md:w-[240px] lg:w-[320px]"
            src={pic}
            alt=""
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 place-content-center">
            <div className="flex items-center gap-3 px-4 py-2 rounded ">
              <img className="w-10 h-10" src={mocMobile} alt="icon" />
              <p>
                Łączna moc instalacji:
                <br /> <b>{moc} kWp</b>{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded ">
              <img className="w-10 h-10" src={modulFot} alt="icon" />

              <p>
                Moduł fotowoltaiczny: <br /> <b>{modul}</b>
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded ">
              <img className="w-10 h-10" src={falownik} alt="icon" />

              <p>
                Falownik: <br /> <b>{invert}</b>{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded ">
              <img className="w-10 h-10" src={roof} alt="icon" />
              <p>
                Typ instalacji: <br /> <b>{typ}</b>{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded ">
              <img className="w-10 h-10" src={local} alt="icon" />
              <p>
                Lokalizacja: <br /> <b>{loc}</b>
              </p>
            </div>
          </div>
        </div>
        {opinie && (
          <div className="p-5 rounded bg-gradient-to-b from-ocean-green-300 to-transparent group">
            <p className="py-3 text-2xl text-center">
              Opinie od <b>{imie}</b>:
            </p>
            <p className="overflow-hidden transition-all duration-300 max-h-5 group-hover:max-h-96 group-active:max-h-96">
              {opinie}
            </p>
            <p className="pt-5 text-xs text-center text-gray-500">
              <span className="text-red-500">*</span> Imię i opinie wzięto z
              wizytówki Google
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Card