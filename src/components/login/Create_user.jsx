import React, {useState, useEffect} from 'react';
import Navbar from "../home/navBarHome";
import NavbarUser from '../personalInformation/navBarUser';
import NavbarAdmin from '../Admin/home/navBarHomeAdm';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, getUserByID, updateUser } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CreateUser() {
  let { idPerson } = useParams();
  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    idPerson: idPerson?idPerson:null,
    namePerson: null,
    lastNamePerson: null,
    birthDatePerson: null,
    emailPerson: null,
    phonePerson: null,
    pass: null,
    rolType: "CLIENT",
    isActive: false,
  });

  const [passRetry, setPassRetry] = useState(null);
  const [check, setCheck] = useState(false);

  const [error, setError] = useState({vacio: true});

    const validate = (input) => {
      let error = {};
      if (!register.namePerson || register.namePerson === "") {
        error.namePerson = "El nombre es requerido";
        return error;
      }
      if (
        !register.lastNamePerson ||
        register.lastNamePerson === ""
      ) {
        error.lastNamePerson = "El apellido es requerido";
        return error;
      }
      if (!register.emailPerson || register.emailPerson === "") {
        error.emailPerson = "EL correo es requerido";
        return error;
      }
      // eslint-disable-next-line
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(register.emailPerson)) {
        error.emailPerson = "Mal formato en el correo";
        return error;
      }
      if (!register.idPerson || register.idPerson === "") {
        error.idPerson = "El documento es requerido";
        return error;
      }
      if (
        !register.birthDatePerson ||
        register.birthDatePerson === ""
      ) {
        error.birthDatePerson = "La fecha de nacimiento es requerida";
        return error;
      }
      if (!register.phonePerson || register.phonePerson === "") {
        error.phonePerson = "El celular es requerido";
        return error;
      }
      if (!register.pass || register.pass === "") {
        error.pass = "La contraseña es necesaria";
        return error;
      }
      // eslint-disable-next-line
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(register.pass)) {
        error.pass = "Mal formato en la contraseña";
        return error;
      }
      if (passRetry !== register.pass) {
        error.pass = "La contraseña no es la misma";
        return error;
      }
      if (!check) {
        error.cheked = "Tienes que chequear terminos y condiciones";
        return error;
      }
      return error;
    };
//
const validateUpdate = (input) => {
  let error = {};
  if (!register.namePerson || register.namePerson === "") {
    error.namePerson = "El nombre es requerido";
    return error;
  }
  if (
    !register.lastNamePerson ||
    register.lastNamePerson === ""
  ) {
    error.lastNamePerson = "El apellido es requerido";
    return error;
  }
  if (!register.emailPerson || register.emailPerson === "") {
    error.emailPerson = "El correo es requerido";
    return error;
  }
  // eslint-disable-next-line
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(register.emailPerson)) {
    error.emailPerson = "El formato del correo esta mal";
    return error;
  }
  if (
    !register.birthDatePerson ||
    register.birthDatePerson === ""
  ) {
    error.birthDatePerson = "La fecha de nacimiento es requerida";
    return error;
  }
  if (!register.phonePerson || register.phonePerson === "") {
    error.phonePerson = "El celular es requerido";
    return error;
  }
  return error;
};


//
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if(idPerson) dispatch(getUserByID(idPerson, user?.pass));
    }, [dispatch, idPerson]);

    const user = useSelector((state) => state.user);
    /**useEffect(() => {
      if (user) {
        //if(idPerson) //setRegister(user);
      }
      // eslint-disable-next-line
    }, []);*/

    const handleStateChange = (e) => {
      if(!idPerson){if(e.target.name === "candidates") setCheck(e.target.checked)
      if(e.target.name === "passRetry") {
        setPassRetry(e.target.value)
      }else{
        setRegister({
          ...register,
         [e.target.name]: e.target.value
      })
      }
      setError(validate(register));    
      setError(validate(register));}
      else{
        setRegister({
          ...register,
         [e.target.name]: e.target.value
      })
      setError(validateUpdate(register));    
      setError(validateUpdate(register));
      }
   }

const saveUpdate = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  setError(validate(register));
  if(Object.entries(error).length === 0){
   // console.log
      dispatch(updateUser(register, user?.pass));
      setRegister({
        idPerson: "",
        namePerson: "",
        lastNamePerson: "",
        birthDatePerson: "",
        emailPerson: "",
        phonePerson: "",
        pass: "",
        rolType: "CLIENT",
        isActive: false,
      })
      setCheck(false)
      setPassRetry("")
      Swal.fire({
        icon: "success",
        title: "Guardado",
        showConfirmButton: false,
        timer: 1500,
        willClose: () => {
          window.location.href = "/usersList";
        }
      });
  }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Revisa los campos, pueden haber errores...',
      })
  }
}


const registerSave = () => {
  setError(validateUpdate(register));
  if(Object.entries(error).length === 0){
      dispatch(registerUser(register));
      setRegister({
        idPerson: "",
        namePerson: "",
        lastNamePerson: "",
        birthDatePerson: "",
        emailPerson: "",
        phonePerson: "",
        pass: "",
        rolType: "CLIENT",
        isActive: false,
      })
      setCheck(false)
      setPassRetry("")
      let timerInterval
      Swal.fire({
          timer: 10000,
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
            console.log('I was closed by the timer')
          }
        })
  }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check the form, errors present',
      })
  }
}

  const isAdmin = () => {
    // Obtener el usuario de alguna manera (puede ser a través del estado o desde el local storage)
    const user = JSON.parse(localStorage.getItem("user"));

    // Verificar si el usuario existe y si su rolType es "ADMINISTRATOR"
    if (user && user.rolType === "ADMINISTRATOR") {
      return true; // El usuario es un administrador
    } else {
      return false; // El usuario no es un administrador
    }
  };


   const onSubmit = (e) => {
    e.preventDefault();
    if(!idPerson)registerSave();
    else saveUpdate();
  }

  const renderNavbar = () => {
    if (JSON.parse(localStorage.getItem("user"))) {
      console.log(JSON.parse(localStorage.getItem("user")))
      if (idPerson) {
        return isAdmin() ? <NavbarAdmin /> : <NavbarUser />;
      } else {
        return isAdmin() ? <NavbarAdmin /> : null;
      }
    } else {
      return <Navbar />;
    }
  };


    return (
      <div>        
        {renderNavbar()}
        <br />
        <div class="flex justify-center items-center">
          <div class="w-5/6 mx-auto">
            <h1 class="p-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {!idPerson ? "Registrarse" : (isAdmin() ? "Editar usuario" : "")}
            </h1>
            <div class="hidden sm:block" aria-hidden="true">
              <div class="py-5">
                <div class="border-t border-gray-200"></div>
              </div>
            </div>
            <div class="flex justify-center items-center"> 
              <div class="w-3/4">
                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3 class="p-2 text-base font-semibold leading-6 text-gray-900">
                          Información Personal
                        </h3>
                        <p class="p-2 mt-1 text-sm text-gray-600">
                          Use una dirección permanente donde pueda recibir
                          correo.
                        </p>
                      </div>
                    </div>
                    <div class="mt-5 md:col-span-2 md:mt-0">
                      <form isActive="false" onSubmit={onSubmit}>
                        <div class="overflow-hidden shadow sm:rounded-md">
                          <div class="bg-white px-4 py-5 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="first-name"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Nombre
                                </label>
                                <input
                                  type="text"
                                  name="namePerson"
                                  id="namePerson"
                                  placeholder="Nombre"
                                  value = {register.namePerson}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  autocomplete="given-name"
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></input>
                                <label className="block text-sm font-semibold text-red">
                                  {error.namePerson}
                                </label>
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="last-name"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Apellido
                                </label>
                                <input
                                  type="text"
                                  name="lastNamePerson"
                                  id="lastNamePerson"
                                  placeholder="Apellido"
                                  value = {register.lastNamePerson}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  autocomplete="family-name"
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></input>
                                <label className="block text-sm font-semibold text-red">
                                  {error.lastNamePerson}
                                </label>
                              </div>

                              <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="email-address"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Dirección de Email
                                </label>
                                <input
                                  type="email"
                                  name="emailPerson"
                                  placeholder=" usuario@dominio.com"
                                  id="emailPerson"
                                  value = {register.emailPerson}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  autocomplete="email@gmail.com"
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  required
                                ></input>
                                <label className="block text-sm font-semibold text-red">
                                  {error.emailPerson}
                                </label>
                              </div>

                              {!idPerson?(
                                <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="street-address"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Documento de identificación
                                </label>
                                <input
                                  type="number"
                                  name="idPerson"
                                  id="idPerson"
                                  placeholder="1052464878"
                                  value = {register.idPerson}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  autocomplete=""
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></input>
                                <label className="block text-sm font-semibold text-red">
                                  {error.idPerson}
                                </label>
                              </div>):null}

                              <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="street-address"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Fecha de nacimiento
                                </label>
                                <input
                                  type="date"
                                  name="birthDatePerson"
                                  id="birthDatePerson"
                                  value = {register.birthDatePerson}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  autocomplete=""
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></input>
                                 <label className="block text-sm font-semibold text-red">
                                  {error.birthDatePerson}
                                </label>
                              </div>

                              <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="street-address"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Número de telefono
                                </label>
                                <input
                                  type="number"
                                  name="phonePerson"
                                  id="phonePerson"
                                  autocomplete=""
                                  value = {register.phonePerson}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  min="1"
                                  max="999999999999"
                                  placeholder='3202314578'
                                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></input>
                                <label className="block text-sm font-semibold text-red">
                                  {error.phonePerson}
                                </label>
                              </div>
                              {!idPerson?(
                              <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="street-address"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Contraseña
                                </label>
                                <input
                                  type="password"
                                  name="pass"
                                  id="pass"
                                  autocomplete=""
                                  value = {register.pass}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></input>
                                <label className="block text-sm font-semibold text-red">
                                  {error.pass}
                                </label>
                              </div>): null}
                              {!idPerson?(
                              <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="street-address"
                                  class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Repita la contraseña
                                </label>
                                <input
                                  type="password"
                                  name="passRetry"
                                  id="passRetry"
                                  autocomplete=""
                                  value = {register.passRetry}
                                  onChange = {handleStateChange}
                                  onClick = {handleStateChange}
                                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></input>
                                <label className="block text-sm font-semibold text-red">
                                  {error.passRetry}
                                </label>
                              </div>):null}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden sm:block" aria-hidden="true">
              <div class="py-5">
                <div class="border-t border-gray-200"></div>
              </div>
            </div>

            <div class="mt-10 sm:mt-0">
              <div class="md:grid md:grid-cols-3 md:gap-6">
                {!idPerson?(
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-0">
                    <h3 class="p-2 text-base font-semibold leading-6 text-gray-900">
                      Notificaciones y condiciones
                    </h3>
                    <p class="p-2 mt-1 text-sm text-gray-600">
                      Decide qué comunicaciones te gustaría recibir y cómo.
                    </p>
                  </div>
                </div>):(
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-0">
                    
                  </div>
                </div>
                )}
                <div class="mt-2 md:col-span-2 md:mt-0">
                  <form onSubmit={onSubmit}>
                    <div class="overflow-hidden shadow sm:rounded-md">
                     { !idPerson?(
                      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <fieldset>
                          <legend class="sr-only">By Email</legend>
                          <div
                            class="text-sm font-semibold leading-6 text-gray-900"
                            aria-hidden="true"
                          >
                            Selecciona si estas de acuerdo
                          </div>
                          <div class="mt-4 space-y-4">
                            <div class="flex items-start">
                              <div class="flex h-6 items-center">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  onChange={handleStateChange}
                                  onClick={handleStateChange}
                                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                ></input>
                              </div>
                              <div class="ml-3 text-sm leading-6">
                                <label
                                  for="candidates"
                                  class="font-medium text-gray-900"
                                >
                                  Aceptar terminos y condiciones
                                </label>
                              </div>
                            </div>
                            <label className="block text-sm font-semibold text-red">
                                  {error.cheked}
                            </label>
                          </div>
                        </fieldset>
                        <div class="bg-purple-50 px-4 py-3 text-right sm:px-6">
                          <button
                            type="submit"
                            onClick = {handleStateChange} 
                            class="bg-purple text-white hover:bg-pink hover:text-white px-3 py-2 rounded-md text-md font-medium"
                          >
                            Registrarse
                          </button>
                        </div>
                      </div>):(
                      <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          onClick = {handleStateChange}
                          class="bg-purple text-white hover:bg-pink hover:text-white px-3 py-2 rounded-md text-md font-medium">
                          Guardar
                        </button>
                      </div>
                      )
                      }
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }