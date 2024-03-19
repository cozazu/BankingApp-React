import axios from "axios";
import React, { useState } from "react";
import styles from "./AppointmentForm.module.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const POST_APPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

export default function AppointmentForm(props) {

    const navigate = useNavigate();

    const userId = useSelector((state) => state.actualUser?.userData?.user?.id)

    const initialState = {
        date: "",
        time:"",
        description: "",
    };

    const [appointment, setAppointment] = useState(initialState);
    const [errors, setErrors] = useState({date: "Debe ingresar una fecha"});

    const validateAppointment = ({date, time, description}) => {
        const errors = {};
        if(!date) errors.date = "Ingresar fecha";
        if(!time) errors.time = "Ingresar horario";
        if(!description) errors.description = "Ingresar description";
        return errors;
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const newAppointment = {
            date: appointment.date,
            time: appointment.time,
            description: appointment.description,
            userId
        }

        axios
            .post(POST_APPOINTMENT_URL, newAppointment)
            .then(({data}) => data)
            .then((appointmentInDB) => {
                alert(`Usuario ha sido creada la nueva reserva:
                Fecha: ${appointmentInDB.date}, hora: ${appointmentInDB.time}`);
                navigate("/appointments");
                console.log(appointmentInDB)
            })      
            .catch((error) => alert(error.message));        
    };

    const isDiaHabil = (fecha) => {
        const diaSemana = new Date(fecha).getDay();
        return diaSemana >= 0 && diaSemana <= 4; 
    };
    
    const handleChange = (event) => {
        const { value, name } = event.target;
    
        const currentDate = new Date().toISOString().split('T')[0];
        if (name === "date") {
            if (value < currentDate || !isDiaHabil(value)) {
                return; 
            }
        }
    
        setAppointment({ ...appointment, [name]: value });
    
        setErrors(validateAppointment({...appointment, [name]: value }));
    };


    const formData = [
        { label: "Fecha: ", name: "date", type: "date", placeholder: "Ingrese fecha..." },
        { label: "Horario: ", name: "time", type: "time", placeholder: "Ingrese horario..." },
        { label: "Descripción: ", name: "description", type: "select", options: ["Apertura de una cuenta bancaria", "Obtención de un préstamo", "Asesoramiento financiero", "Actualización de información"] },
    ]
    
    return (    
        <div className={styles.formContainer}>
            <h2 className="text-center">Nueva Cita</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                {
                    formData.map(({ label, name, type, placeholder, options }) => {
                        return (
                            <div key={name} className={styles.inputContainer}>
                                <label htmlFor={name}>{label}</label>
                                {type === "select" ? (
                                    <select id={name} name={name} value={appointment[name]} onChange={handleChange}>
                                        <option value="">{placeholder}</option>
                                        {options.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input type={type} id={name} name={name} value={appointment[name]} placeholder={placeholder} onChange={handleChange} min={new Date().toISOString().split("T")[0]} />
                                )}
                                {errors[name] && <span className={styles.errorText}>{errors[name]}</span>}
                            </div>
                        );
                    })
                }
                <button 
                    type="submit"
                    disabled={Object.keys(appointment)
                        .some((e) => !appointment[e])    
                    }
                    className={styles.submitButton}                
                >Crear Reserva
                </button>
            </form>
        </div>
    )
}