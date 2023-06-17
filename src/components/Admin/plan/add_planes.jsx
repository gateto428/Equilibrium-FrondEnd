import React, { useState } from "react";
import Navbar from "../home/navBarHomeAdm";
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux'
import { savePlan } from '../../../redux/actions';

function App() {
  const dispatch = useDispatch();
  //const [file, setFile] = useState();
 // function handleChange(e) {
   // console.log(e.target.files);
   // setFile(URL.createObjectURL(e.target.files[0]));
 // }

  const [createPlan, setCreatePlan] = useState({
    descriptionPlan: null,
    namePlan: null,
    costPlan: null,
    classTake: null,
    creatorPlan: JSON.parse(localStorage.getItem("user"))?.idPerson,
    isActive: true
});

const [error, setError] = useState({vacio: true});

const validate = (input) =>{
  let error = {};
  if(!createPlan.namePlan || createPlan.namePlan === ""){
      error.namePlan = 'El nombre es requerido'
      return error;
  }
  if(!createPlan.descriptionPlan || createPlan.descriptionPlan === ""){
    error.descriptionPlan = 'La descripcion es requerida'
    return error;
  }
  if(!createPlan.costPlan || createPlan.costPlan === ""){
    error.costPlan = 'El costo del plan es requerido'
    return error;
  }
  if(!createPlan.classTake || createPlan.classTake === ""){
    error.classTake = 'El número de clases son requeridas'
    return error;
  }
    return error;
 }


 const handleStateChange = (e) => {
    setError(validate(createPlan));
      setCreatePlan({
            ...createPlan,
           [e.target.name]: e.target.value
        })
    setError(validate(createPlan));
 }

 const onSubmit = async (e) => {
  e.preventDefault();
  setError(validate(createPlan));
  if(Object.entries(error).length === 0){
    dispatch(savePlan(createPlan, JSON.parse(localStorage.getItem("user"))?.pass))
      let timerInterval
      Swal.fire({
          timer: 200,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        })
      setCreatePlan({
        descriptionPlan: "",
        namePlan: "",
        classTake: "",
        creatorPlan: JSON.parse(localStorage.getItem("user"))?.idPerson,
        isActive: true
      })
      Swal.fire({
          icon: "success",
          title: "Guardado",
          showConfirmButton: false,
          timer: 1500,
        });
  }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Revisa los campos, pueden haber errores...',
      })
  }
}

  return (
    <div class="relative z-10" role="dialog" aria-modal="true">
      <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <Navbar />
        <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <form method="get" action="/planListAdm">
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
                      <b> Agregar Plan </b> 
                    </h1>
                    {/**<h2>Añadir Imagenes</h2>*/}
                    {/**<input type="file" onChange={handleChange} />*/}
                    <img src={"/imges/logo.jpg"} alt="decription plan" />
                  </div>
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <section aria-labelledby="options-heading" class="mt-10">
                    <form onSubmit={onSubmit}>
                      <div class="mt-10">
                        <label
                          for="street-address"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          <b>Nombre</b>
                        </label>
                        <div class="flex items-center justify-between">
                          <input
                            type="text"
                            name="namePlan"
                            id="namePlan"
                            value = {createPlan.namePlan}
                            onChange = {handleStateChange}
                            onClick = {handleStateChange}
                            autocomplete=""
                            class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          ></input> 
                        </div>
                        <label
                            className="block text-sm font-semibold text-red">
                            {error.namePlan}
                          </label>
                        <br />
                      </div>
                      <label
                        for="street-address"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        <b>Descripción</b>
                      </label>
                      <div>
                        <textarea
                          type="text"
                          maxLength="250"
                          name="descriptionPlan"
                          id="descriptionPlan"
                          autocomplete="family-name"
                          value = {createPlan.descriptionPlan}
                          onChange = {handleStateChange}
                          onClick = {handleStateChange}
                          class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                      <label
                            className="block text-sm font-semibold text-red">
                            {error.descriptionPlan}
                          </label>
                      <br />
                      <label
                        for="street-address"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        <b>Precio</b>
                      </label>
                      <div>
                        <input
                          maxLength="250"
                          name="costPlan"
                          id="costPlan"
                          autocomplete="family-name"
                          value = {createPlan.costPlan}
                          onChange = {handleStateChange}
                          onClick = {handleStateChange}
                          type="number" min="0" step="1"
                          class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></input>
                      </div>
                      <label
                            className="block text-sm font-semibold text-red">
                            {error.costPlan}
                          </label>
                          <br />
                      <label
                        for="street-address"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        <b>Numero de clases</b>
                      </label>
                      <div>
                        <input
                          maxLength="250"
                          name="classTake"
                          id="classTake"
                          autocomplete="family-name"
                          value = {createPlan.classTake}
                          onChange = {handleStateChange}
                          onClick = {handleStateChange}
                          type="number" min="0" step="1"
                          class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></input>
                      </div>
                      <label
                            className="block text-sm font-semibold text-red">
                            {error.classTake}
                          </label>
                      <br />
                      <button
                        type="submit"
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
                      >
                        Guardar
                      </button>
                    </form>
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
