import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

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

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUser({...user, [name]: value});
        setErrors(validateUser({...user, [name]: value }));
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(POST_USERLOGIN_URL, user)
            .then(response => response.data)
            .then(data => {
                dispatch(setUserData(data));
                alert(`Usuario logueado...`);
                navigate("/home");
            })     
            .catch((error) => alert(`Acceso denegado: ${error?.response?.data?.message}`));        
    };

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