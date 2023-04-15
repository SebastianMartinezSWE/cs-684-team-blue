import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/react.svg";
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default DefaultNavBar;
