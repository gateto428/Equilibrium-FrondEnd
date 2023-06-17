import React, { useEffect, useState } from "react";
import Navbar from "../home/navBarHomeAdm";
import User from "./user";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../../redux/actions';

const UserList = (props) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const getUsers = async (offset, limit, token) => {
    await dispatch(getAllUsers(offset, limit, token));
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.rolType !== 'ADMINISTRATOR') window.location.href = "/";
    getUsers(0, 5, JSON.parse(localStorage.getItem("user"))?.pass);

    // eslint-disable-next-line
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = props.userList.filter(user => {
    // Filtrar por número de cédula o nombre
    return (
      user.idPerson.includes(filter) ||
      user.namePerson.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="overflow-auto max-w-full min-w-sd max-h-full">
      <Navbar />
      <div className="flex justify-center pt-8 text-4xl font-Monserrat text-center text-purple-700 ">
        <h1 className="text-3xl font-semibold text-center text-purple-700">Usuarios</h1>
      </div>
      <div className="pt-2 font-Monserrat text-right text-purple-700 mr-20">
        <form method="get" action="/Create_user">
          <button
            type="submit"
            className="w-48 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
          >
            Agregar Usuario
          </button>
        </form>
      </div>
      <div className="">
        <div className="pl-10 pr-10">
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filtrar por cédula o nombre"
            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          />
          {filteredUsers.map(user => (
            <User key={user?.idPerson} user={user} planes={props.planes} />
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userList: state.userList,
    planes: state.planes // Agregar los planes al estado
  }
}

export default connect(mapStateToProps, null)(UserList);
