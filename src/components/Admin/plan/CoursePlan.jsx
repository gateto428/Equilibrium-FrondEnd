import React from "react";
import Checkbox from '@mui/material/Checkbox';

export default function Course(props) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="p-4">
      <div className=" relative box-border h-auto w-32 min-w-full hover:max-w-full p-4 border-2">
        <div className="absolute left-3 -top-3 bg-white">
          <h2>Curso</h2>
        </div>
        <div className="" style={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between'
        }}>
          <div className="pr-4 basis-1/4">
            <img
              src={"/imges/logo.jpg"}
              className=" object-contain h-50 w-40 "
              alt=""
            />
          </div>
          <div className="w-9/12">
            <h1 className="text-center text-2xl">{props?.course?.nameCourse}</h1>
            <p className="basis-2/4 text-xl font-light text-justify text-gray-700">
              {props?.course?.descriptionCourse}
            </p>
          </div>
          <div className="basis-1/4 pt-4 pl-0 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
          <Checkbox
                {...label}
                value={props?.course?.idCourse}
                onChange = {props.handleStateChange}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
