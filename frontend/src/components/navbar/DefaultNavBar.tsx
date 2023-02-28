import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../../models/user";
import SignedInNavBar from "./SignedInNavBar";
import SignedOutNavBar from "./SignedOutNavBar";

interface DefaultNavBarProps {
  signedInUser: User | null;
  onSignUpClicked: () => void;
  onSignInClicked: () => void;
  onSignOutSuccessful: () => void;
}

const DefaultNavBar = ({
  signedInUser,
  onSignUpClicked,
  onSignInClicked,
  onSignOutSuccessful,
}: DefaultNavBarProps) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
      <Container fluid>
        <Navbar.Brand>The Big Blue Theory</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {signedInUser ? (
              <SignedInNavBar
                user={signedInUser}
                onSignOutSuccessful={onSignOutSuccessful}
              />
            ) : (
              <SignedOutNavBar
                onSignInClicked={onSignInClicked}
                onSignUpClicked={onSignUpClicked}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <Navbar.Brand>The Big Blue Theory</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ms-auto">
          {signedInUser ? (
            <SignedInNavBar
              user={signedInUser}
              onSignOutSuccessful={onSignOutSuccessful}
            />
          ) : (
            <SignedOutNavBar
              onSignInClicked={onSignInClicked}
              onSignUpClicked={onSignUpClicked}
            />
          )}
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default DefaultNavBar;
