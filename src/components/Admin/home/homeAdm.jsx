import React, { useEffect, useState } from "react";
import Navbar from "./navBarHomeAdm";
import Package from "./package";
import Swal from 'sweetalert2';
import Schedule from "../schedule/schedule"
import { saveClass, getClassAdmin, getAllCourse } from '../../../redux/actions';
import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HomeAdmin = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.rolType !== "ADMINISTRATOR")
      window.location.href = "/";
    dispatch(getClassAdmin(0, 100, JSON.parse(localStorage.getItem("user"))?.pass));
    dispatch(getAllCourse(0, 100, JSON.parse(localStorage.getItem("user"))?.pass));
    // eslint-disable-next-line
  }, []);

  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [createEvent, setCreateEvent] = useState({
    dateClass: new Date(),
    hourClass: null,
    idCourse: null,
    durationClass: null,
    quotasClass: null,
    roomClass: "8",
    creatorClass: JSON.parse(localStorage.getItem("user"))?.idPerson,
    coachClass: "201511268"
  });

  const [error, setError] = useState({});
  const [selectedDateTime, setSelectedDateTime] = useState({
    hour: "06",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    setCourses(props.courses);
  }, [props.courses]);

  const validate = (input) => {
    let error = {};
    if (!input.idCourse || input.idCourse === "") {
      error.idCourse = 'El curso es requerido';
      return error;
    }
    return error;
  }

  const handleStateChange = (e) => {
    setError(validate(createEvent));
    setCreateEvent({
      ...createEvent,
      [e.target.name]: e.target.value
    })
    setError(validate(createEvent));
  }

  const dateChange = (date) => {
    setError(validate(createEvent));
    setCreateEvent({
      ...createEvent,
      dateClass: date
    })
    setError(validate(createEvent));
  }

  const handleDurationChange = (e) => {
    setError(validate({ ...createEvent, durationClass: e.target.value }));
    setCreateEvent({
      ...createEvent,
      durationClass: e.target.value
    });
  };

  const handleQuotasChange = (e) => {
    setError(validate({ ...createEvent, quotasClass: e.target.value }));
    setCreateEvent({
      ...createEvent,
      quotasClass: e.target.value
    });
  };
  

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(validate(createEvent));

    if (Object.entries(error).length === 0) {
      dispatch(saveClass(createEvent, selectedDateTime, JSON.parse(localStorage.getItem("user"))?.pass))
      setCreateEvent({
        dateClass: null,
        hourClass: null,
        idCourse: null,
        durationClass: null,
        quotasClass: null,
        roomClass: "8",
        creatorClass: JSON.parse(localStorage.getItem("user"))?.idPerson,
        coachClass: "201511268"
      })
      Swal.fire({
        icon: "success",
        title: "Guardado",
        showConfirmButton: false,
        timer: 1500,
      });
      setShowModal(false)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Revisa los campos, pueden haber errores...',
      })
    }
  }

  return (
    <div class="overflow-auto">
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Horario
        </h1>
        <button
          class="bg-equilibrium rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink float-right"
          onClick={toggleModal}
        >
          Agregar evento
        </button>
        {showModal && (
          <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-opacity-50 bg-gray-700 z-50">
            <div class="mx-auto w-96 h-auto bg-white rounded-md p-5 flex flex-col justify-between shadow-lg">
              <form onSubmit={onSubmit}>
                <div class="mt-10">
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <b>Selecciona el curso</b>
                  </label>
                  <div className="flex items-center justify-between">
                    <select
                      name="idCourse"
                      id="idCourse"
                      value={createEvent.idCourse}
                      onChange={handleStateChange}
                      onClick={handleStateChange}
                      autoComplete=""
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {courses.map((course) => (
                        <option key={course.idCourse} value={course.idCourse}>
                          {course.nameCourse}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label className="block text-sm font-semibold text-red">
                    {error.idCourse}
                  </label>
                </div>
                <br />
                <div>
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <b>Selecciona el dia</b>
                  </label>
                  <div className="flex items-center justify-between">
                    <DatePicker
                      name="idCourse"
                      selected={createEvent.dateClass}
                      onChange={dateChange}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label className="block text-sm font-semibold text-red">
                    {error.idCourse}
                  </label>
                </div>
                <br />
                <div>
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <b>Selecciona la hora</b>
                  </label>
                  <br />
                  <div className="flex items-center justify-center">
                    <select className="mr-2" value={selectedDateTime.hour} onChange={(e) => setSelectedDateTime({ ...selectedDateTime, hour: e.target.value })}>
                      {[...Array(15)].map((_, i) => {
                        const value = (i + 6).toString().padStart(2, '0');
                        return <option key={i} value={value}>{value}</option>;
                      })}
                    </select>
                    <span>:</span>
                    <select value={selectedDateTime.minutes} onChange={(e) => setSelectedDateTime({ ...selectedDateTime, minutes: e.target.value })} className="ml-2">
                      {[...Array(60)].map((_, i) => (
                        <option key={i} value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>
                      ))}
                    </select>
                  </div>
                  <br />
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <b>Horas</b>
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type="number"
                      name="durationClass"
                      value={createEvent.durationClass}
                      onChange={handleDurationChange}
                      autoComplete=""
                      min={1}  
                      max={4}  
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <br />
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <b>Cupos</b>
                  </label>
                  <br />
                  <div className="flex items-center justify-center">
                    <input
                      type="number"
                      name="quotasClass"
                      value={createEvent.quotasClass}
                      onChange={handleQuotasChange}
                      autoComplete=""
                      min={1}  
                      max={100}  
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        <br />
        <br />
        <div>
          <Schedule />
        </div>
      </div>

      <div className="bg-equilibrium h-48 relative p-2"></div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    courses: state.courses,
  };
}

export default connect(mapStateToProps, null)(HomeAdmin);
