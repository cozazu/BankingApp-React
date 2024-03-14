import styles from "./AppointmentCard.module.css"
import React from "react";

export default function AppointmentCard({
    id,
    date,
    time,
    status,
    description,
}) {

    date = new Date(date);
    const formatDate = `
        ${date.getDate()}/
        ${date.getMonth() +1}/
        ${date.getFullYear()}
    `;  

    return (
        <div className={styles.cardContainer} >
            <span>{formatDate}</span>
            <span>{time} hs</span>
            <span>{description}</span>
            <span className={status === "active" ? styles.active : styles.cancelled}> {status === "active" ? "Activo (cancelar)" : "Cancelado"}</span>
        </div>
    );
}