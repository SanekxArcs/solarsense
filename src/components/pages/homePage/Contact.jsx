import { useState } from "react";
import topImg from "../../../assets/wave-haikei.svg";

function Contact({ textToMessage, setTextToMessage }) {
  const [klientName, setKlientName] = useState();
  const [klientLastname, setKlientLastname] = useState();
  const submitSubjecktName =
    "Contact od klienta! " + klientLastname + " " + klientName;

  return (
    <div id="contact" className="relative px-3 py-32">
      <h2 className="pb-10 text-5xl font-bold text-center uppercase md:text-6xl text-cadet-space">
        Kontakt
      </h2>
      <div className="max-w-[1170px] p-7 rounded-sm shadow-lg  mx-auto bg-primary-mint/30 ring ring-primary-mint  shadow-primary-mint/50">
        <form
          action="https://formsubmit.co/d6c7e0c47156a06e7321617dac55cdac"
          name="contact"
          method="POST"
          data-netlify="true"
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
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-7">
            <div className="flex flex-col  gap-7">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  type="text"
                  id="Name"
                  name="Imię"
                  value={klientName}
                  onChange={(e) => {
                    setKlientName(e.target.value);
                  }}
                  class="peer h-full w-full rounded-[2px] border  border-primary-mint border-t-transparent bg-primary-mint-white px-3 py-2.5 font-sans text-sm font-normal text-primary-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-primary-dark"
                  placeholder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-dark peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary-dark">
                  Imię
                </label>
              </div>
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  type="text"
                  id="Lastname"
                  name="Nazwisko"
                  value={klientLastname}
                  onChange={(e) => {
                    setKlientLastname(e.target.value);
                  }}
                  class="peer h-full w-full rounded-[2px] border  border-primary-mint border-t-transparent bg-primary-mint-white px-3 py-2.5 font-sans text-sm font-normal text-primary-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-primary-dark"
                  placeholder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-dark peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary-dark">
                  Nazwisko
                </label>
              </div>
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  type="email"
                  id="email"
                  name="E-mail"
                  class="peer h-full w-full rounded-[2px] border  border-primary-mint border-t-transparent bg-primary-mint-white px-3 py-2.5 font-sans text-sm font-normal text-primary-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-primary-dark"
                  placeholder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-dark peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary-dark">
                  Adres e-mail
                </label>
              </div>
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  id="tel"
                  name="Telefon"
                  type="tel"
                  class="peer h-full w-full rounded-[2px] border  border-primary-mint border-t-transparent bg-primary-mint-white px-3 py-2.5 font-sans text-sm font-normal text-primary-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-primary-dark"
                  placeholder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-dark peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary-dark">
                  Telefon <span className="text-red-500 ">*</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-7 ">
              <div class="relative h-10 w-full min-w-[200px]">
                <select
                  name="Typ"
                  id="typ"
                  class="peer h-full w-full rounded-[2px] border  border-primary-mint border-t-transparent bg-primary-mint-white px-3 py-2.5 font-sans text-sm font-normal text-primary-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint empty:!bg-red-500 focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-primary-mint/50"
                >
                  <option value="Wybierz">--Wybierz--</option>
                  <option value="Na dachu">Na dachu</option>
                  <option value="Na gruncie">Na gruncie</option>
                  <option value="Fotowoltaika + magazyn Energii">
                    Fotowoltaika + magazyn Energii
                  </option>
                  <option value="Audyt">Audyt</option>
                </select>
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-dark peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary-dark">
                  Typ instalacji
                </label>
              </div>
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  type="number"
                  id="rachunek"
                  name="Bill"
                  class="peer h-full w-full rounded-[2px] border  border-primary-mint border-t-transparent bg-primary-mint-white px-3 py-2.5 font-sans text-sm font-normal text-primary-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-primary-dark/10"
                  placeholder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-dark peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary-dark">
                  Twój rachunek za miesiąc
                  <span className="text-red-500 ">*</span>
                </label>
              </div>
              <div class="relative w-full min-w-[200px]">
                <textarea
                  name="Message"
                  value={textToMessage}
                  rows="3"
                  onChange={(e) => {
                    setTextToMessage(e.target.value);
                  }}
                  class="peer h-full min-h-[100px] w-full resize-none rounded-[2px] border border-primary-mint border-t-transparent bg-primary-mint-white px-3 py-2.5 font-sans text-sm font-normal text-primary-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-mint placeholder-shown:border-t-primary-mint focus:border-2 focus:border-primary-mint focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-primary-dark"
                  placeholder=" "
                ></textarea>
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-primary-mint before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r after:border-primary-mint after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-dark peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-mint peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary-mint peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary-mint peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary-dark">
                  Wiadomość
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around gap-7">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-[2px] p-3"
                for="checkbox"
              >
                <input
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-primary-dark transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-[2px] before:bg-primary-dark before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
                  id="checkbox"
                  name="Checkbox"
                  value="Wyrażam zgodę na przetwarzanie przez Solar Sense danych
                personalnych w formularzu kontaktowym w celu wykonania i
                przesłania oferty."
                  required="true"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </label>
              <p className="text-xs  md:text-sm lg:text-base">
                Wyrażam zgodę na przetwarzanie przez Solar Sense danych
                personalnych w formularzu kontaktowym w celu wykonania i
                przesłania oferty.
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium leading-tight uppercase transition duration-150 ease-in-out rounded-sm shadow-md bg-primary text-primary-dark hover:bg-primary-mint hover:shadow-lg hover:shadow-primary-mint/50 focus:bg-primary-mint focus:shadow-lg focus:outline-none focus:ring-2 active:bg-primary-mint active:shadow-lg bg-primary-mint-lighter1"
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
    </div>
  );
}

export default Contact;
