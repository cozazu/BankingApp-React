import styles from "./AppointmentCard.module.css"
import React from "react";

export default function AppointmentCard({
    id,
    date,
    time,
    status,
    description,
    handleAppointmentCancel
}) {

    date = new Date(date);
    const formatDate = `
        ${date.getDate()}/
        ${date.getMonth() +1}/
        ${date.getFullYear()}
    `;
    const handleClick = () => {
        if(window.confirm(`¿Deseas cancelar la reserva del día ${formatDate} a las ${time} hs`)) {
            handleAppointmentCancel(id);
        }
    };  

    return (
        <div className={styles.cardContainer} >
            <span>{formatDate}</span>
            <span>{time} hs</span>
            <span>{description}</span>
            {status === "active" ? (
                <span className={styles.active} onClick={handleClick}>Activo (cancelar)</span>
            ) : (
                <span className={styles.cancelled}>Cancelado</span>
            )}    
        </div>
    );
}