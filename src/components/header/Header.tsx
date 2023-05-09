import styles from "./Header.module.css";
import logo from "../../assets/rocket.svg";
import nameLogo from "../../assets/todo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.boxLogo}>
        <img className={styles.logo} src={logo} alt="" />
        <img className={styles.nameLogo} src={nameLogo} alt="" />
      </div>
    </div>
  );
}
