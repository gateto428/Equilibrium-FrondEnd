import React from "react";
import { useDispatch } from 'react-redux'
import {deleteCoursePlan} from '../../../redux/actions'
import Swal from 'sweetalert2';

export default function Course(props) {
  const dispatch = useDispatch();
  const deleteCourse ={
    idPlan: parseInt(props.idPlan),
    idCourse: props.course.idCourse
    };


  const onDelete = async() => {
    dispatch(deleteCoursePlan(deleteCourse, props?.idPlan, JSON.parse(localStorage.getItem("user"))?.pass))
    Swal.fire({
      icon: "success",
      title: "Curso eliminado",
      showConfirmButton: false,
      timer: 15000,
    });
  }

  return (
    <div className="p-4">
      <div className=" relative box-border h-auto min-w-full hover:max-w-full p-4 border-2">
        <div className="absolute left-3 -top-3 bg-white">
          <h2>Curso: {props?.course?.nameCourse}</h2>
        </div>
        <div className="" style={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between'
        }}>
          <div className="pr-4 basis-1/4">
            <img
              src={"/imges/logo.jpg"}
              className=" object-contain h-50 w-40 "
              alt=""
            />
          </div>
          <div className="w-9/12">
            <h1 className="text-center text-2xl">{props?.course?.nameCourse}</h1>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">
              {props?.course?.descriptionCourse}
            </p>
          </div>
          {props.isAdmin?<div className="basis-1/4 pt-4 pl-0 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
            <button onClick={onDelete} className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
              Eliminar
            </button>
          </div>:null}
        </div>
      </div>
    </div>
  );
}
