import { render, screen } from "@testing-library/react";
import { OriginUiFeatureCard } from "@/components/branding/origin-ui-feature-card";
import { Zap } from "lucide-react";

describe("OriginUiFeatureCard", () => {
    const defaultProps = {
        icon: Zap,
        title: "Fast",
        description: "Lightning speed",
    };

    it("renders the title", () => {
        render(<OriginUiFeatureCard {...defaultProps} />);
        expect(screen.getByText("Fast")).toBeInTheDocument();
    });

    it("renders the description", () => {
        render(<OriginUiFeatureCard {...defaultProps} />);
        expect(screen.getByText("Lightning speed")).toBeInTheDocument();
    });

    it("renders the icon", () => {
        const { container } = render(<OriginUiFeatureCard {...defaultProps} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(
            <OriginUiFeatureCard {...defaultProps} className="custom-class" />,
        );
        expect(container.firstChild).toHaveClass("custom-class");
    });
});
