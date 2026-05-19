import { render, screen } from "@testing-library/react";
import { Separator } from "@/components/ui/separator";

describe("Separator", () => {
    it("renders with data-slot=separator", () => {
        render(<Separator />);
        const separator = screen.getByRole("separator");
        expect(separator).toHaveAttribute("data-slot", "separator");
    });

    it("renders horizontal orientation by default", () => {
        render(<Separator />);
        const separator = screen.getByRole("separator");
        expect(separator).toBeInTheDocument();
    });

    it("renders vertical orientation", () => {
        render(<Separator orientation="vertical" />);
        const separator = screen.getByRole("separator");
        expect(separator).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<Separator className="my-sep" />);
        const separator = screen.getByRole("separator");
        expect(separator).toHaveClass("my-sep");
    });
});
