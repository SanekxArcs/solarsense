function Galeria() {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800 w-[1170px] mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">
          Projects we are<u class="text-blue-600"> proud of</u>
        </h2>

        <div class="grid lg:grid-cols-3 gap-6">
          <div
            class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: `50%` }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              alt=""
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              class="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">
                    Hollywood exhibition
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: `50%` }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              alt=""
              src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
              class="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">Genius Loci</h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: `50%` }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              alt=""
              src="https://mdbootstrap.com/img/new/standard/city/045.jpg"
              class="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">Big Apple</h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: `50%` }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              alt=""
              src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
              class="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">Sun City</h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: `50%` }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              alt=""
              src="https://mdbootstrap.com/img/new/standard/city/048.jpg"
              class="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">Paris flavor</h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: `50%` }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              alt=""
              src="https://mdbootstrap.com/img/new/standard/city/049.jpg"
              class="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">
                    Sky is the limit
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Galeria;
