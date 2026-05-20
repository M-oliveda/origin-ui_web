import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OriginUiPriceCard } from "@/components/branding/origin-ui-price-card";

const defaultFeatures = [
    { text: "5 projects", included: true },
    { text: "Priority support", included: false },
];

const defaultProps = {
    name: "Pro",
    price: "$29",
    description: "For small teams",
    features: defaultFeatures,
};

describe("OriginUiPriceCard", () => {
    it("renders the plan name", () => {
        render(<OriginUiPriceCard {...defaultProps} />);
        expect(screen.getByText("Pro")).toBeInTheDocument();
    });

    it("renders the price", () => {
        render(<OriginUiPriceCard {...defaultProps} />);
        expect(screen.getByText("$29")).toBeInTheDocument();
    });

    it("renders the default period '/month'", () => {
        render(<OriginUiPriceCard {...defaultProps} />);
        expect(screen.getByText("/month")).toBeInTheDocument();
    });

    it("renders custom period when provided", () => {
        render(<OriginUiPriceCard {...defaultProps} period="/year" />);
        expect(screen.getByText("/year")).toBeInTheDocument();
    });

    it("renders the description", () => {
        render(<OriginUiPriceCard {...defaultProps} />);
        expect(screen.getByText("For small teams")).toBeInTheDocument();
    });

    it("renders included features with check icon", () => {
        render(<OriginUiPriceCard {...defaultProps} />);
        expect(screen.getByText("5 projects")).toBeInTheDocument();
    });

    it("renders excluded features with X icon", () => {
        render(<OriginUiPriceCard {...defaultProps} />);
        expect(screen.getByText("Priority support")).toBeInTheDocument();
    });

    it("renders default CTA label 'Get Started'", () => {
        render(<OriginUiPriceCard {...defaultProps} />);
        expect(screen.getByRole("button", { name: "Get Started" })).toBeInTheDocument();
    });

    it("renders custom CTA label", () => {
        render(<OriginUiPriceCard {...defaultProps} ctaLabel="Subscribe Now" />);
        expect(screen.getByRole("button", { name: "Subscribe Now" })).toBeInTheDocument();
    });

    it("calls onCtaClick when CTA button is clicked", async () => {
        const user = userEvent.setup();
        const onCtaClick = jest.fn();
        render(<OriginUiPriceCard {...defaultProps} onCtaClick={onCtaClick} />);
        await user.click(screen.getByRole("button", { name: "Get Started" }));
        expect(onCtaClick).toHaveBeenCalledTimes(1);
    });

    it("renders 'Most Popular' badge when highlighted", () => {
        render(<OriginUiPriceCard {...defaultProps} highlighted={true} />);
        expect(screen.getByText("Most Popular")).toBeInTheDocument();
    });

    it("does not render 'Most Popular' badge when not highlighted", () => {
        render(<OriginUiPriceCard {...defaultProps} highlighted={false} />);
        expect(screen.queryByText("Most Popular")).not.toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(
            <OriginUiPriceCard {...defaultProps} className="custom-price" />,
        );
        expect(container.firstChild).toHaveClass("custom-price");
    });
});
