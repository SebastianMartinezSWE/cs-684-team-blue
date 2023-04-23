import { Container } from "react-bootstrap";
import SearchView from "../components/view/SearchView";
import styles from "../styles/NewsPage.module.css";

const SearchPage = () => {
  return (
    <Container className={styles.pageContainer}>{<SearchView />}</Container>
  );
};

export default SearchPage;
