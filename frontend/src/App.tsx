import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as UserApi from "./api/user";
import SignInModal from "./components/modals/SignInModal";
import SignUpModal from "./components/modals/SignUpModal";
import DefaultNavBar from "./components/navbar/DefaultNavBar";
import { User } from "./models/user";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";

function App() {
    const [signedInUser, setSignedInUser] = useState<User | null>(null);

    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);

    useEffect(() => {
        async function fetchSignedInUser() {
            try {
                const user = await UserApi.getSignedInUser();
                setSignedInUser(user);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSignedInUser();
    }, []);

    return (
        <BrowserRouter>
            <div>
                <DefaultNavBar
                    signedInUser={signedInUser}
                    onSignInClicked={() => setShowSignInModal(true)}
                    onSignUpClicked={() => setShowSignUpModal(true)}
                    onSignOutSuccessful={() => setSignedInUser(null)}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage signedInUser={signedInUser} />}
                    />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
                {showSignUpModal && (
                    <SignUpModal
                        onDismiss={() => setShowSignUpModal(false)}
                        onSignUpSuccessful={(user) => {
                            setSignedInUser(user);
                            setShowSignUpModal(false);
                        }}
                    />
                )}
                {showSignInModal && (
                    <SignInModal
                        onDismiss={() => setShowSignInModal(false)}
                        onSigninSuccessful={(user) => {
                            setSignedInUser(user);
                            setShowSignInModal(false);
                        }}
                    />
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
