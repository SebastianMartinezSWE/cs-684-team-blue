import logo from "../../logo.svg";
import styles from "../../styles/App.module.css";

const SignedOutView = () => {
  return (
    <>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogoSignedOut} alt="logo" />
        <p>Hi! Please Sign in or Create an account</p>
      </header>
    </>
  );
};

export default SignedOutView;
