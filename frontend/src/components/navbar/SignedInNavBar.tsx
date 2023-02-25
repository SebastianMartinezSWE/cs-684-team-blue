import { Button, Navbar } from "react-bootstrap";
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
      <Navbar.Text>Sign in as: {user.username}</Navbar.Text>
      <Button variant="dark" onClick={signout}>
        Sign Out
      </Button>
    </>
  );
};

export default SignedInNavBar;
