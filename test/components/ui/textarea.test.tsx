import { render, screen } from "@testing-library/react";
import { Textarea } from "@/components/ui/textarea";

describe("Textarea", () => {
    it("renders a textarea element", () => {
        render(<Textarea />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("has data-slot=textarea", () => {
        render(<Textarea />);
        expect(screen.getByRole("textbox")).toHaveAttribute("data-slot", "textarea");
    });

    it("renders with placeholder", () => {
        render(<Textarea placeholder="Enter text..." />);
        expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
    });

    it("can be disabled", () => {
        render(<Textarea disabled />);
        expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("applies custom className", () => {
        render(<Textarea className="custom-textarea" />);
        expect(screen.getByRole("textbox")).toHaveClass("custom-textarea");
    });

    it("forwards rows prop", () => {
        render(<Textarea rows={5} />);
        expect(screen.getByRole("textbox")).toHaveAttribute("rows", "5");
    });
});
