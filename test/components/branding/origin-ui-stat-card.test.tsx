import { render, screen } from "@testing-library/react";
import { OriginUiStatCard } from "@/components/branding/origin-ui-stat-card";
import { DollarSign } from "lucide-react";

const defaultProps = {
    label: "Revenue",
    value: "$12,400",
    icon: DollarSign,
};

describe("OriginUiStatCard", () => {
    it("renders the label", () => {
        render(<OriginUiStatCard {...defaultProps} />);
        expect(screen.getByText("Revenue")).toBeInTheDocument();
    });

    it("renders the value", () => {
        render(<OriginUiStatCard {...defaultProps} />);
        expect(screen.getByText("$12,400")).toBeInTheDocument();
    });

    it("renders the icon", () => {
        const { container } = render(<OriginUiStatCard {...defaultProps} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders change text when provided", () => {
        render(<OriginUiStatCard {...defaultProps} change="+5% from last month" />);
        expect(screen.getByText("+5% from last month")).toBeInTheDocument();
    });

    it("does not render change when omitted", () => {
        render(<OriginUiStatCard {...defaultProps} />);
        expect(screen.queryByText(/from last/)).not.toBeInTheDocument();
    });

    it("renders TrendingUp icon when trend is up", () => {
        const { container } = render(
            <OriginUiStatCard {...defaultProps} change="+5%" trend="up" />,
        );
        // Multiple SVGs: the icon prop + TrendingUp
        const svgs = container.querySelectorAll("svg");
        expect(svgs.length).toBeGreaterThanOrEqual(2);
    });

    it("renders TrendingDown icon when trend is down", () => {
        const { container } = render(
            <OriginUiStatCard {...defaultProps} change="-3%" trend="down" />,
        );
        const svgs = container.querySelectorAll("svg");
        expect(svgs.length).toBeGreaterThanOrEqual(2);
    });

    it("renders no trend icon when trend is undefined but change is present", () => {
        const { container } = render(<OriginUiStatCard {...defaultProps} change="+5%" />);
        // Only the main DollarSign icon, no TrendingUp/Down
        const svgs = container.querySelectorAll("svg");
        expect(svgs).toHaveLength(1);
    });

    it("applies custom className", () => {
        const { container } = render(
            <OriginUiStatCard {...defaultProps} className="custom-stat" />,
        );
        expect(container.firstChild).toHaveClass("custom-stat");
    });
});
