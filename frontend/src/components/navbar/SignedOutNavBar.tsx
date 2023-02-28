import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
interface SignedOutNavBarProps {
  onSignUpClicked: () => void;
  onSignInClicked: () => void;
}

const SignedOutNavBar = ({
  onSignUpClicked,
  onSignInClicked,
}: SignedOutNavBarProps) => {
  return (
    <>
      <Container fluid>
        <Button variant="outline-info" onClick={onSignUpClicked}>
          Sign Up
        </Button>
        {"  "}
        <Button variant="outline-light" onClick={onSignInClicked}>
          Sign In
        </Button>
      </Container>
    </>
  );
};

export default SignedOutNavBar;
