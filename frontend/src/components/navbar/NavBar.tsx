import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/react.svg";
import { User } from "../../models/user";
import UserNavBar from "./UserNavBar";

interface NavBarProps {
  signedInUser: User | null;
  onSignUpClicked: () => void;
  onSignInClicked: () => void;
  onSignOutSuccessful: () => void;
}

const NavBar = ({
  signedInUser,
  onSignUpClicked,
  onSignInClicked,
  onSignOutSuccessful,
}: NavBarProps) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" onClick={routeChange}>
          <img
            src={logo}
            alt="react-logo"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          The Big Blue Theory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {signedInUser ? (
              <UserNavBar
                user={signedInUser}
                onSignOutSuccessful={onSignOutSuccessful}
              />
            ) : (
              <>
                <Nav.Item className="me-1">
                  <Button variant="dark" onClick={onSignInClicked}>
                    Sign In
                  </Button>{" "}
                </Nav.Item>
                <Nav.Item className="ms-1">
                  <Button variant="primary" onClick={onSignUpClicked}>
                    Sign Up
                  </Button>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
