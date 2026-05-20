import { render, screen } from "@testing-library/react";
import { Spinner } from "@/components/ui/spinner";

describe("Spinner", () => {
    it("renders with role=status", () => {
        render(<Spinner />);
        expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("has aria-label Loading", () => {
        render(<Spinner />);
        expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading");
    });

    it("applies animate-spin class", () => {
        render(<Spinner />);
        expect(screen.getByRole("status")).toHaveClass("animate-spin");
    });

    it("applies custom className", () => {
        render(<Spinner className="custom-spinner" />);
        expect(screen.getByRole("status")).toHaveClass("custom-spinner");
    });
});
