import React from "react";

export default function Plan() {
return (
    <div className="p-4">
      <div className="box-border h-auto w-full max-w-md p-4 border-2">
        <div className="flex flex-col items-center">
          <div className="pb-4">
            <img
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/250548834_1520961794937296_4338138444158639331_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHGQDSm8iuZylNgFD9GNSJ9IGyDXnC7pH0gbINecLukfV6dDcejlvap8mCpA81uRA9n4m_3xqpLuwjG7FEbgeGx&_nc_ohc=VLuWOIZOfccAX_YfzA-&_nc_ht=scontent-bog1-1.xx&oh=00_AfB5H2dDjFovQLqn4c7X6cZmCQKtXG1k6CN-N_dAaejjxg&oe=641599DD"
                className="object-contain h-50 w-40"
                alt=""
              />
          </div>
          <div className="text-center">
            <h1 className="text-2xl">Plan x</h1>
            <p className="text-xl font-light text-justify text-gray-700">
              
            ¿Te gustaría aprender a bailar CHAMPETA? Este sábado 9 de octubre a
            las 4:30 tendremos un taller con nuestrxs mejores entrenadorxs! Ven
            a Equilibrium Pole Fitness. 💜💜💜
            </p>
          </div>
          <div className="pt-4 inline-flex items-center justify-center flex-col gap-5">
            <form method="get" action="/show_plan">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
              >
              Ver
              </button>
            </form>
            <form method="get" action="/select_plan">
              <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
              Inscribirse
              </button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}