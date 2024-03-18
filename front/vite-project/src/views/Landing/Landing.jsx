import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"

export default function Landing() {
    return (
        <div className={styles.welcomecontainer}>
            <h1>Welcome</h1>
            <hr className={styles.hrCustom} />
            <div className={styles.buttonContainer}>
                <h3>Es tu primera vez en nuestra App</h3>            
                <Link to="/register">
                    <button>Registrate</button>
                </Link>            
                <h3>Ya tienes una cuenta</h3>
                <Link to="/login">
                    <button>Login</button>                
                </Link>
            </div>    
        </div>
    )
}