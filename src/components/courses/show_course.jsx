import React /**, { useState } */ from "react";
import Navbar from "../home/navBarHome";

function App() {
  //const [file, setFile] = useState();
  //function handleChange(e) {
  //  console.log(e.target.files);
  //  setFile(URL.createObjectURL(e.target.files[0]));
 // }

  return (
    <div class="relative z-10" role="dialog" aria-modal="true">
      <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <Navbar />
        <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <form method="get" action="/courseList">
                <button
                  type="submit"
                  class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
              <div class="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                <div class="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                  <div className="App">
                    <h1 class="text-2xl font-bold text-gray-900 sm:pr-12">
                      <b> Curso </b> <br /> <br />
                    </h1>
                    <div className="pr-4 basis-1/4">
                      <img
                        src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/250548834_1520961794937296_4338138444158639331_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHGQDSm8iuZylNgFD9GNSJ9IGyDXnC7pH0gbINecLukfV6dDcejlvap8mCpA81uRA9n4m_3xqpLuwjG7FEbgeGx&_nc_ohc=VLuWOIZOfccAX_YfzA-&_nc_ht=scontent-bog1-1.xx&oh=00_AfB5H2dDjFovQLqn4c7X6cZmCQKtXG1k6CN-N_dAaejjxg&oe=641599DD"
                        className=" object-contain h-50 w-40 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <section aria-labelledby="options-heading" class="mt-10">
                    <label
                      for="street-address"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <b>Descripción</b>
                    </label>
                    <div></div>

                    <div class="mt-10">
                      <label
                        for="street-address"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        <b>Precio</b>
                      </label>
                      <div class="flex items-center justify-between"></div>
                      <br />
                      <label
                        for="street-address"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        <b>Número de clases</b>
                      </label>
                      <div class="flex items-center justify-between"></div>
                      <br />
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="country"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          <b>Modalidad</b>
                        </label>
                      </div>
                    </div>
                    <br />
                    <button
                      type="submit"
                      class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
                    >
                      Inscribirse
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
