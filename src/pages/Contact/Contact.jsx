import { motion } from "framer-motion";
import useLocalStorageState from "../../service/useLocalStorageState";
import InputField from "./../../components/InputField";
import Label from "../../components/Label";

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
    <div id="contact" className="relative px-3 my-32 scroll-m-14">
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
        className=" max-w-7xl p-7 rounded shadow-lg  mx-auto bg-gradient-to-br from-ocean-green-50 to-ocean-green-200 shadow-ocean-green-200 ring ring-ocean-green-400 "
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
            <div className="flex flex-col gap-7">
              <InputField
                type="text"
                id="Name"
                name="Imię"
                value={klientName}
                onChange={(e) => {
                  setKlientName(e.target.value);
                }}
                placeholder="Imię"
              />
              <InputField
                type="text"
                id="Lastname"
                name="Nazwisko"
                value={klientLastname}
                onChange={(e) => {
                  setKlientLastname(e.target.value);
                }}
                placeholder="Nazwisko"
              />
              <InputField
                type="email"
                id="email"
                name="E-mail"
                value={klientLastname}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                placeholder="E-mail"
              />
              <InputField
                type="tel"
                id="Telefon"
                name="Telefon"
                value={klientLastname}
                onChange={(e) => {
                  setTelefon(e.target.value);
                }}
                placeholder="Telefon"
              />
            </div>

            <div className="flex flex-col gap-7 ">
              <div class="relative h-10 w-full min-w-[200px]">
                <select
                  name="Typ"
                  id="typ"
                  onSelect={(e) => {
                    setTYp(e.target.value);
                  }}
                  class="peer h-full w-full rounded  border  border-ocean-green-700 border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-400  placeholder-shown:border-t-ocean-green-400  empty:!bg-red-500 focus:border-2 focus:border-ocean-green-400  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-ocean-green-400 /50"
                >
                  <option value="Wybierz">---Wybierz---</option>
                  <option value="Na dachu">Na dachu</option>
                  <option value="Na gruncie">Na gruncie</option>
                  <option value="Fotowoltaika + magazyn Energii">
                    Fotowoltaika + magazyn Energii
                  </option>
                  <option value="Audyt">Audyt</option>
                </select>
                <Label id="typ" placeholder="Typ instalacji"/>
              </div>
              <InputField
                type="number"
                id="Bill"
                name="Bill"
                value={klientLastname}
                onChange={(e) => {
                  setTelefon(e.target.value);
                }}
                placeholder="Twój rachunek za miesiąc"
              />
              <div class="relative w-full min-w-[200px]">
                <textarea
                  id="Message"
                  name="Message"
                  value={textToMessage}
                  rows="3"
                  onChange={(e) => {
                    setTextToMessage(e.target.value);
                  }}
                  class="peer h-full min-h-[100px] w-full resize-none rounded  border border-ocean-green-700 border-t-transparent bg-ocean-green-50 px-3 py-2.5 font-sans text-sm font-normal text-port-gore-950  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-ocean-green-700  placeholder-shown:border-t-ocean-green-700  focus:border-2 focus:border-ocean-green-700  focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-port-gore-950 "
                  placeholder=" "
                ></textarea>
                <Label id="Message" placeholder="Wiadomość" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around gap-7">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded  p-3"
                htmlFor="checkbox"
              >
                <input
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border-2 border-port-gore-950  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded  before:bg-port-gore-950  before:opacity-0 before:transition-opacity checked:border-ocean-green-500 checked:bg-ocean-green-500 checked:before:bg-ocean-green-500 hover:before:opacity-10"
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
              <p className="text-xs md:text-sm lg:text-base">
                Wyrażam zgodę na przetwarzanie przez Solar Sense danych
                personalnych w formularzu kontaktowym w celu wykonania i
                przesłania oferty.
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium leading-tight uppercase transition duration-150 ease-in-out rounded shadow-md bg-primary text-port-gore-950 hover:bg-ocean-green-400 hover:shadow-lg hover:shadow-ocean-green-400/50 focus:bg-ocean-green-400 focus:shadow-lg focus:outline-none focus:ring-2 active:bg-ocean-green-400 active:shadow-lg bg-ocean-green-400"
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
