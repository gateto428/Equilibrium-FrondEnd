// export default Horario;
import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from "react-redux";
import {  deleteAdminClass, getUsersClass } from "../../../redux/actions"


const localizer = momentLocalizer(moment);


  const Horario = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [createEvent, setCreateEvent] = useState({});


    const handleDeleteEvent = (event) => {
      const user = JSON.parse(localStorage.getItem("user"));
      props.deleteAdminClass(event.idClass, user?.pass);
    };
  

    const toggleModal = (event) => {
      setCreateEvent(event)
      props.getUsersClass(event.idClass, JSON.parse(localStorage.getItem("user")).pass)
      console.log(props.usersClass)
      setShowModal(!showModal);
    
    };

    const renderEvent = ({ event }) => {
      return (
        <div className="event-container">
          <strong className="event-title">{event.title}</strong>
          <div className="button-container flex justify-between">
            <button
              className="add-event-button bg-white rounded-lg border border-gray-300 px-4 py-2"
              onClick={() => toggleModal(event)}
              style={{ color: "black" }}
            >
              Detalles
            </button>
            <button
              className="add-event-button bg-white rounded-lg border border-gray-300 px-4 py-2"
              onClick={() => handleDeleteEvent(event)}
              style={{ color: "black" }}
            >
              Eliminar
            </button>
          </div>
          {showModal && (          

            <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-opacity-50 bg-gray-700 z-50">
              <div class="mx-auto w-96 h-auto bg-white rounded-md p-5 flex flex-col justify-between shadow-lg">
                <div style={{ color: "black" }}>
                <div class="mb-4">
                  <label for="dateClass" class="font-semibold">
                    Fecha:
                  </label>
                  <input
                    type="text"
                    id="dateClass"
                    value={createEvent.dateClass}
                    disabled
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>

                <div class="mb-4">
                  <label for="hourClass" class="font-semibold">
                    Hora:
                  </label>
                  <input
                    type="text"
                    id="hourClass"
                    value={createEvent.hourClass}
                    disabled
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>

                <div class="mb-4">
                  <label for="durationClass" class="font-semibold">
                    Duración:
                  </label>
                  <input
                    type="text"
                    id="durationClass"
                    value={createEvent.durationClass}
                    disabled
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>

                <div class="mb-4">
                  <label for="quotasClass" class="font-semibold">
                    Cupos:
                  </label>
                  <input
                    type="text"
                    id="quotasClass"
                    value={createEvent.quotasClass}
                    disabled
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div class="mb-4">
                  <label for="descriptionCourse" class="font-semibold">
                    Personas inscritas:
                  </label>
                  <div class="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  style={{
                    whiteSpace: "pre-wrap"
                  }}
                  >
                    <ul>
                      {
                        props.usersClass?.map(elemento => {
                          return(<li>
                            {elemento.namePerson} - {elemento.phonePerson}
                          </li>)
                        })
                      }
                    </ul>                    
                  </div>
                </div>
                <div class="mb-4">
                  <label for="descriptionCourse" class="font-semibold">
                    Descripción del Curso:
                  </label>
                  <div class="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  style={{
                    whiteSpace: "pre-wrap"
                  }}
                  >
                    {createEvent.descriptionCourse}
                  </div>
                </div>
                <div class="flex justify-end mt-5">
                  <button
                    class="bg-equilibrium rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      );
    };

    return (
      <div style={{ height: "50vw", width: "95vw" }} className="bigCalendar-container">
        <Calendar
          localizer={localizer}
          events={props.classListAdmin}
          startAccessor="start"
          endAccessor="end"
          step={30}
          minTime={new Date().setHours(6, 0, 0, 0)}
          maxTime={new Date().setHours(22, 0, 0, 0)}
          messages={{
            next: "sig",
            previous: "ant",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
          }}
          components={{
            event: renderEvent,
          }}
        />
      </div>
    )
  };

  function mapStateToProps(state){
    return{
      classListAdmin: state.classListAdmin,
      usersClass: state.usersClass
    }
  }

  function mapDispatchToProps(dispatch) {
    return { 
      deleteAdminClass: (id, token) => dispatch(deleteAdminClass(id, token)),
      getUsersClass: (id, token) => dispatch(getUsersClass(id, token))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Horario);