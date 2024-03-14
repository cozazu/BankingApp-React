import axios from "axios";
import React, { useState } from "react";

const POST_USERLOGIN_URL = "http://localhost:3000/users/login";

export default function Login () {

    const initialState = {
        username: "",
        password: "",        
    };

    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const validateUser = ({ username, password }) => {
        const errors = {};
        if(!username) errors.username = "Ingresar username";
        if(!password) errors.password = "Ingresar password";
        return errors;
    };

    /* 

        const newUser = {
            name: user.name, 
            email: user.mail, 
            birthdate: user.birthdate, 
            nDni: user.nDni, 
            username: user.username, 
            password: user.password
        }; */

        /* 
 */
    const handleChange = (event) => {
        const { value, name } = event.target;
        setUser({...user, [name]: value});
        setErrors(validateUser({...user, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(POST_USERLOGIN_URL, user)
            .then(({data}) => {
                alert(`Usuario logueado...`);
                setUser(initialState);
            })      
            .catch((error) => alert(`Acceso denegado: ${error?.response?.data?.message}`));        
    };

    /* const handleReset = (event) => {
        event.preventDefault();
        setUser(initialState);
    }; */

    const formData = [
        { label: "Nombre de usuario: ", name: "username", type: "text", placeholder: "Ingrese nombre de usuario..." },
        { label: "Contraseña: ", name: "password", type: "password", placeholder: "Ingrese password..." },
    ];

    return (    
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {
                    formData.map(({ label, name, type}) => {
                        return (
                            <div key={name}>
                                <label htmlFor={name}>{label}</label>
                                <input /* className="" */                                  
                                id={name} 
                                name={name} 
                                type={type}
                                value={user[name]} 
                                placeholder={`Ingresar ${label.toLowerCase()}`} 
                                onChange={handleChange} 
                                />
                                {
                                    errors[name] && (<span style={{color: "red"}}>{errors[name]}</span>)
                                }
                            </div>
                        );
                    })
                }
                <button 
                    type="submit"
                    disabled={Object.keys(user).some(e => !user[e])}                
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}