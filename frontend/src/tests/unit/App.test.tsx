import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import { articlesData } from "../../mocks/articles";

describe("Landing Page", () => {
  describe("Renders Correctly", () => {
    it("Renders the Refresh button", () => {
      render(<App />);

      const refreshButton = screen.getByRole("button", {
        name: "Refresh",
      });

      expect(refreshButton).toBeInTheDocument();
    });

    it("Renders the General News articles", async () => {
      render(<App />);

      await waitFor(() => {
        articlesData.forEach((article) => {
          const articleTitle = screen.getByText(article.title);
          expect(articleTitle).toBeInTheDocument();
        });
      });
    });
  });
});

describe("Home Page", () => {
  describe("Renders Correctly", () => {
    it("Renders the Refresh button", async () => {
      const user = userEvent.setup();
      render(<App />);

      user.click(screen.getByRole("button", { name: "Sign In" }));

      user.type(
        await screen.findByPlaceholderText("Username"),
        "waldotheoctopus"
      );
      user.type(await screen.findByPlaceholderText("Password"), "nickJr41!");
      user.click(await screen.findByTestId("Sign-In"));

      const refreshButton = await screen.findByRole("button", {
        name: "Refresh",
      });

      expect(refreshButton).toBeInTheDocument();
    });

    it("Renders the Settings button", async () => {
      const user = userEvent.setup();
      render(<App />);

      user.click(screen.getByRole("button", { name: "Sign In" }));

      user.type(
        await screen.findByPlaceholderText("Username"),
        "waldotheoctopus"
      );
      user.type(await screen.findByPlaceholderText("Password"), "nickJr41!");
      user.click(await screen.findByTestId("Sign-In"));

      const settingsButton = await screen.findByRole("button", {
        name: "Settings",
      });

      expect(settingsButton).toBeInTheDocument();
    });

    it("Render the General News articles", async () => {
      const user = userEvent.setup();
      render(<App />);

      user.click(screen.getByRole("button", { name: "Sign In" }));

      user.type(
        await screen.findByPlaceholderText("Username"),
        "waldotheoctopus"
      );
      user.type(await screen.findByPlaceholderText("Password"), "nickJr41!");
      user.click(await screen.findByTestId("Sign-In"));

      await waitFor(() => {
        articlesData.forEach((article) => {
          const articleTitle = screen.getByText(article.title);
          expect(articleTitle).toBeInTheDocument();
        });
      });
    });
  });
});

describe("Settings Page", () => {
  describe("Renders Correctly", () => {
    it("Render the Settings Modal", async () => {
      const user = userEvent.setup();
      render(<App />);

      user.click(screen.getByRole("button", { name: "Sign In" }));

      user.type(
        await screen.findByPlaceholderText("Username"),
        "waldotheoctopus"
      );
      user.type(await screen.findByPlaceholderText("Password"), "nickJr41!");
      user.click(await screen.findByTestId("Sign-In"));

      user.click(await screen.findByTestId("Settings"));

      const settingsModal = await screen.findByTestId("Settings-Modal");

      expect(settingsModal).toBeInTheDocument();
    });
  });
});
