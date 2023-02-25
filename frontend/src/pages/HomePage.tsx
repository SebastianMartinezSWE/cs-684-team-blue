import SignedInView from "../components/views/SignedInView";
import SignedOutView from "../components/views/SignedOutView";
import { User } from "../models/user";

interface HomePageProps {
  signedInUser: User | null;
}

const HomePage = ({ signedInUser }: HomePageProps) => {
  return <>{signedInUser ? <SignedInView /> : <SignedOutView />}</>;
};

export default HomePage;
