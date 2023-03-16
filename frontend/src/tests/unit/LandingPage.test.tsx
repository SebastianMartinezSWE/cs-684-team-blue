import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignedOutNavBar from "../../components/navbar/SignedOutNavBar";
import SignedOutView from "../../components/views/SignedOutView";

describe("Landing Page", () => {
  describe("Renders Correctly", () => {
    it("Should render the Sign in and Sign Out Buttons", () => {
      render(
        <SignedOutNavBar
          onSignUpClicked={function (): void {
            throw new Error("Function not implemented.");
          }}
          onSignInClicked={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      );
      const signUpButton = screen.getByText("Sign Up");
      const signInButton = screen.getByText("Sign In");
      expect(signUpButton).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
    });
    it("Should render the Refresh button", () => {
      render(<SignedOutView />);
      const refreshButton = screen.getByText("Refresh");
      expect(refreshButton).toBeInTheDocument();
    });
    it("Should render the General news articles", async () => {
      render(<SignedOutView />);
      const articles = await screen.findByTitle("CNN");
      expect(articles).toBeInTheDocument();
    });
  });
});
