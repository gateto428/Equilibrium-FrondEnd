import React from 'react';
export default function DetailPay(){
    return (
        <div className='bg-white'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-2 rounded-lg shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">
                        Detalles de Pago
                    </h1>
                    <h2 className="p-4">
                        El pago con tarjeta de crédito permite a los consumidores realizar compras en línea o en tiendas físicas de manera segura y conveniente,
                         sin tener que llevar dinero en efectivo consigo. Para realizar un pago con tarjeta de crédito, el usuario debe proporcionar los datos de su tarjeta,
                         incluyendo el número, la fecha de caducidad y el código de seguridad. La mayoría de las tarjetas de crédito también tienen límites de gastos diarios o mensuales,
                         lo que ayuda a los usuarios a mantener el control de sus finanzas. Además, muchos emisores de tarjetas de crédito ofrecen programas de recompensas y puntos de fidelidad, lo que permite a los usuarios obtener beneficios adicionales por sus compras.
                    </h2>
                </div>
            </div>
        </div> 
        );
}