import React, {useState} from 'react';
import Navbar from '../home/navBarHome';
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const  LogIn = (props) => {

    if(props.user.rolType === 'CLIENT') window.location.href = "/personalInformation";
    if(props.user.rolType === 'ADMINISTRATOR') window.location.href = "/hadm";

    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
        emailPerson: null,
        pass: null
    });

    const [error, setError] = useState({vacio: true});

    const validate = (input) =>{

        let error = {};
        if(!loginForm.emailPerson || loginForm.emailPerson === ""){
            error.emailPerson = 'Email Is required'
            return error;
        }
        // eslint-disable-next-line
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginForm.emailPerson)){
            error.emailPerson = 'Email bad format'
            return error;
        }
        if(!loginForm.pass){
            error.pass = 'Password Is required';
            return error;
        }
        // eslint-disable-next-line
        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(loginForm.pass)){
            error.pass = 'password bad format'
            return error;
        }
        return error;

     }


     const handleStateChange = (e) => {
        setError(validate(loginForm));
            setLoginForm({
                ...loginForm,
               [e.target.name]: e.target.value
            })
        setError(validate(loginForm));
     }

     const onSubmit = async (e) => {
        e.preventDefault();
        setError(validate(loginForm));
        if(Object.entries(error).length === 0){
           await  dispatch(login(loginForm));
            setLoginForm({
                emailPerson: '',
                pass: ''
            })
        }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Check the form, errors present',
            })
        }
    }

    return (
            <div className='bg-gray'>
                <Navbar/>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Ingresa
                </h1>
                <form className="mt-6" onSubmit={onSubmit}>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Correo
                        </label>
                        <input
                            type="email"
                            placeholder="abc@mailer.com"
                            value = {loginForm.emailPerson}
                            name = 'emailPerson'
                            onChange = {handleStateChange}
                            onClick = {handleStateChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <label for="email"
                            className="block text-sm font-semibold text-red">
                            {error.emailPerson}
                    </label>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="*****"
                            value = {loginForm.pass}
                            name = 'pass'
                            onChange = {handleStateChange}
                            onClick = {handleStateChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    <label for="email"
                            className="block text-sm font-semibold text-red">
                            {error.pass}
                    </label>
                    </div>
                   {/**<a href="/" className="text-xs text-purple-600 hover:underline">
                        Olvide mi contraseña
                     </a> */}
                    <div className="mt-6">
                        <button onClick = {handleStateChange} type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                            Iniciar sesión
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600">
                     ¿No tienes una cuenta?{' '}
                     <Link to="/Create_user" className="font-medium text-purple-700 underline">
                         Regístrate
                     </Link>
                </p>
            </div>
        </div>
            </div> 
        );
}
function mapStateToProps(state){
    return{
        user: state.user
    }
  }
export default connect(mapStateToProps, null)(LogIn);