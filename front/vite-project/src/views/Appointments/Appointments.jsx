import React, {  useEffect,  useState } from "react";
import axios from "axios";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";

const GETAPPOINTMENTS_URL = "http://localhost:3000/appointments"

export default function Appointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get(GETAPPOINTMENTS_URL)
        .then(response => response.data)
        .then(appointmentsFromDB => setAppointments(appointmentsFromDB))
        .catch(error => console.log(error.message));    
    }, []);
    

    return (
        <div>
            <h1>Mis Reservas</h1>
            {
                appointments.map(appointment => (
                    <AppointmentCard
                        key={appointment.id}
                        id={appointment.id}
                        date={appointment.date}
                        time={appointment.time}
                        status={appointment.status}
                        description={appointment.description}
                    />
                ))                
            }
        </div>
    )
}
