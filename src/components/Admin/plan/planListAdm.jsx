import React, { useEffect } from "react";
import Navbar from "../home/navBarHomeAdm";
import Plan from "./planAdm";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { getAllPlanes } from '../../../redux/actions';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PlanList = (props) => {
  const dispatch = useDispatch();
  const getPlanes = async(offset, limit, token) =>{
    //await dispatch(getTotalPlanes(offset, limit, token));
    await dispatch(getAllPlanes(offset, limit, token))
  }

  const handleChange = (event, value) => {
    value = value-1
    getPlanes(value*5, 5, JSON.parse(localStorage.getItem("user"))?.pass);
  };

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("user"))?.rolType !== 'ADMINISTRATOR') window.location.href = "/";
    getPlanes(0, 5, JSON.parse(localStorage.getItem("user"))?.pass);
    
    // eslint-disable-next-line
  }, []);

    return (
      <div className="max-w-full min-w-sd max-h-full">
        <Navbar />
        <div className="flex justify-center pt-8 text-4xl font-Monserrat text-center text-purple-700 ">
          <h1 className="text-3xl font-semibold text-center text-purple-700">Planes</h1>
        </div>
        <div className="pt-2 font-Monserrat text-right text-purple-700 mr-20">
          <form method="get" action="/add_planes">
            <button
              type="submit"
              className="w-48 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
            >
              Agregar Plan
            </button>
          </form>
        </div>
        <div className="" >
          <div className="pl-10 pr-10 mb-9" style={{
          overflow: 'scroll'
          }}>
            {props?.planes?.map(plan => {
              return <Plan key={plan?.idPlan} plan={plan}/>
            })}
          </div>
        </div>
        <div className="bg-gradient-to-t from-purple  h-12 relative p-2 mt-9" style={{
          position: 'fixed',
          bottom: '0',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'center',
        }}>
          <Stack spacing={2}>
                <Pagination count={Math.ceil(props.totalPlanes/5)} color="primary" onChange={handleChange}/>
          </Stack>
        </div>
      </div>
    );
}


function mapStateToProps(state){
  return{
    planes: state.planes,
    totalPlanes: state.totalPlanes
  }
}
export default connect(mapStateToProps, null)(PlanList);
