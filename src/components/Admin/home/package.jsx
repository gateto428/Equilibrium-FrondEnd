import React from "react";

export default function Package() {
  return (
    <div className="box-border h-120 w-64 p-4 border-2">
      <img  src={"/imges/logo.jpg"} alt="description"
        class="object-contain h-48 w-96"
      />
      <p className="mt-8 text-xs font-light text-center text-gray-700">
        ¿Te gustaría aprender a bailar CHAMPETA? Este sabado 9 de octubre a las
        4:30 tendremos un taller con nuestrxs mejores entrenadorxs! Ven a
        Equilibrium Pole Fitness. 💜💜💜
      </p>
      <div className="p-2 inline-flex items-center justify-center">
        <button className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
          Inscribete ya
        </button>
      </div>
    </div>
  );
}
