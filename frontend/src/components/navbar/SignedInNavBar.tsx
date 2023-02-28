import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import * as UserApi from "../../api/user";
import { User } from "../../models/user";

interface SignedInNavBarInProps {
  user: User;
  onSignOutSuccessful: () => void;
}

const SignedInNavBar = ({
  user,
  onSignOutSuccessful,
}: SignedInNavBarInProps) => {
  async function signout() {
    try {
      await UserApi.signout();
      onSignOutSuccessful();
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  return (
    <>
      <Navbar.Text className="pe-2">Signed in as: {user.username}</Navbar.Text>
      <Button variant="outline-danger" onClick={signout}>
        Sign Out
      </Button>
    </>
  );
};

export default SignedInNavBar;
