import { Nav } from "react-bootstrap";
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
            <Nav.Link className="text-info" onClick={onSignUpClicked}>
                Sign Up
            </Nav.Link>
            <Nav.Link className="text-white" onClick={onSignInClicked}>
                Sign In
            </Nav.Link>
        </>
    );
};

export default SignedOutNavBar;
