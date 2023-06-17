import axios from 'axios';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const GET_ALL_COURSE = 'GET_ALL_COURSE';
export const GET_TOTAL_COURSE = 'GET_TOTAL_COURSE';
export const GET_COURSE = 'GET_COURSE';
export const GET_PERSON = 'GET_PERSON';
export const GET_ALL_PLAN = 'GET_ALL_PLAN';
export const GET_PLAN = 'GET_PLAN';
export const GET_TOTAL_PLAN = 'GET_TOTAL_PLAN';
export const GET_TOTAL_USERS = 'GET_TOTAL_USERS';
export const ENROLL_USERS = 'ENROLL_USERS';
export const ERROR = 'ERROR';
export const GET_USERS_CLASS = 'GET_USERS_CLASS'
export const GET_ALL_CLASS = 'GET_ALL_CLASS';
export const HOST  = 'http://ec2-3-129-69-86.us-east-2.compute.amazonaws.com:8080/api/v1/equilibrium'



export function login(credentials){
    return async function(dispatch){
        try {
            let response = await (axios.post(HOST + '/person/login', credentials))
            return dispatch({type: LOGIN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function registerUser(data){
    return async function(dispatch){
        try {
            let response = await (axios.post(HOST + '/person/singin', data))
            return dispatch({type: REGISTER, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getAllCourse(offset, limit, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/course/all?offset=${offset}&limit=${limit}`, config))
            return dispatch({type: GET_ALL_COURSE, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function deteleCourse(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.delete(HOST + `/course?id-course=${id}`, config))
            response = await (axios.get(HOST + `/course/all?offset=0&limit=10`, config))
            return dispatch({type: GET_ALL_COURSE, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function saveCourse(course, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.post(HOST + `/course`,  course,config))
            response = await (axios.get(HOST + `/course/all?offset=0&limit=10`, config))
            return dispatch({type: GET_ALL_COURSE, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}


export function saveClass(aclass,selectedDateTime, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.post(HOST + `/classP`, hourBuilder(aclass, selectedDateTime) ,config))
            response = await (axios.get(HOST + `/classP/all?offset=0&limit=100`, config))
            return dispatch({type: GET_ALL_CLASS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

const hourBuilder = (aclass, selectedDateTime) => {
    let d = aclass.dateClass;
    var datestring = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)
    return {...aclass, idCourse: parseInt( aclass.idCourse), dateClass: datestring, hourClass: `${selectedDateTime.hour}:${selectedDateTime.minutes}:00`}
  }

export function getTotalCourse(token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/course/count` ,config))
            return dispatch({type: GET_TOTAL_COURSE, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getCourse(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/course?id-course=${id}` ,config))
            return dispatch({type: GET_COURSE, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}


export function updateCourse(course, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.put(HOST + `/course`,course ,config))
            response = await (axios.get(HOST + `/course/all?offset=0&limit=10`, config))
            return dispatch({type: GET_ALL_COURSE, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function updateC(course, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.put(HOST + `/plan`,course ,config))
            response = await (axios.get(HOST + `/plan/all?offset=0&limit=10`, config))
            return dispatch({type: GET_ALL_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getUserByID(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/person/profile?id-person=${id}` ,config))
            return dispatch({type: GET_PERSON, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function updateUser(data, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.put(HOST + '/person/profile', data, config))
            response = await (axios.get(HOST + `/person/profile?id-person=${data.idPerson}` ,config))
            return dispatch({type: GET_PERSON, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function savePlan(plan, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.post(HOST + `/plan`,plan ,config))
            response = await (axios.get(HOST + `/plan/all?offset=0&limit=10`, config))
            return dispatch({type: GET_ALL_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getPlan(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/plan?id-plan=${id}` ,config))
            return dispatch({type: GET_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function detelePlan(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.delete(HOST + `/plan?id-plan=${id}`, config))
            response = await (axios.get(HOST + `/plan/all?offset=0&limit=10`, config))
            return dispatch({type: GET_ALL_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getTotalPlanes(token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/plan/count` ,config))
            return dispatch({type: GET_TOTAL_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getAllPlanes(offset, limit, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/plan/all?offset=${offset}&limit=${limit}`, config))
            return dispatch({type: GET_ALL_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getAllUsers(offset, limit, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/person/all?offset=${offset}&limit=${limit}`, config))
            return dispatch({type: GET_TOTAL_USERS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function deleteUsers(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            await (axios.delete(HOST + `/person?id-person=${id}`, config))
            let response = await (axios.get(HOST + `/person/all?offset=0&limit=10`, config))
            return dispatch({type: GET_TOTAL_USERS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function activateUser(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            await (axios.put(HOST + `/person?id-person=${id}`, null, config))
            let response = await (axios.get(HOST + `/person/all?offset=0&limit=10`, config))
            return dispatch({type: GET_TOTAL_USERS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function payPlanUser(pay, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
             await (axios.post(HOST + `/pay`, pay,config))
            let response = await (axios.get(HOST + `/plan/all?offset=0&limit=10`, config))
            return dispatch({type: GET_ALL_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function deleteCoursePlan(request, id, token){
    const config = {
        headers:{
          token: token,
        },
        data: {
            idPlan: request.idPlan,
            idCourse: request.idCourse
        }
      };
    return async function(dispatch){
        try {
            await (axios.delete(HOST + '/plan/delete-course', config))
            let response = await (axios.get(HOST + `/plan?id-plan=${id}` ,config))
            return dispatch({type: GET_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function addCoursePlan(request, id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            await (axios.post(HOST + '/plan/add-course', request, config))
            let response = await (axios.get(HOST + `/plan?id-plan=${id}` ,config))
            return dispatch({type: GET_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getPlanByUserId(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/plan/user?id-person=${id}` ,config))
            return dispatch({type: GET_PLAN, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getClassAdmin(offset, limit, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/classP/all?offset=${offset}&limit=${limit}`, config))
            return dispatch({type: GET_ALL_CLASS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getClassUser(iduser, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/classP/user?id-person=${iduser}`, config))
            return dispatch({type: GET_ALL_CLASS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function deleteAdminClass(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.delete(HOST + `/classP?id-class=${id}`, config))
            response = await (axios.get(HOST + `/classP/all?offset=0&limit=100`, config))
            return dispatch({type: GET_ALL_CLASS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}


export function enrollClass(enroll, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.post(HOST + `/classP/user`, enroll, config))

            response = await (axios.get(HOST + `/classP/inscription?id-person=${enroll.studentId}`, config))
            console.log(response.data)
            return dispatch({type: ENROLL_USERS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getenrollClass(id, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/classP/inscription?id-person=${id}`, config))
            return dispatch({type: ENROLL_USERS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function unrollClass(enroll, token){
    const config = {
        headers:{
          token: token,
        },
        data: {
            studentId: enroll.studentId,
            idClass: enroll.idClass
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.delete(HOST + `/classP/user`, config))
            response = await (axios.get(HOST + `/classP/inscription?id-person=${enroll.studentId}`, config))
            return dispatch({type: ENROLL_USERS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}

export function getUsersClass(idClass, token){
    const config = {
        headers:{
          token: token,
        }
      };
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST + `/classP/all/user?id-class=${idClass}`, config))
            console.log(response.data)
            return dispatch({type: GET_USERS_CLASS, payload: response.data});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
    }
}