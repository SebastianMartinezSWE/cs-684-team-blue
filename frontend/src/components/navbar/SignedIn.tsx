import { Button, Navbar } from "react-bootstrap";
import * as UserApi from "../../api/user";
import { User } from "../../models/user";

interface NavBarSignedInProps {
  user: User;
  onSignOutSuccessful: () => void;
}

const NavBarSignedIn = ({ user, onSignOutSuccessful }: NavBarSignedInProps) => {
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
      <Navbar.Text className="mb-2">Sign in as: {user.username}</Navbar.Text>
      <Button variant="dark" onClick={signout}>
        Sign Out
      </Button>
    </>
  );
};

export default NavBarSignedIn;
