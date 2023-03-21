import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
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
