import { useEffect, useState } from "react";
import * as UserApi from "./api/user";
import SignInModal from "./components/modals/SignInModal";
import SignUpModal from "./components/modals/SignUpModal";
import DefaultNavBar from "./components/navbar/DefaultNavBar";
import SignedInView from "./components/views/SignedInView";
import SignedOutView from "./components/views/SignedOutView";
import { User } from "./models/user";

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
    <div>
      <DefaultNavBar
        signedInUser={signedInUser}
        onSignInClicked={() => setShowSignInModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onSignOutSuccessful={() => setSignedInUser(null)}
      />
      <>{signedInUser ? <SignedInView /> : <SignedOutView />}</>
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
  );
}

export default App;
