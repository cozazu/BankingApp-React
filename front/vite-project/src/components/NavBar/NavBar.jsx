import React from "react";
/* import ListNav from "./ListNav"; */
import styles from "./NavBar.module.css";
import logo from '../../assets/logo.png'
import login from "../../assets/login.png"


const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className="styles.logoSection">
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.linksSection}>
        <span>Home</span>
        <span>Reservas</span>
        <span>About</span>
        <span>Contact</span>
      </div>  
      <div className="styles.loginSection">
        <img src={login} alt="login" />
      </div>
    </div>
  );
};

export default NavBar;