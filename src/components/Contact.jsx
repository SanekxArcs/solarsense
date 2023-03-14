function Contact() {
  return (
    <div id="contact" className="py-16">
      <h2 className=" text-6xl uppercase font-bold text-center text-cadet-space py-10">
        Contact
      </h2>
      <div className="max-w-[1170px] p-6 bg-white rounded-lg shadow-lg dark:bg-neutral-700 w-[1170px] mx-auto grid grid-cols-5 gap-5 bg-cadet-space  text-mint-cream">
        <form className=" col-span-3">
          <div
            className="relative mb-5 text-cadet-space"
            data-te-input-wrapper-init
          >
            <input
              type="text"
              className="bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput7"
              placeholder="Name"
            />
            <label
              for="exampleInput7"
              className=" bg-mint-cream rounded-sm px-2 pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Name
            </label>
          </div>
          <div
            className="relative mb-6 text-cadet-space"
            data-te-input-wrapper-init
          >
            <input
              type="email"
              className="bg-mint-cream peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput8"
              placeholder="Email address"
            />
            <label
              for="exampleInput8"
              className="bg-mint-cream px-2  rounded-sm pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Email address
            </label>
          </div>
          <div
            className="relative mb-6 text-cadet-space"
            data-te-input-wrapper-init
          >
            <textarea
              className="peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
            <label
              for="exampleFormControlTextarea13"
              className=" bg-mint-cream px-2 pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Message
            </label>
          </div>
          <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
            <input
              className="relative float-left mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
              type="checkbox"
              value=""
              id="exampleCheck10"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="exampleCheck10"
            >
              Wyrażam zgodę na przetwarzanie przez Best Solution danych
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
        </form>
        <div className=" col-span-2">
          <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto ">
            <div className="flex transition-all duration-300 hover:-translate-y-1">
              <div className="shrink-0">
                <div className="p-4 rounded-sm shadow-lg bg-mint-cream">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Support 24/7</p>
                <a
                  className="hover:text-primary-mint transition-all hover:-translate-y-1 hover:drop-shadow "
                  href="tel:+48735145620"
                >
                  +48 735 145 620
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto">
            <div className="flex transition-all duration-300 hover:-translate-y-1">
              <div className="shrink-0">
                <div className="p-4 bg-blue-600 rounded-sm shadow-lg ">
                  <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Support 24/7</p>
                <p className="text-gray-500">
                  Pellentesque mollis, metus nec fringilla aliquam. Donec
                  consequat orci quis volutpat imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
