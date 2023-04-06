import { Button, Nav } from "react-bootstrap";
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
            <Nav className="ms-auto">
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
            </Nav>
        </>
    );
};

export default SignedOutNavBar;
