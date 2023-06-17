import { LOGIN, ERROR, REGISTER, GET_ALL_COURSE, GET_TOTAL_COURSE, GET_COURSE, GET_PERSON,
GET_ALL_PLAN, GET_TOTAL_USERS, GET_PLAN, GET_ALL_CLASS, ENROLL_USERS, GET_USERS_CLASS } from "./actions.js";
import Swal from "sweetalert2";

const initialState = {
  user: {
    idPerson: null,
    namePerson: null,
    lastNamePerson: null,
    birthDatePerson: null,
    emailPerson: null,
    phonePerson: null,
    pass: null,
    rolType: null,
    isActive: null,
  },
  userList:[],
  totalCourses: 0,
  courses:[],
  course: {},
  error: null,
  planes:[],
  totalPlanes: 0,
  plan: null,
  classListAdmin:[
  ],
  classEnrollList: [],
  usersClass: []
};

function rootReducer(state = initialState, action) {
  if (action.type === LOGIN) {
    localStorage.setItem('user', JSON.stringify(action.payload.data))
    let timerInterval
    Swal.fire({
      timer: 2000,
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
      
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    return {
      ...state,
      error: null,
      user: action.payload.data
    };
  }
   if (action.type === REGISTER) {
    Swal.fire({
      icon: "success",
      title: "Register",
      text: `Registro exitoso espere la aprobacion de administrador`,
      showConfirmButton: false,
      timer: 15000,
    });
    window.location.href = "/";
    return {
      ...state,
      error: null,
      user: action.payload.data
    };
  }
  if (action.type === ERROR) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${action.payload.message}`,
    });
    return {
      ...state,
      course: {},
      error: action.payload
    };
  }
  if (action.type === GET_ALL_COURSE) {
    return {
      ...state,
      error: null,
      course: {},
      courses: action.payload.data
    };
  }
  if (action.type === GET_TOTAL_COURSE) {
    return {
      ...state,
      error: null,
      
      totalCourses: action.payload.data['total Courses']
    };
  }
  if (action.type === GET_COURSE) {
      return {
        ...state,
        error: null,
        course: action.payload.data
      };
  }
  if (action.type === GET_PERSON) {
    return {
      ...state,
      error: null,
      user: action.payload.data
    };
}
if (action.type === GET_ALL_PLAN) {
  return {
    ...state,
    error: null,
    planes: action.payload.data.response,
    totalPlanes: action.payload.data.TotalResponse
  };
}
if (action.type === GET_TOTAL_USERS) {
  return {
    ...state,
    error: null,
    userList: action.payload.data,
  };
}
if (action.type === GET_PLAN) {
  return {
    ...state,
    error: null,
    plan: action.payload.data
  };
}
if (action.type === GET_ALL_CLASS) {
  let arryAux = [];
   for(let i = 0; i < action.payload.data.length; i++){
      let date = new Date(action.payload.data[i].dateClass + " " + action.payload.data[i].hourClass);
      let end = new Date(action.payload.data[i].dateClass + " " + action.payload.data[i].hourClass);
      let minutes = end.getHours();
      end.setHours(minutes + action.payload.data[i].durationClass);
      arryAux.push({
        title: `${action.payload.data[i].course.nameCourse}`,
        start: date,
        end: end,
        url: `http://localhost:3000/update/${action.payload.data[i].course.idCourse}`,
        idClass: action.payload.data[i].idClass,
        dateClass: action.payload.data[i].dateClass,
        hourClass: action.payload.data[i].hourClass,
        durationClass: action.payload.data[i].durationClass,
        quotasClass: action.payload.data[i].quotasClass,
        descriptionCourse: `${action.payload.data[i].course.nameCourse}:\n${action.payload.data[i].course.descriptionCourse}\nSala: ${action.payload.data[i].roomClass}`
      })
   }

  return {
    ...state,
    error: null,
    classListAdmin: arryAux
  };
}
if(action.type === ENROLL_USERS){
  let arryAux = action.payload.data.map(e => e.idClass);
  return {
    ...state,
    error: null,
    classEnrollList: arryAux
  };
}
if(action.type === GET_USERS_CLASS){
  return {
    ...state,
    error: null,
    usersClass: action.payload.data
  };
}
  return state;
}

export default rootReducer;
