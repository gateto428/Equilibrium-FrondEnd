import React from "react";

export default function Package() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 mx-auto">
      <img  src={"/imges/logo.jpg"} alt="description" 
        className="object-contain h-56 sm:h-56 sm:w-96 rounded-t-lg"
      />
      <div className="p-4 text-center">
        <p className="mt-2 text-sm font-light text-center text-gray-700">
          ¿Te gustaría aprender a bailar CHAMPETA? Este sabado 9 de octubre a las
          4:30 tendremos un taller con nuestrxs mejores entrenadorxs! Ven a
          Equilibrium Pole Fitness. 💜💜💜
        </p>
        <br />
        <div className="p-2 inline-flex items-center justify-center">
          <button className="w-full sm:w-36 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
            Inscribete ya
          </button>
        </div>
      </div>
    </div>
  );
}
