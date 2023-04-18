import { Container } from "react-bootstrap";
import NotFoundView from "../components/view/NotFoundView";
import SearchView from "../components/view/SearchView";
import { User } from "../models/user";
import styles from "../styles/NewsPage.module.css";

interface SearchPageProps {
  signedInUser: User | null;
}

const SearchPage = ({ signedInUser }: SearchPageProps) => {
  return (
    <Container className={styles.pageContainer}>
      {signedInUser ? <SearchView /> : <NotFoundView />}
    </Container>
  );
};

export default SearchPage;
