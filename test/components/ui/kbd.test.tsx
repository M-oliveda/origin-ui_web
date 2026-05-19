import { render, screen } from "@testing-library/react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

describe("Kbd", () => {
    it("renders children", () => {
        render(<Kbd>⌘K</Kbd>);
        expect(screen.getByText("⌘K")).toBeInTheDocument();
    });

    it("has data-slot=kbd", () => {
        const { container } = render(<Kbd>K</Kbd>);
        expect(container.querySelector("kbd")).toHaveAttribute("data-slot", "kbd");
    });

    it("applies custom className", () => {
        const { container } = render(<Kbd className="custom-kbd">K</Kbd>);
        expect(container.querySelector("kbd")).toHaveClass("custom-kbd");
    });
});

describe("KbdGroup", () => {
    it("renders children", () => {
        render(
            <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
            </KbdGroup>,
        );
        expect(screen.getByText("⌘")).toBeInTheDocument();
        expect(screen.getByText("K")).toBeInTheDocument();
    });

    it("has data-slot=kbd-group", () => {
        const { container } = render(<KbdGroup />);
        expect(container.querySelector("kbd")).toHaveAttribute("data-slot", "kbd-group");
    });

    it("applies custom className", () => {
        const { container } = render(<KbdGroup className="custom-group" />);
        expect(container.querySelector("kbd")).toHaveClass("custom-group");
    });
});
