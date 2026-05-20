import { render, screen } from "@testing-library/react";
import { Label } from "@/components/ui/label";

describe("Label", () => {
    it("renders children", () => {
        render(<Label>Name</Label>);
        expect(screen.getByText("Name")).toBeInTheDocument();
    });

    it("has data-slot=label", () => {
        const { container } = render(<Label>Name</Label>);
        expect(container.firstChild).toHaveAttribute("data-slot", "label");
    });

    it("renders as a label element", () => {
        const { container } = render(<Label>Name</Label>);
        expect(container.querySelector("label")).toBeInTheDocument();
    });

    it("renders with htmlFor linking to an input", () => {
        render(
            <>
                <Label htmlFor="my-input">Username</Label>
                <input id="my-input" />
            </>,
        );
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Label className="custom-label">Name</Label>);
        expect(container.firstChild).toHaveClass("custom-label");
    });
});
