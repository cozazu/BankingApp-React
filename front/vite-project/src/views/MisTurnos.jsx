import {useState} from "react";
import turnos from "../helpers/myTurns";
import Appointments from "./Appointments/Appointments";

const MisTurnos = () => {
    const [arrayTurnos, setTurnos] = useState(turnos);
    return (
        <>
            <h1>Mis Turnos</h1>
            
            <div>
                {arrayTurnos.map((turno) => {
                        return <Appointments key={turno.id} turno={turno}/>;
                })}
            </div>
        </>        
    );
}

export default MisTurnos;

/* 
import Appointment from "../components/Appointment";
import turnos from "../helpers/myTurns";
import { useState } from "react";
import styles from "./MisTurnos.module.css";
const MisTurnos = () => {
  const [arrayturnos, setTurnos] = useState(turnos);
  return (
    <>
      <h1 className={styles.title}>Mis Turnos</h1>
      <ul className={styles.Appointmentscontainer}>
        {arrayturnos.map((turno) => (
          <Appointment turno={turno} />
        ))}
      </ul>
    </>
  );
};

export default MisTurnos; */

