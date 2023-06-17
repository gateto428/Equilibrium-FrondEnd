import React, { Component } from "react";
import Navbar from "../personalInformation/navBarUser";
import Plan from "./plan";

export class PlanList extends Component {
  render() {
    return (
      <div className="overflow-auto max-w-full min-w-sd max-h-full">
        <Navbar />
        <div className="flex justify-center pt-8 text-4xl font-Monserrat text-center text-purple-700 ">
          <h1>Planes</h1>
        </div>
        <div className="flex overflow-x-scroll pt-4 pb-4">
          <Plan />
          <Plan />
          <Plan />
          <Plan />
          <Plan />
        </div>
        <div className="bg-equilibrium h-48 relative p-2"></div>
      </div>
    );
  }
}

export default PlanList;
