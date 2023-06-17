import React, { Component } from "react";
import Navbar from "../home/navBarHome";
import Course from "./course";

export class CourseList extends Component {
  render() {
    return (
      <div className="overflow-auto max-w-full min-w-sd max-h-full">
        <Navbar />
        <div className="flex justify-center pt-8 text-4xl font-Monserrat text-center text-purple-700 ">
          <h1>Cursos</h1>
        </div>
        <div className="">
          <div className="pl-10 pr-10">
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
          </div>
        </div>
        <div className="bg-equilibrium h-48 relative p-2"></div>
      </div>
    );
  }
}
export default CourseList;
