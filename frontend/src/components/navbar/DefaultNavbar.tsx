import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../../models/user";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

interface DefaultNavbarProps {
  signedInUser: User | null;
  onSignUpClicked: () => void;
  onSignInClicked: () => void;
  onSignOutSuccessful: () => void;
}

const DefaultNavbar = ({
  signedInUser,
  onSignUpClicked,
  onSignInClicked,
  onSignOutSuccessful,
}: DefaultNavbarProps) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand>The Big Blue Theory</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {signedInUser ? (
              <SignedIn
                user={signedInUser}
                onSignOutSuccessful={onSignOutSuccessful}
              />
            ) : (
              <SignedOut
                onSignInClicked={onSignInClicked}
                onSignUpClicked={onSignUpClicked}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DefaultNavbar;
