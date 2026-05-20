import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GlobalError from "@/app/global-error";

describe("GlobalError", () => {
    it("renders critical error label", () => {
        render(<GlobalError error={new Error("crash")} unstable_retry={jest.fn()} />);
        expect(screen.getByText("Critical Error")).toBeInTheDocument();
    });

    it("renders something went wrong heading", () => {
        render(<GlobalError error={new Error("crash")} unstable_retry={jest.fn()} />);
        expect(
            screen.getByRole("heading", { level: 1, name: "Something went wrong" }),
        ).toBeInTheDocument();
    });

    it("renders the description", () => {
        render(<GlobalError error={new Error("crash")} unstable_retry={jest.fn()} />);
        expect(screen.getByText(/critical error occurred/i)).toBeInTheDocument();
    });

    it("does not render error digest when absent", () => {
        render(<GlobalError error={new Error("crash")} unstable_retry={jest.fn()} />);
        expect(screen.queryByText(/Error ID:/i)).not.toBeInTheDocument();
    });

    it("renders error digest when present", () => {
        const error = Object.assign(new Error("crash"), { digest: "xyz789" });
        render(<GlobalError error={error} unstable_retry={jest.fn()} />);
        expect(screen.getByText("Error ID: xyz789")).toBeInTheDocument();
    });

    it("calls unstable_retry when Try again is clicked", async () => {
        const user = userEvent.setup();
        const retry = jest.fn();
        render(<GlobalError error={new Error("crash")} unstable_retry={retry} />);
        await user.click(screen.getByRole("button", { name: "Try again" }));
        expect(retry).toHaveBeenCalledTimes(1);
    });
});
