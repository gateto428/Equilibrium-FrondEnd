import React from "react";

export default function Planning() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-md max-w-xs p-4 grid grid-flow-col auto-cols-max">
      <img  src={"/imges/logo.jpg"} alt="description" 
        className="object-contain h-56 sm:h-32 sm:w-32 rounded-t-lg"
      />
      <div className="p-4 text-center">
        <p className="mt-2 text-sm font-light text-center text-gray-700">
          Plan Premium
        </p>
        <p></p>
        <br />
      </div>
      <div className="basis-1/4 pt-4 pl-2 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
            <form method="get" action="/selectUserPlan">
              <button type="submit" className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                Seleccionar
              </button>
            </form>
      </div>
    </div>
  );
}