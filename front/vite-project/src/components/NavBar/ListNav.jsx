import styles from "./NavBar.module.css";
const ListNav = () => {
  return (
    <ul className={styles.linksSection}>
      <li>Home</li>
      <li>Mis Turnos</li>
      <li>Login</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default ListNav;