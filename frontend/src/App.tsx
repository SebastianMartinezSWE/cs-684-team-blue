import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as UserApi from "./api/user";
import SignInModal from "./components/modal/SignInModal";
import SignUpModal from "./components/modal/SignUpModal";
import NavBar from "./components/navbar/NavBar";
import { User } from "./models/user";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchResultsPage from "./pages/SearchResultsPage";

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
        <NavBar
          signedInUser={signedInUser}
          onSignInClicked={() => setShowSignInModal(true)}
          onSignUpClicked={() => setShowSignUpModal(true)}
          onSignOutSuccessful={() => setSignedInUser(null)}
        />
        <Routes>
          <Route path="/" element={<HomePage signedInUser={signedInUser} />} />
          <Route path="/results" element={<SearchResultsPage />} />
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
