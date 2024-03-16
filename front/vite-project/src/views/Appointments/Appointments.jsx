import React, {  useEffect,  useState } from "react";
import axios from "axios";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";
/* const GETAPPOINTMENTS_URL = "http://localhost:3000/appointments" */
const GETUSERBYID_URL = "http://localhost:3000/users/";


export default function Appointments() {
    /* const [appointments, setAppointments] = useState([]); */
    const actualUserId = useSelector(state => state.actualUser?.userData?.user?.id);

    const appointments = useSelector((state) => state.actualUser.userAppointments);

    const dispatch = useDispatch();

    useEffect(() => {
        axios
        .get(GETUSERBYID_URL + actualUserId)
        .then(response => response.data.appointments)
        .then(appointments => dispatch(setUserAppointments(appointments)))
        .catch(error => console.log(error.message));    
    }, [actualUserId, dispatch]);

    const CANCEL_URL = "http://localhost:3000/appointments/cancel";
    const handleAppointmentCancel = (appointmentId) => {
        axios
            .put(CANCEL_URL + appointmentId)
            .then(response => response.data)
            .then(data => {
                axios
                    .get(GETUSERBYID_URL + actualUserId)
                    .then(response => response.data.appointments)
                    .then(appointments => dispatch(setUserAppointments(appointments)))
                    .catch(error => console.log(error.message)); 
            })
            .catch(error => alert(`Error al cancelar reserva: ${error?.response?.data?.message}`));
    }
    

    return (
        <div>
            <h1>Mis Reservas</h1>
            {
                appointments.length 
                ?
                    appointments.map(appointment => (
                        <AppointmentCard
                            key={appointment.id}
                            id={appointment.id}
                            date={appointment.date}
                            time={appointment.time}
                            status={appointment.status}
                            description={appointment.description}
                            handleAppointmentCancel={handleAppointmentCancel}
                        />
                    ))
                : <p>No hay reservas...</p>                
            }
        </div>
    )
}
