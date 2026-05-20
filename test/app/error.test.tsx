import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "@/app/error";

describe("ErrorPage", () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it("renders the error label", () => {
        render(<ErrorPage error={new Error("oops")} unstable_retry={jest.fn()} />);
        expect(screen.getByText("Error")).toBeInTheDocument();
    });

    it("renders something went wrong heading", () => {
        render(<ErrorPage error={new Error("oops")} unstable_retry={jest.fn()} />);
        expect(
            screen.getByRole("heading", { level: 1, name: "Something went wrong" }),
        ).toBeInTheDocument();
    });

    it("renders the description", () => {
        render(<ErrorPage error={new Error("oops")} unstable_retry={jest.fn()} />);
        expect(screen.getByText(/unexpected error occurred/i)).toBeInTheDocument();
    });

    it("logs the error to console on mount", () => {
        const error = new Error("test error");
        render(<ErrorPage error={error} unstable_retry={jest.fn()} />);
        expect(consoleSpy).toHaveBeenCalledWith(error);
    });

    it("does not render error digest when absent", () => {
        render(<ErrorPage error={new Error("no digest")} unstable_retry={jest.fn()} />);
        expect(screen.queryByText(/Error ID:/i)).not.toBeInTheDocument();
    });

    it("renders error digest when present", () => {
        const error = Object.assign(new Error("server error"), { digest: "abc123" });
        render(<ErrorPage error={error} unstable_retry={jest.fn()} />);
        expect(screen.getByText("Error ID: abc123")).toBeInTheDocument();
    });

    it("calls unstable_retry when Try again is clicked", async () => {
        const user = userEvent.setup();
        const retry = jest.fn();
        render(<ErrorPage error={new Error("oops")} unstable_retry={retry} />);
        await user.click(screen.getByRole("button", { name: "Try again" }));
        expect(retry).toHaveBeenCalledTimes(1);
    });

    it("renders back to home link pointing to /", () => {
        render(<ErrorPage error={new Error("oops")} unstable_retry={jest.fn()} />);
        const link = screen.getByRole("link", { name: "Back to home" });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/");
    });
});
