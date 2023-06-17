import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { payPlanUser } from '../../redux/actions';
import { Link } from 'react-router-dom';
import EPaycoButton from "./EPaycoButton";

export default function Card({ plan, idPerson, token }) {
  const dispatch = useDispatch();
  const namePlan = plan?.namePlan;
  const pricePlan = plan?.costPlan;
  const descriptionPlan = plan?.descriptionPlan;
  const idPlan = plan?.idPlan
  const isActivePlan = plan?.isActive;
  const planState = useSelector((state) => state.plan);

  const [payPlan, setPayPlan] = useState({
    idPerson: idPerson,
    idPlan: plan?.idPlan,
    dateStart: "2023-04-18",
    dateEnd: "2023-04-28",
    classTake: 0,
    payType: "CASH",
    payNumber: "N/A"
  });

  const payUser = () => {
    dispatch(payPlanUser(payPlan, token));
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-2 grid grid-cols-4 gap-2">
      <div  className="col-span-3">
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex items-center justify-start">
            <img src={"/imges/logo.jpg"} alt="description" className="object-contain h-80 w-80" />
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <div className="p-2 text-center">
              <p className="text-lg text-gray-700">
                {namePlan}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center space-y-2">
        <a href={`/show_plan_adm/${plan.idPlan}`} style={{ width: '130px', height: '40px' }} className=" no-underline px-2 py-1 text-white bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink flex justify-center items-center">
          Ver detalles
        </a>
        {!planState ? <EPaycoButton pricePlan={pricePlan} namePlan={namePlan} descriptionPlan={descriptionPlan} idPerson={idPerson} idPlan={idPlan} /> : ""}
        </div>
    </div>
  );
}
