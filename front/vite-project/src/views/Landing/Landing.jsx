import React from "react";
import { Link } from "react-router-dom";


export default function Landing() {
    return (
        <div>
            <h1>Welcome</h1>
            <h2>Es tu primera vez en nuestra App</h2>
            <Link to="/register">
                <span>Registrate</span>
            </Link>            
            <h2>Ya tienes una cuenta</h2>
            <Link to="/login">
                <span>Login</span>                
            </Link>
        </div>
    )
}