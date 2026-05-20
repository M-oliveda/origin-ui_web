import { render, screen } from "@testing-library/react";
import { Input, inputVariants } from "@/components/ui/input";

describe("Input", () => {
    it("renders an input element", () => {
        render(<Input />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("has data-slot=input", () => {
        render(<Input />);
        expect(screen.getByRole("textbox")).toHaveAttribute("data-slot", "input");
    });

    it("applies default variant and size classes", () => {
        render(<Input />);
        expect(screen.getByRole("textbox")).toHaveClass("border-input");
    });

    it("applies ghost variant", () => {
        render(<Input variant="ghost" />);
        expect(screen.getByRole("textbox")).toHaveClass("border-transparent");
    });

    it("applies sm size", () => {
        render(<Input size="sm" />);
        expect(screen.getByRole("textbox")).toHaveClass("h-7");
    });

    it("applies lg size", () => {
        render(<Input size="lg" />);
        expect(screen.getByRole("textbox")).toHaveClass("h-10");
    });

    it("applies custom className", () => {
        render(<Input className="custom-input" />);
        expect(screen.getByRole("textbox")).toHaveClass("custom-input");
    });

    it("forwards type prop", () => {
        render(<Input type="email" />);
        expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
    });

    it("renders disabled input", () => {
        render(<Input disabled />);
        expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("renders with placeholder", () => {
        render(<Input placeholder="Enter text" />);
        expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    it("exports inputVariants with size classes", () => {
        expect(inputVariants({ size: "sm" })).toContain("h-7");
    });
});
