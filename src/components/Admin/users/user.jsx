import React, { useState } from "react";
import { deleteUsers, activateUser, payPlanUser } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export default function User(props) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const planes = props.planes;

  const changeState = async (e) => {
    if (e.target.name === "Inactivate") {
      dispatch(deleteUsers(props.user.idPerson, JSON.parse(localStorage.getItem("user"))?.pass));
    }
    if (e.target.name === "Activate") {
      dispatch(activateUser(props.user.idPerson, JSON.parse(localStorage.getItem("user"))?.pass));
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getDateEnd = () => {
    let e = new Date()
    e.setMonth(e.getMonth() + 1)
    return e;
  }

  const formatDate = (date) =>{
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  const handleAssignPlan = (e) => {
    e.preventDefault();
    const selectedPlanId = Number(e.target.plan.value);
    let pay = {
      "idPerson": props?.user?.idPerson,
      "idPlan": selectedPlanId,
      "dateStart": formatDate(new Date()),
      "dateEnd": formatDate(getDateEnd()),
      "classTake": 20,
      "payType": "CASH",
      "payNumber": "N/A"
    }

    dispatch(payPlanUser(pay, JSON.parse(localStorage.getItem("user"))?.pass))
    Swal.fire({
      icon: "success",
      title: "Guardado",
      showConfirmButton: false,
      timer: 1500,
    });
    handleCloseModal();
  };

  return (
    <div className="p-4">
      <div className="relative box-border h-auto w-32 min-w-full hover:max-w-full p-4 border-2">
        <div className="absolute left-3 -top-3 bg-white">
          <h2 className="text-3xl text-center text-purple-700">Usuario</h2>
        </div>
        <div className="flex flex-col sm:flex-col lg:flex-row">
          <div className="sm:pr-4 sm:w-full lg:w-1/4">
            <img
              src={"/imges/logo.jpg"}
              className="object-contain h-80 w-80"
              alt=""
            />
          </div>
          <div className="sm:w-full lg:w-1/2">
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">CC: {props.user.idPerson}</p>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">Nombre: {props.user.namePerson}</p>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">Apellido: {props.user.lastNamePerson}</p>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">Fecha de Nacimiento: {props.user.birthDatePerson}</p>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">Correo: {props.user.emailPerson}</p>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">Telefono: {props.user.phonePerson}</p>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">Rol: {props.user.rolType}</p>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">State: {props.user.isActive ? "ACTIVE" : "INACTIVE"}</p>
          </div>
          <div className="basis-1/4 pt-4 pl-0 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
            <form method="get" action={`/profile/${props.user.idPerson}`}>
              <button
                type="submit"
                className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
              >
                Editar
              </button>
            </form>
            <button
              onClick={changeState}
              name={!props.user.isActive ? "Activate" : "Inactivate"}
              className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
            >
              {!props.user.isActive ? "Activar" : "Inactivar"}
            </button>
            <button
              onClick={handleOpenModal}
              className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
            >
              Asignar Plan
            </button>          
            {showModal && (
              <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-opacity-50 bg-gray-700 z-50">
                <div class="mx-auto w-96 h-auto bg-white rounded-md p-5 flex flex-col justify-between shadow-lg">
                  <h2>Asignar Plan</h2>
                  <form onSubmit={handleAssignPlan}>
                    <div class="mt-10">
                      <label for="street-address"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Seleccionar Plan:
                      </label>
                      <div className="flex items-center justify-between">
                        <select 
                          name="plan" 
                          id="plan" 
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          {planes.map((plan) => (
                            <option key={plan.idPlan} value={plan.idPlan}>
                              {plan.namePlan}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="flex justify-center mt-5">
                      <div class="w-full max-w-md flex justify-between">
                        <button
                          type="submit"
                          class="w-1/2 bg-equilibrium rounded-md text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-pink focus:outline-none focus:bg-pink transition-colors duration-200 transform"
                        >
                          Guardar
                        </button>
                        <button
                          class="w-1/2 bg-equilibrium rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
                          onClick={() => setShowModal(false)}>
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
