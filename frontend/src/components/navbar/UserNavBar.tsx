import { Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import * as UserApi from "../../api/user";
import { User } from "../../models/user";

interface UserNavBarInProps {
  user: User;
  onSignOutSuccessful: () => void;
}

const UserNavBar = ({ user, onSignOutSuccessful }: UserNavBarInProps) => {
  const navigate = useNavigate();

  async function signout() {
    try {
      await UserApi.signout(user);
      navigate("/");
      onSignOutSuccessful();
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  return (
    <>
      <Navbar.Text className="pe-2">
        Signed in as: <u>{user.username}</u>
      </Navbar.Text>
      <Nav.Item className="ms-1">
        <Button data-testid="Sign-Out" variant="danger" onClick={signout}>
          Sign Out
        </Button>
      </Nav.Item>
    </>
  );
};

export default UserNavBar;
