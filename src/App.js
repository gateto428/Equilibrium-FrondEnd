import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx";
import HomeAdm from "./components/Admin/home/homeAdm.jsx";
import LogIn from "./components/login/login.jsx";
import PersonalInformation from "./components/personalInformation/personalInformation.jsx";
import Horario from "./components/personalInformation/horario";
import TrainingHistory from "./components/personalInformation/trainingHistory.jsx";
import CreateUser from "./components/login/Create_user.jsx";
import CourseList from "./components/courses/courseList.jsx";
import CourseListAdm from "./components/Admin/courses/courseListAdm.jsx";
import Course from "./components/courses/course.jsx";
import AddCourses from "./components/Admin/courses/add_courses.jsx";
import UpdateCourse from "./components/Admin/courses/modifyCourse.jsx";
import ShowCourse from "./components/courses/show_course.jsx";
import Plan from "./components/plans/plan.jsx";
import PlanList from "./components/plans/planList.jsx";
import PlanListAdm from "./components/Admin/plan/planListAdm.jsx";
import AddPlanes from "./components/Admin/plan/add_planes.jsx";
import ShowPlanAdm from "./components/Admin/plan/show_plan.jsx";
import UpdatePlan from "./components/Admin/plan/modifyPlan.jsx";
import ShowPlan from "./components/plans/show_plan.jsx";
import UserList from "./components/Admin/users/userList.jsx";
import SelectPlan from "./components/plans/selectPlan.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hadm" element={<HomeAdm />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/Create_user" element={<CreateUser />} />
      <Route path="/personalInformation" element={<PersonalInformation />} />
      <Route path="/horario" element={<Horario />} />
      <Route path="/courseList" element={<CourseList />} />
      <Route path="/courseListAdm" element={<CourseListAdm />} />
      <Route path="/course" element={<Course />} />
      <Route path="/trainingHistory" element={<TrainingHistory />} />
      <Route path="/add_courses" element={<AddCourses />} />
      <Route path="/show_course" element={<ShowCourse />} />
      <Route path="/update/:idCourse" element={<UpdateCourse />} />
      <Route path="/profile/:idPerson" element={<CreateUser />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/planList" element={<PlanList />} />
      <Route path="/show_plan" element={<ShowPlan />} />
      <Route path="/planListAdm" element={<PlanListAdm />} />
      <Route path="/add_planes" element={<AddPlanes />} />
      <Route path="/updatePlan/:idPlan" element={<UpdatePlan />} />
      <Route path="/usersList" element={<UserList />} />
      <Route path="/show_plan_adm/:idPlan" element={<ShowPlanAdm />} />
      <Route path="/select_plan" element={<SelectPlan />} />
    </Routes>
  );
}

export default App;
