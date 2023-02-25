import { Button } from "react-bootstrap";

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
      <Button variant="dark" onClick={onSignUpClicked}>
        Sign Up
      </Button>
      <Button variant="outline-light" onClick={onSignInClicked}>
        Sign In
      </Button>
    </>
  );
};

export default SignedOutNavBar;
