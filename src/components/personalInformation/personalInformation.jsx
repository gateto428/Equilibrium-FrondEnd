import React, {useState, useEffect} from 'react';
import Navbar from './navBarUser';
import UserData from './userData';
import DetailPlan from './detailPlan';
import { useDispatch, useSelector } from 'react-redux'
import { getUserByID, getPlanByUserId, getClassUser, getenrollClass } from '../../redux/actions';

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const [person, setPerson] = useState({
    idPerson: "",
    namePerson: "",
    lastNamePerson: "",
    birthDatePerson: "",
    emailPerson: "",
    phonePerson: "",
    pass: "",
    rolType: "CLIENT",
    isActive: "",
  });
  const user = useSelector((state) => state.user);
  const plan = useSelector((state) => state.plan);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user?.rolType !== 'CLIENT') window.location.href = "/";
    dispatch(getUserByID(user?.idPerson, user?.pass));
    dispatch(getPlanByUserId(user?.idPerson, user?.pass));
    dispatch(getClassUser(user?.idPerson, user?.pass))
    dispatch(getenrollClass(user?.idPerson, user?.pass))
    // eslint-disable-next-line
  }, [dispatch, !plan]);


  useEffect(() => {
    if (user) {
      setPerson(user);
    }
    // eslint-disable-next-line
  }, [dispatch, user]);

    return (
            <div class="max-w-full min-w-sd max-h-full">
              <Navbar/>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                <div className='row-span-3 col-span-2 max-w-full'>
                  <div className="flex col-span-2 row-span-1 p-6 max-w-full max-h-6">
                    <h1 className="font-sans text-3xl hover:texto-2xl">Detalles del usuario</h1>
                  </div>
                  <UserData person={person}/>
                </div>
                <div className="row-span-3 col-span-2 max-w-full">
                  <DetailPlan plan={plan}/>
                </div> 
              </div>
              
              
            </div> 
        );
}


export default PersonalInformation;