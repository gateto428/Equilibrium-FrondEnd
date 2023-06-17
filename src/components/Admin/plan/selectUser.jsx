import React from "react";

export default function SelectUser() {
  return (
    <div className="p-4">
      <div className=" relative box-border h-auto w-32 min-w-full hover:max-w-full p-4 border-2">
        <div className="absolute left-3 -top-3 bg-white">
          <h2 className="text-3xl font-semibold text-center text-purple-700">Usuario</h2>
        </div>
        <div className="flex flex-row">
          <div className="pr-4 basis-1/4">
            <img
              src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/250548834_1520961794937296_4338138444158639331_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHGQDSm8iuZylNgFD9GNSJ9IGyDXnC7pH0gbINecLukfV6dDcejlvap8mCpA81uRA9n4m_3xqpLuwjG7FEbgeGx&_nc_ohc=VLuWOIZOfccAX_YfzA-&_nc_ht=scontent-bog1-1.xx&oh=00_AfB5H2dDjFovQLqn4c7X6cZmCQKtXG1k6CN-N_dAaejjxg&oe=641599DD"
              className=" object-contain h-50 w-40 "
              alt=""
            />
          </div>
          <div>
            <p className="basis-2/4  text-md font-light text-justify text-gray-700">Nombre: </p>
            <p className="basis-2/4  text-md font-light text-justify text-gray-700">Apellido: </p>
            <p className="basis-2/4  text-md font-light text-justify text-gray-700">Correo: </p>
            <p className="basis-2/4  text-m font-light text-justify text-gray-700">Telefono: </p>
          </div>
          <div className="basis-1/4 pt-4 pl-2 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5 absolute inset-y-8 right-10">
            <form method="get" action="/">
              <button type="submit" className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                Seleccionar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}