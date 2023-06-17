import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export default function UserData(props){
    return (
        <div className="h-auto">
            <div className="p-6 h-3/5 max-h-full overscroll-contain">
                <div className="p-4">
                    <div className="relative box-border h-auto w-32 min-w-full hover:max-w-full border-2">
                        <div className="flex justify-center pt-4">
                        <Avatar sx={{ width: 100, height: 100, bgcolor: deepPurple[500] }}> {props?.person?.namePerson?props?.person?.namePerson[0]:"NN"}</Avatar>
                        </div>
                        <Link to ={`/profile/${props?.person?.idPerson}`} className='no-underline' >
                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <button className="col-start-2 w-full px-3 py-1 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                                Editar perfil
                            </button>
                        </div>
                        </Link>
                        <div className="flex grid grid-rows-6 gap-2 p-4">
                            <h4>Nombre: {props?.person?.namePerson}</h4>
                            <h4>Apellido: {props?.person?.lastNamePerson}</h4>
                            <h4>Fecha de Nacimiento: {props?.person?.birthDatePerson}</h4>
                            <h4>Correo: {props?.person?.emailPerson}</h4>
                            <h4>Telefono: {props?.person?.phonePerson}</h4>
                            <h4>Rol: {props?.person?.rolType}</h4>
                        </div>
                        <div className="absolute left-3 -top-3 bg-white">
                            <h2 className="text-3xl text-center text-purple-700">Información Personal</h2>
                        </div>
                    </div>
                </div>
                {/**<div className="p-4">
                    <div className=" relative box-border h-auto w-32 min-w-full hover:max-w-full p-4 border-2">
                        <div className="absolute left-3 -top-3 bg-white">
                            <h2>Datos Financieros</h2>
                        </div>
                    </div>
    </div>*/}
            </div>
        </div>
    );
}