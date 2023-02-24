import { Button } from "react-bootstrap";

interface SignedOutProps {
  onSignUpClicked: () => void;
  onSignInClicked: () => void;
}

const SignedOut = ({ onSignUpClicked, onSignInClicked }: SignedOutProps) => {
  return (
    <>
      <Button variant="dark" onClick={onSignUpClicked}>
        Sign Up
      </Button>
      <Button variant="dark" onClick={onSignInClicked}>
        Sign In
      </Button>
    </>
  );
};

export default SignedOut;
