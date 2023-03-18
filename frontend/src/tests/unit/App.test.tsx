import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import { articlesData } from "../../mocks/articles";

describe("Landing Page", () => {
  describe("Renders General News Correctly", () => {
    it("Should render the Refresh button", () => {
      render(<App />);

      const refreshButton = screen.getByRole("button", {
        name: "Refresh",
      });

      expect(refreshButton).toBeInTheDocument();
    });

    it("Should render the General News articles", async () => {
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
    it("Should render the Settings button", () => {
      render(<App />);

      const settingsButton = screen.getByRole("button", {
        name: "Settings",
      });

      expect(settingsButton).toBeInTheDocument();
    });
  });
});

// describe("Settings Page", () => {
//   describe("Renders Correctly", () => {
//     it("Should render the Settings Modal", () => {
//       render(<App />);

//       const refreshButton = screen.getByRole("button", {
//         name: "Settings",
//       });

//       expect(refreshButton).toBeInTheDocument();
//     });

//     it("Should render the Home Page after Save Button", () => {
//       render(<App />);

//       const refreshButton = screen.getByRole("button", {
//         name: "Settings",
//       });

//       expect(refreshButton).toBeInTheDocument();
//     });
//   });
// });
