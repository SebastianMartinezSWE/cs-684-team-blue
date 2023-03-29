import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import * as UserApi from '../../api/user';
import { User } from '../../models/user';

interface SignedInNavBarInProps {
    user: User;
    onSignOutSuccessful: () => void;
}

const SignedInNavBar = ({
    user,
    onSignOutSuccessful,
}: SignedInNavBarInProps) => {
    async function signout() {
        try {
            await UserApi.signout(user);
            onSignOutSuccessful();
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    return (
        <>
            <Navbar.Text className="pe-2">
                Signed in as: {user.username}
            </Navbar.Text>
            <Nav.Link
                data-testid="Sign-Out"
                className="text-danger"
                onClick={signout}
            >
                Sign Out
            </Nav.Link>
        </>
    );
};

export default SignedInNavBar;
