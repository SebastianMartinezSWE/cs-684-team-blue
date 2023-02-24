import logo from "../../logo.svg";
import styles from "../../styles/App.module.css";

const SignedInView = () => {
  return (
    <>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>Welcome to The Big Blue Theory!</p>
      </header>
    </>
  );
};

export default SignedInView;
