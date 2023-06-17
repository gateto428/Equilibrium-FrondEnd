import React, { useEffect, useRef } from "react";
import { HOST } from '../../redux/actions';

export default function EPaycoButton({ pricePlan, namePlan, descriptionPlan, idPerson, idPlan }) {
  const containerRef = useRef(null);
  const  HOSTA = "http://localhost:3000/personalInformation"
  useEffect(() => {
    const script = document.createElement("script");
    const ruta = `${HOST}/pay/confirmation?id-person=${idPerson}&id-plan=${idPlan}`;
    script.src = "https://checkout.epayco.co/checkout.js";
    script.async = true;
    script.setAttribute("data-epayco-key", "2747e25e5f813428067f4e9c7d4b1af7");
    script.setAttribute("class", "epayco-button");
    script.setAttribute("data-epayco-amount", pricePlan.toString());
    script.setAttribute("data-epayco-tax", "0.00");
    script.setAttribute("data-epayco-tax-ico", "0.00");
    script.setAttribute("data-epayco-tax-base", pricePlan.toString());
    script.setAttribute("data-epayco-name", namePlan.toString());
    script.setAttribute("data-epayco-description", descriptionPlan.toString());
    script.setAttribute("data-epayco-currency", "cop");
    script.setAttribute("data-epayco-country", "CO");
    script.setAttribute("data-epayco-test", "true");
    script.setAttribute("data-epayco-external", "true");
    script.setAttribute("data-epayco-confirmation", ruta);
    script.setAttribute("data-epayco-acepted", HOSTA);
    script.setAttribute("data-epayco-response", HOSTA);
    script.setAttribute("data-epayco-rejected", HOSTA);
    script.setAttribute("data-epayco-pending", HOSTA);
    script.setAttribute(
      "data-epayco-button",
      "https://multimedia.epayco.co/dashboard/btns/btn5.png"
    );

    const container = containerRef.current;
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, [pricePlan, namePlan, descriptionPlan]);

  return (
    <div className="flex justify-center">
      <div ref={containerRef}></div>
    </div>
  );
}
