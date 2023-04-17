import { Container } from "react-bootstrap";
import HomeView from "../components/view/HomeView";
import UserView from "../components/view/UserView";
import { User } from "../models/user";
import styles from "../styles/NewsPage.module.css";

interface HomePageProps {
  signedInUser: User | null;
}

const HomePage = ({ signedInUser }: HomePageProps) => {
  return (
    <>
      <Container className={styles.pageContainer}>
        {signedInUser ? <UserView user={signedInUser} /> : <HomeView />}
      </Container>
    </>
  );
};

export default HomePage;
