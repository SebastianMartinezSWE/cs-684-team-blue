import logo from "./logo.svg";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
