import React from "react";
/* import ListNav from "./ListNav"; */
import styles from "./NavBar.module.css";
import logo from '../../assets/logo.png'
import login from "../../assets/login.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const NavBar = () => {
  const login = useSelector(state => state.actualUser.userData.login);


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
              <span>APPOINTMENTS</span>
            </NavLink>
        }  
        <NavLink to="/about">
          <span>ABOUT OF</span>
        </NavLink>
        <NavLink to="/contact">
          <span>CONTACT</span>
        </NavLink>  
      </div>  
      <div className={styles.loginSection}>
        <img src={login} alt="login" />
      </div>
    </div>
  );
};

export default NavBar;