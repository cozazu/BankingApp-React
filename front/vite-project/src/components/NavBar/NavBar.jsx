import React from "react";
/* import ListNav from "./ListNav"; */
import styles from "./NavBar.module.css";
import logo from '../../assets/logo.png';
import loguearse from '../../assets/loguearse.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments, setUserData } from "../../redux/userSlice";


const NavBar = () => {
  const login = useSelector(state => state.actualUser.userData.login);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmed = window.confirm("¿Desea cerrar sesión?")
    if(confirmed) {
      dispatch(setUserData({}));
      dispatch(setUserAppointments([]));
      navigate("/");
    }
  }


  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.linksSection}>
        <NavLink to="/home">
          <span>HOME</span>
        </NavLink>
        {
          login &&
            <NavLink to="/appointments">
              <span>RESERVAS</span>
            </NavLink>
        }
        {
          login &&
            <NavLink to="/appointmentform">
              <span>NUEVA RESERVA</span>
            </NavLink>
        }   
        <NavLink to="/about">
          <span>ABOUT US</span>
        </NavLink>
        <NavLink to="/contact">
          <span>CONTACT</span>
        </NavLink>
        {
          login
          ? <span onClick={handleLogout}>LOGOUT</span>            
          : <NavLink to="/login">
              <span>LOGIN</span>
            </NavLink>  
        }  
      </div>  
      <div className={styles.loginSection}>
        <img src={loguearse} alt="login" />
      </div>
    </div>
  );
};

export default NavBar;