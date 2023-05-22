import { motion } from "framer-motion";
import useLocalStorageState from "../../service/useLocalStorageState";

function Contact({ textToMessage, setTextToMessage }) {
  const [klientName, setKlientName] = useLocalStorageState("klientName", "");
  const [klientLastname, setKlientLastname] = useLocalStorageState(
    "klientLastname",
    ""
  );
  const [mail, setMail] = useLocalStorageState("mail", "");
  const [telefon, setTelefon] = useLocalStorageState("telefon", "");
  const [typ, setTYp] = useLocalStorageState("typ", "");
  const [rachunek, setRachunek] = useLocalStorageState("rachunek", "");

  const submitSubjecktName =
    "Contact od klienta! " + klientLastname + " " + klientName;

  return (
    <div id="contact" className="relative px-3 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="pb-10 text-5xl font-bold text-center uppercase md:text-6xl text-port-gore-950"
      >
        Kontakt
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-[1170px] p-7 rounded-sm shadow-lg  mx-auto bg-gradient-to-br from-ocean-green-50 to-ocean-green-200 shadow-ocean-green-200 ring ring-ocean-green-400 "
      >
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
                  class="peer h-full w-full rounded-[2px] border border-ocean-green-700  border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700  placeholder-shown:border-t-ocean-green-700  focus:border-2 focus:border-ocean-green-700  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-port-gore-950 "
                  placeholder=" "
                />
                <label
                  htmlFor="Name"
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-port-gore-400  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-ocean-green-700  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 "
                >
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
                  class="peer h-full w-full rounded-[2px] border  border-ocean-green-700  border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700  placeholder-shown:border-t-ocean-green-700  focus:border-2 focus:border-ocean-green-700  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-port-gore-950 "
                  placeholder=" "
                />
                <label
                  htmlFor="Lastname"
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-port-gore-400  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-ocean-green-700  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 "
                >
                  Nazwisko
                </label>
              </div>
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  type="email"
                  id="email"
                  name="E-mail"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  class="peer h-full w-full rounded-[2px] border  border-ocean-green-700  border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700  placeholder-shown:border-t-ocean-green-700  focus:border-2 focus:border-ocean-green-700  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-port-gore-950 "
                  placeholder=" "
                  value={mail}
                />
                <label
                  htmlFor="email"
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-port-gore-400  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-ocean-green-700  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 "
                >
                  Adres e-mail
                </label>
              </div>
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  id="Telefon"
                  name="Telefon"
                  type="tel"
                  onChange={(e) => {
                    setTelefon(e.target.value);
                  }}
                  class="peer h-full w-full rounded-[2px] border  border-ocean-green-700  border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700  placeholder-shown:border-t-ocean-green-700  focus:border-2 focus:border-ocean-green-700  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-port-gore-950 "
                  placeholder=" "
                  value={telefon}
                />
                <label
                  htmlFor="Telefon"
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-port-gore-400  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-ocean-green-700  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 "
                >
                  Telefon <span className="text-red-500 ">*</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-7 ">
              <div class="relative h-10 w-full min-w-[200px]">
                <select
                  name="Typ"
                  id="typ"
                  onSelect={(e) => {
                    setTYp(e.target.value);
                  }}
                  class="peer h-full w-full rounded-[2px] border  border-ocean-green-700 border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-400  placeholder-shown:border-t-ocean-green-400  empty:!bg-red-500 focus:border-2 focus:border-ocean-green-400  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-ocean-green-400 /50"
                >
                  <option value="Wybierz">---Wybierz---</option>
                  <option value="Na dachu">Na dachu</option>
                  <option value="Na gruncie">Na gruncie</option>
                  <option value="Fotowoltaika + magazyn Energii">
                    Fotowoltaika + magazyn Energii
                  </option>
                  <option value="Audyt">Audyt</option>
                </select>
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-port-gore-400  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-ocean-green-700  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 ">
                  Typ instalacji
                </label>
              </div>
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  type="number"
                  id="rachunek"
                  name="Bill"
                  onChange={(e) => {
                    setRachunek(e.target.value);
                  }}
                  class="peer h-full w-full rounded-[2px] border  border-ocean-green-700  border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700  placeholder-shown:border-t-ocean-green-700  focus:border-2 focus:border-ocean-green-700  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-port-gore-950 /10"
                  placeholder=" "
                  value={rachunek}
                />
                <label
                  htmlFor="rachunek"
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-port-gore-400  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-sm after:border-t after:border-r after:border-ocean-green-700  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-400  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 "
                >
                  Twój rachunek za miesiąc
                  <span className="text-red-500 ">*</span>
                </label>
              </div>
              <div class="relative w-full min-w-[200px]">
                <textarea
                  id="Message"
                  name="Message"
                  value={textToMessage}
                  rows="3"
                  onChange={(e) => {
                    setTextToMessage(e.target.value);
                  }}
                  class="peer h-full min-h-[100px] w-full resize-none rounded-[2px] border border-ocean-green-700 border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700  placeholder-shown:border-t-ocean-green-700  focus:border-2 focus:border-ocean-green-700  focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-port-gore-950 "
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="Message"
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-ocean-green-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r after:border-ocean-green-700  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-port-gore-950  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-ocean-green-700  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-ocean-green-700  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-ocean-green-700  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-port-gore-950 "
                >
                  Wiadomość
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around gap-7">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-[2px] p-3"
                htmlFor="checkbox"
              >
                <input
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-port-gore-950  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-[2px] before:bg-port-gore-950  before:opacity-0 before:transition-opacity checked:border-ocean-green-500 checked:bg-ocean-green-500 checked:before:bg-ocean-green-500 hover:before:opacity-10"
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
                    strokeWidth="1"
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
              className="w-full px-6 py-3 text-sm font-medium leading-tight uppercase transition duration-150 ease-in-out rounded-sm shadow-md bg-primary text-port-gore-950  hover:bg-ocean-green-400  hover:shadow-lg hover:shadow-ocean-green-400/50 focus:bg-ocean-green-400  focus:shadow-lg focus:outline-none focus:ring-2 active:bg-ocean-green-400  active:shadow-lg bg-ocean-green-400"
            >
              Wyślij
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
