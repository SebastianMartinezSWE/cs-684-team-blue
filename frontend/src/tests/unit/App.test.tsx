import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("Landing Page", () => {
  describe("Renders Correctly", () => {
    it("Renders the Refresh button", () => {
      render(<App />);

      const refreshButton = screen.getByRole("button", {
        name: "Refresh",
      });

      expect(refreshButton).toBeInTheDocument();
    });
  });
});
