import React, {useEffect} from 'react';
import Navbar from "../personalInformation/navBarUser";
import Planning from './planning';
import DetailPay from './detailPay';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { getAllPlanes } from '../../redux/actions';

const SelectPLan = (props) => {
  const dispatch = useDispatch();
  const getPlanes = async(offset, limit, token) =>{
    //await dispatch(getTotalPlanes(offset, limit, token));
    await dispatch(getAllPlanes(offset, limit, token))
  }

  useEffect(() => {
    getPlanes(0, 5, JSON.parse(localStorage.getItem("user"))?.pass);

    // eslint-disable-next-line
  }, []);
        return (
            <div className="max-w-full min-w-sd max-h-full">
              <Navbar />
              <div className="grid grid-rows-3 grid-cols-4 gap-4 max-w-full">
                <div className="row-span-3 col-span-2 max-w-full ml-auto">
                  <br />
                  <div className="flex col-span-2 row-span-1 p-6 max-w-full max-h-6 justify-center items-center">
                    <h1 className="text-3xl text-center text-purple-700">
                      Selecciona el plan de pago
                    </h1>
                  </div>
                  <br />
                  <div>
                  {props?.planes?.map((plan, index) => (
                    <React.Fragment key={plan?.idPlan}>
                      <Planning plan={plan} idPerson={JSON.parse(localStorage.getItem("user"))?.idPerson} token={JSON.parse(localStorage.getItem("user"))?.pass} />
                      {index !== props.planes.length - 1 && <br />}
                    </React.Fragment>
                  ))}

                  </div>
                </div>
                <div className="row-span-3 col-span-2 max-w-full">
                  <DetailPay />
                </div>
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

export default connect(mapStateToProps, null)(SelectPLan);