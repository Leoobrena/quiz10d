import { Header } from "../components/Header";
import { UserContextProvider } from "../context/UserContext";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default MyApp;
