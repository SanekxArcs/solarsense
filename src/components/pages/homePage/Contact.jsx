import { useState } from "react";
import topImg from "../../../assets/wave-haikei.svg";

function Contact({textToMessage, setTextToMessage}) {
  const [klientName, setKlientName] = useState()
  const [klientLastname, setKlientLastname] = useState()
  const submitSubjecktName = 'Contact od klienta! ' + klientLastname  + " " + klientName;
  console.log(submitSubjecktName);

  return (
    <div id="contact" className="relative px-3 py-32">
      <h2 className="pb-10 text-5xl font-bold text-center uppercase md:text-6xl text-cadet-space">
        Kontakt
      </h2>
      <div className="max-w-[1170px] p-6 rounded-sm shadow-lg  mx-auto bg-cadet-space  text-mint-cream">
        <form
          action="https://formsubmit.co/d6c7e0c47156a06e7321617dac55cdac"
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid grid-cols-1 gap-5 lg:grid-rows-3 lg:grid-cols-4"
        >
          <input type="hidden" name="_template" value="table"></input>
          <input
            type="hidden"
            name="_next"
            value="https://solarsense.pl/thanks"
          ></input>
          <input type="text" name="_honey" className="hidden" />
          <input
            type="hidden"
            name="_subject"
            value={submitSubjecktName}
          ></input>
          <input type="hidden" name="_captcha" value="false" />
          <div className="lg:col-span-2 lg:row-span-2">
            <div
              className="relative mb-5 text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlFor="Name">
                Imię
              </label>
              <input
              onChange={(e) => {setKlientName(e.target.value)}}
                type="text"
                className=" bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-cadet-space  peer-focus:text-cadet-space "
                id="Name"
                name="Imię"
                placeholder="Imię"
                value={klientName}
              />
            </div>
            <div
              className="relative mb-5 text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlFor="Lastname">
                Nazwisko
              </label>
              <input
              onChange={(e) => {setKlientLastname(e.target.value)}}
                type="text"
                className="bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-cadet-space  peer-focus:text-cadet-space "
                id="Lastname"
                name="Nazwisko"
                placeholder="Nazwisko"
                value={klientLastname}
              />
            </div>

            <div
              className="relative mb-6 text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlFor="email">
                Adres e-mail
              </label>
              <input
                type="email"
                className={
                  "bg-mint-cream  peer block min-h-[auto] w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-cadet-space  peer-focus:text-cadet-space"
                }
                id="email"
                name="E-mail"
                placeholder="E-mail"
              />
            </div>
            <div
              className="relative text-cadet-space"
            >
              <label className=" text-mint-cream" htmlFor="tel">
                Telefon <span className="text-red-500 ">*</span>
              </label>
              <input
                type="tel"
                className="bg-mint-cream  peer block min-h-[auto] w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-cadet-space  peer-focus:text-cadet-space"
                id="tel"
                name="Telefon"
                placeholder="Telefon"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between lg:col-span-2 lg:row-span-1">
            <div
              className="relative text-cadet-space "
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlFor="typ">
                Typ instalacji
              </label>
              <select
                className="bg-mint-cream  peer block min-h-[auto] w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-cadet-space  peer-focus:text-cadet-space"
                name="Typ"
                id="typ"
              >
                <option value="Wybierz">--Wybierz--</option>
                <option value="Na dachu">Na dachu</option>
                <option value="Na gruncie">Na gruncie</option>
                <option value="Fotowoltaika + magazyn Energii">Fotowoltaika + magazyn Energii</option>
                <option value="Audyt">Audyt</option>
              </select>
              {/* <input
                type="text"
                className="bg-mint-cream  peer block min-h-[auto] w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-cadet-space  peer-focus:text-cadet-space"
                id="typ"
                placeholder="Typ"
              /> */}
            </div>
            <div
              className="relative text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlFor="tel">
                Twój rachunek za miesiąc
                <span className="text-red-500 ">*</span>
              </label>
              To jej.
              <input
                type="number"
                className="bg-mint-cream  peer block min-h-[auto] w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-cadet-space  peer-focus:text-cadet-space"
                id="rachunek"
                name="Bill"
                placeholder="Rachunek"
              />
            </div>
          </div>
          <div
            className="relative mb-6 lg:col-span-2 lg:row-span-1 text-cadet-space"
            data-te-input-wrapper-init
          >
            <label className=" text-mint-cream" htmlFor="Wiadomość">
              Wiadomość
            </label>
            <textarea onChange={(e) => {setTextToMessage(e.target.value)}}
              className="peer bg-mint-cream block h-full w-full rounded-sm border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear   text-cadet-space"
              id="Wiadomość"
              name="Message"
              value={textToMessage}
              rows="3"
              placeholder="Wiadomość"
            ></textarea>
          </div>
          <div className="flex flex-col justify-around lg:col-span-4">
            <div className="flex flex-wrap items-start justify-start pl-6">
              <input
                className="relative float-left mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary  checked:border-primary checked:bg-primary  checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                type="checkbox"
                name="Checkbox"
                value="Wyrażam zgodę na przetwarzanie przez Solar Sense danych
                personalnych w formularzu kontaktowym w celu wykonania i
                przesłania oferty."
                id="Check1"
                required="true"
              />
              <label
                className="inline-block pb-5 pl-2 text-sm hover:cursor-pointer"
                htmlFor="Check1"
              >
                Wyrażam zgodę na przetwarzanie przez Solar Sense danych
                personalnych w formularzu kontaktowym w celu wykonania i
                przesłania oferty.
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-sm bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight  text-primary-dark shadow-md transition duration-150 ease-in-out hover:bg-primary-mint hover:shadow-lg focus:bg-primary-mint focus:shadow-lg focus:outline-none focus:ring-2 active:bg-primary-mint  active:shadow-lg bg-primary-mint-lighter1 "
            >
              Wyślij
            </button>
          </div>
        </form>
      </div>

      <img
        className="absolute top-0 left-0 right-0 w-full -z-40"
        src={topImg}
        alt=""
      />
      {/* <img
        className="absolute bottom-0 left-0 right-0 w-full -z-50"
        src={bottomImg}
        alt=""
      /> */}
    </div>
  );
}

export default Contact;
