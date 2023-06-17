import React, { useEffect } from "react";
import Course from "./CoursePlan";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { getAllCourse, getTotalCourse } from '../../../redux/actions';


const SelectCoursePlan = (props) => {
  const dispatch = useDispatch();
  const getCourses = async(offset, limit, token) =>{
    await dispatch(getAllCourse(offset, limit, token));
    await dispatch(getTotalCourse(token))
  }


  useEffect(() => {
    if(JSON.parse(localStorage.getItem("user"))?.rolType !== 'ADMINISTRATOR') window.location.href = "/";
    getCourses(0, 100, JSON.parse(localStorage.getItem("user"))?.pass);
    // eslint-disable-next-line
  }, []);

    return (
      <div className="max-w-full min-w-sd max-h-full">
        <div className="flex justify-center pt-8 text-4xl font-Monserrat text-center text-purple-700 ">
          <h1>Cursos</h1>
        </div>
        <div className="basis-1/4 pt-4 pl-0 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
            <button onClick={props.accept} className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                Add Courses
            </button>
        </div>
        <div className="" >
          <div className="pl-10 pr-10 mb-9" style={{
          overflow: 'scroll'
          }}>
            {props?.courses?.map(course => {
              return <Course key={course?.idCourse} course={course}  handleStateChange = {props.handleStateChange}/>
            })}
          </div>
        </div>
      </div>
    );
}


function mapStateToProps(state){
    return{
      courses: state.courses,
      totalCourses: state.totalCourses
    }
  }
export default connect(mapStateToProps, null)(SelectCoursePlan);
