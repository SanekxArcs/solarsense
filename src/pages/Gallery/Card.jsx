import mocMobile from './../../assets/Gallery/moc-mobile.svg'
import modulFot from './../../assets/Gallery/6modulow.svg'
import falownik from './../../assets/Gallery/icon-1.svg'
import roof from './../../assets/Gallery/fotowoltaika-big.svg'
import local from './../../assets/Gallery/home_checklist.svg'

const Card = ({ pic, moc, imie, opinie, modul, invert, typ, loc }) => {
  return (
    <div
      className={` max-w-sm flex flex-col shadow-lg gap-2 m-2 p-5 bg-gradient-to-br from-ocean-green-50 to-ocean-green-200 rounded-md ring-ocean-green-400 ring-2 `}
    >
      <img
        className="rounded-md shadow-lg max-w-92 aspect-video"
        src={pic}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-2 rounded-md ">
          <img className="w-10 h-10" src={mocMobile} alt="icon" />
          <p>
            Łączna moc instalacji:
            <br /> <b>{moc} kWp</b>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-md ">
          <img className="w-10 h-10" src={modulFot} alt="icon" />

          <p>
            Moduł fotowoltaiczny: <br /> <b>{modul}</b>
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-md ">
          <img className="w-10 h-10" src={falownik} alt="icon" />

          <p>
            Falownik: <br /> <b>{invert}</b>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-md ">
          <img className="w-10 h-10" src={roof} alt="icon" />
          <p>
            Typ instalacji: <br /> <b>{typ}</b>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-md ">
          <img className="w-10 h-10" src={local} alt="icon" />
          <p>
            Lokalizacja: <br /> <b>{loc}</b>
          </p>
        </div>
      </div>
      {opinie && (
        <div className="px-4 py-2 rounded-md">
          <p className="pb-3 text-center text-md">
            Opinie od <b>{imie}</b>:
          </p>
          <p className="transition-all duration-300 line-clamp-3 hover:line-clamp-none">
            {opinie}
          </p>
          <p className="pt-5 text-xs text-center text-gray-500">
            <span className="text-red-500">*</span> Imię i opinie wzięto z
            wizytówki Google
          </p>
        </div>
      )}
    </div>
  );
};

export default Card