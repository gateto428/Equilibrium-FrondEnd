import React, { Component } from "react";
import Navbar from './navBarUser';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { connect } from "react-redux";
import { enrollClass, unrollClass } from '../../redux/actions';
const localizer = momentLocalizer(moment)
// 

class horario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myEventsList: props.classListAdmin,
    };
  }

  render() {
  const { myEventsList } = this.state;

  const handleInscribirse = (event) => {
    // Código del evento al hacer clic en "Inscribirse"
    const user = JSON.parse(localStorage.getItem("user"));
    this.props.enrollClass({
      "studentId": user.idPerson,
      "idClass": event.idClass
    }, user?.pass)
  };

  const handleUnroll = (event) => {
    // Código del evento al hacer clic en "Inscribirse"
    const user = JSON.parse(localStorage.getItem("user"));
    this.props.unrollClass({
      "studentId": user.idPerson,
      "idClass": event.idClass
    }, user?.pass)
  };

  const renderEvent = ({ event }) => {
    return (<div className="event-container">
        <strong className="event-title">{event.title}</strong>
        <div className="button-container flex justify-between">
        {!this.props.classEnrollList.includes(event.idClass)?(<button
            className="add-event-button bg-white rounded-lg border border-gray-300 px-4 py-2"
            onClick={() => handleInscribirse(event)}
            style={{ color: "black" }}
          >
            Inscribirse
          </button>):(<button
            className="add-event-button bg-white rounded-lg border border-gray-300 px-4 py-2"
            onClick={() => handleUnroll(event)}
            style={{ color: "black" }}
          >
            Ya no podre asistir
          </button>)}
        </div>
      </div>
    );
  };

  return (
  <div style={{height:`${600}px`}} className="bigCalendar-container">
    <Navbar/>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      
      messages={{
              next: "sig",
              previous: "ant",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día"
            }}
      components={{
        event: renderEvent,
      }}
    />
  </div>);
  }
}

function mapStateToProps(state){
  return{
    classListAdmin: state.classListAdmin,
    classEnrollList: state.classEnrollList
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    enrollClass: (enroll, token) => dispatch(enrollClass(enroll, token)),
    unrollClass: (enroll, token) => dispatch(unrollClass(enroll, token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(horario);