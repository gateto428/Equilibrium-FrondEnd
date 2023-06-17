import React from 'react';
export default function DetailPlan(props){
    return (
        <div className='bg-white'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-2 rounded-lg shadow-md lg:max-w-xl">
                    <h1 className="text-3xl text-center text-purple-700">
                        Detalles de tu plan
                    </h1>
                    <h2 className="text-2xl text-purple-600">
                    {props?.plan?.namePlan?props?.plan?.namePlan:"No hay plan Activo"}: {props?.plan?.descriptionPlan}.
                    <br /> 
                    {props?.plan?.namePlan?`  costo: $ ${props?.plan?.costPlan}`:null}
                    </h2>
                </div>
            </div>
        </div> 
        );
}