import {
    findByLabelText,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
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

    describe("Sign up functionality", () => {
        it("Should display username after signing up", async () => {
            const user = userEvent.setup();
            render(<App />);

            user.click(screen.getByRole("button", { name: "Sign Up" }));

            user.type(
                await screen.findByPlaceholderText("Username"),
                "waldotheoctopus"
            );
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
            user.type(
                await screen.findByPlaceholderText("Re-enter Password"),
                "nickJr41!"
            );

            user.click(await screen.findByTestId("Sign-Up"));

            const username = await screen.findByText(
                "Signed in as: waldotheoctopus"
            );

            expect(username).toBeInTheDocument();
        });
    });

    describe("Sign in functionality", () => {
        it("Should display username after signing in", async () => {
            const user = userEvent.setup();
            render(<App />);

            user.click(screen.getByRole("button", { name: "Sign In" }));

            user.type(
                await screen.findByPlaceholderText("Username"),
                "waldotheoctopus"
            );
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
            user.click(await screen.findByTestId("Sign-In"));

            const username = await screen.findByText(
                "Signed in as: waldotheoctopus"
            );

            expect(username).toBeInTheDocument();
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
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
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
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
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
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
            user.click(await screen.findByTestId("Sign-In"));

            await waitFor(() => {
                articlesData.forEach((article) => {
                    const articleTitle = screen.getByText(article.title);
                    expect(articleTitle).toBeInTheDocument();
                });
            });
        });
    });

    describe("Sign out functionality", () => {
        it("Should display username after signing in", async () => {
            const user = userEvent.setup();
            render(<App />);

            user.click(screen.getByRole("button", { name: "Sign In" }));

            user.type(
                await screen.findByPlaceholderText("Username"),
                "waldotheoctopus"
            );
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
            user.click(await screen.findByTestId("Sign-In"));

            user.click(await screen.findByTestId("Sign-Out"));

            const signInButton = await screen.findByRole("button", {
                name: "Sign In",
            });

            const signUpButton = await screen.findByRole("button", {
                name: "Sign Up",
            });

            expect(signInButton).toBeInTheDocument();
            expect(signUpButton).toBeInTheDocument();
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
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
            user.click(await screen.findByTestId("Sign-In"));

            user.click(await screen.findByTestId("Settings"));

            const settingsModal = await screen.findByTestId("Settings-Modal");

            expect(settingsModal).toBeInTheDocument();
        });

        it("Render the Settings Options", async () => {
            const user = userEvent.setup();
            render(<App />);

            user.click(screen.getByRole("button", { name: "Sign In" }));

            user.type(
                await screen.findByPlaceholderText("Username"),
                "waldotheoctopus"
            );
            user.type(
                await screen.findByPlaceholderText("Password"),
                "nickJr41!"
            );
            user.click(await screen.findByTestId("Sign-In"));

            user.click(await screen.findByTestId("Settings"));

            const settingsModal = await screen.findByTestId("Settings-Modal");

            const generalOption = await screen.findByLabelText("General");
            const businessOption = await screen.findByLabelText("Business");
            const entertainmentOption = await screen.findByLabelText(
                "Entertainment"
            );
            const scienceOption = await screen.findByLabelText("Science");
            const sportsOption = await screen.findByLabelText("Sports");
            const technologyOption = await screen.findByLabelText("Technology");

            expect(settingsModal).toBeInTheDocument();
            expect(generalOption).toBeInTheDocument();
            expect(businessOption).toBeInTheDocument();
            expect(entertainmentOption).toBeInTheDocument();
            expect(scienceOption).toBeInTheDocument();
            expect(sportsOption).toBeInTheDocument();
            expect(technologyOption).toBeInTheDocument();
        });
    });
});
