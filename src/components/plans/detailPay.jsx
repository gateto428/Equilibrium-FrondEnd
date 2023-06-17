import React from 'react';
export default function DetailPay(){
    return (
        <div className='bg-white'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-2 rounded-lg shadow-md lg:max-w-xl">
                    <h1 className="text-3xl text-center text-purple-700">
                        Detalles de Pago
                    </h1>
                    <h4 className="p-2">
                        Para completar tu pago en Payco, sigue estos pasos sencillos: Selecciona tu plan y 
                        haz clic en el botón de pago. Verifica que los datos coincidan con tu plan. Ingresa 
                        la información financiera requerida de forma segura. Revisa los detalles y confirma 
                        el pago. Toma un pantallazo del comprobante para referencia. ¡Listo! Pago realizado 
                        con éxito en Payco.
                    </h4>
                </div>
            </div>
        </div> 
        );
}