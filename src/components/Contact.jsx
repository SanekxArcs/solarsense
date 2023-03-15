import topImg from "../resourses/wave-haikei.svg";
import bottomImg from "../resourses/wave-haikei (1).svg";

function Contact() {
  return (
    <div id="contact" className="relative px-3 py-32">
      <h2 className="pb-10 text-5xl font-bold text-center uppercase md:text-6xl text-cadet-space">
        Kontact
      </h2>
      <div className="max-w-[1170px] p-6 rounded-sm shadow-lg  mx-auto bg-cadet-space  text-mint-cream">
        <form className="grid grid-cols-1 gap-5 lg:grid-rows-3 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:row-span-2">
            <div
              className="relative mb-5 text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlhtmlFor="Name">
                Imie
              </label>
              <input
                type="text"
                className="bg-mint-cream dark:bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-cadet-space dark:peer-focus:text-cadet-space "
                id="Name"
                placeholder="Imie"
              />
            </div>
            <div
              className="relative mb-5 text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlhtmlFor="Lastname">
                Nazwisko
              </label>
              <input
                type="text"
                className="bg-mint-cream dark:bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-cadet-space dark:peer-focus:text-cadet-space "
                id="Lastname"
                placeholder="Nazwisko"
              />
            </div>

            <div
              className="relative mb-6 text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlhtmlFor="email">
                Adres e-mail
              </label>
              <input
                type="email"
                className="bg-mint-cream dark:bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-cadet-space dark:peer-focus:text-cadet-space"
                id="email"
                placeholder="E-mail"
              />
            </div>
            <div
              className="relative mb-5 text-cadet-space"
              data-te-input-wrapper-init
            >
              <label className=" text-mint-cream" htmlhtmlFor="tel">
                Telefon <span className="text-red-500 ">*</span>
              </label>
              <input
                type="tel"
                className="bg-mint-cream dark:bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-cadet-space dark:peer-focus:text-cadet-space"
                id="tel"
                placeholder="Telefon"
              />
            </div>
          </div>

          <div
            className="relative mb-6 lg:col-span-3 lg:row-span-2 text-cadet-space"
            data-te-input-wrapper-init
          >
            <label className=" text-mint-cream" htmlhtmlFor="Wiadomość">
              Wiadomość
            </label>
            <textarea
              className="peer bg-mint-cream dark:bg-mint-cream block h-full w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-cadet-space dark:peer-focus:text-cadet-space"
              id="Wiadomość"
              rows="3"
              placeholder="Wiadomość"
            ></textarea>
          </div>
          <div className="flex flex-col justify-around lg:col-span-5">
            <div className="flex flex-wrap items-start justify-start pl-6">
              <input
                className="relative float-left mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                type="checkbox"
                value=""
                id="Check1"
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
              className="w-full rounded-sm bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg bg-primary-mint"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <img
        className="absolute top-0 left-0 right-0 w-full -z-40"
        src={topImg}
        alt=""
      />
      <img
        className="absolute bottom-0 left-0 right-0 w-full -z-50"
        src={bottomImg}
        alt=""
      />
    </div>
  );
}

export default Contact;
