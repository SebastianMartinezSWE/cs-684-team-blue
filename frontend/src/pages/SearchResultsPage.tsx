import { useLocation } from "react-router-dom";
import { User } from "../models/user";

interface HomePageProps {
  signedInUser: User | null;
}

const SearchResultsPage = () => {
  const { state } = useLocation();
  return <h1>Search Results for "{state.searchQuery}"</h1>;
};

export default SearchResultsPage;
