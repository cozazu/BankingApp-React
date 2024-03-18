import axios from "axios";
import React, { useState } from "react";
import styles from "./Register.module.css"
const emailRegExp = /\S+@\S+\.\S+/;
const POST_USER_URL = "http://localhost:3000/users/register";


export default function Register(props) {

    const initialState = {
        name: "",
        email:"",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmpassword: ""
    };

    const [user, setUser] = useState({initialState});
    const [errors, setErrors] = useState({name: "Debe ingresar un nombre"});

    const validateUser = ({name, email, birthdate, nDni, username, password, confirmpassword}) => {
        const errors = {};
        if(!name) errors.name = "Ingresar nombre";
        if(!email) errors.email = "Ingresar email";
        else {
            if(!emailRegExp.test(email)) errors.email = "Email inválido"
        }
        if(!birthdate) errors.birthdate = "Ingresar fecha de nacimiento";
        if(!nDni) errors.nDni = "Ingresar nDni";
        if(!username) errors.username = "Ingresar username";
        if(!password) errors.password = "Ingresar password";
        if(password !== confirmpassword) errors.confirmpassword = "Las contraseñas deben ser iguales";

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: user.name, 
            email: user.email, 
            birthdate: user.birthdate, 
            nDni: user.nDni, 
            username: user.username, 
            password: user.password
        };

        axios
            .post(POST_USER_URL, newUser)
            .then(({data}) => data)
            .then((userInDB) => {
                alert(`Usuario ha sido creado ${userInDB.name}!!!!`);
                setUser(initialState);
            })      
            .catch((error) => alert(error.message));        
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUser({...user, [name]: value});

        setErrors(validateUser({...user, [name]: value }));
    };

    const handleReset = (event) => {
        event.preventDefault();
        setUser(initialState);
    };

    const formData = [
        { label: "Nombre: ", name: "name", type: "text", placeholder: "Ingrese nombre..." },
        { /* className: */label: "Email: ", name: "email", type: "email", placeholder: "Ingrese email..." },
        { label: "Fecha de nacimiento: ", name: "birthdate", type: "date", placeholder: "Ingrese fecha de nacimiento..." },
        { label: "Número de DNI: ", name: "nDni", type: "text", placeholder: "Ingrese número de documento..." },
        { label: "Nombre de usuario: ", name: "username", type: "text", placeholder: "Ingrese nombre de usuario..." },
        { label: "Contraseña: ", name: "password", type: "password", placeholder: "Ingrese password..." },
        { label: "Verificar contraseña: ", name: "confirmpassword", type: "password", placeholder: "Verificar password..." }
    ]

    return (
    
        <div className={styles.registerContainer}>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                {
                    formData.map(({ label, name, type, placeholder }) => {
                        return (
                            <div key={name} className={styles.inputContainer}>
                                <label htmlFor={name}>{label}</label>
                                <input /* className="" */ type={type} id={name} name={name} value={user[name]} placeholder={placeholder} onChange={handleChange} />
                                {
                                    errors[name] && <span className={styles.errorText}>{errors[name]}</span>
                                }
                            </div>
                        );
                    })
                }
                <button 
                    type="submit"
                    disabled={Object.keys(user)
                        .some(e => !user[e])                          
                    }
                    className={styles.submitButton}                  
                >Enviar</button>
                <hr />
                <button onClick={handleReset} className={styles.resetButton}>Borrar formulario</button>
            </form>
        </div>
    )
}