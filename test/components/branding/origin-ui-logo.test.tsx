import { render, screen } from "@testing-library/react";
import { OriginUiLogo } from "@/components/branding/origin-ui-logo";

describe("OriginUiLogo", () => {
    it("renders brand SVG with accessible label", () => {
        render(<OriginUiLogo />);
        expect(screen.getByRole("img", { name: "Origin UI" })).toBeInTheDocument();
    });

    it("renders with default size", () => {
        const { container } = render(<OriginUiLogo />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("h-5");
    });

    it("renders with sm size", () => {
        const { container } = render(<OriginUiLogo size="sm" />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("h-4");
    });

    it("renders with lg size", () => {
        const { container } = render(<OriginUiLogo size="lg" />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("h-7");
    });

    it("applies custom className", () => {
        const { container } = render(<OriginUiLogo className="custom-class" />);
        expect(container.firstChild).toHaveClass("custom-class");
    });
});
