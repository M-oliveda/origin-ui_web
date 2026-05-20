import { render, screen } from "@testing-library/react";
import { OriginUiNotificationItem } from "@/components/branding/origin-ui-notification-item";
import { Bell } from "lucide-react";

const defaultProps = {
    icon: Bell,
    title: "New message",
    description: "You have a new message",
    time: "2 min ago",
};

describe("OriginUiNotificationItem", () => {
    it("renders the title", () => {
        render(<OriginUiNotificationItem {...defaultProps} />);
        expect(screen.getByText("New message")).toBeInTheDocument();
    });

    it("renders the description", () => {
        render(<OriginUiNotificationItem {...defaultProps} />);
        expect(screen.getByText("You have a new message")).toBeInTheDocument();
    });

    it("renders the time", () => {
        render(<OriginUiNotificationItem {...defaultProps} />);
        expect(screen.getByText("2 min ago")).toBeInTheDocument();
    });

    it("renders the icon", () => {
        const { container } = render(<OriginUiNotificationItem {...defaultProps} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders unread indicator when unread is true", () => {
        const { container } = render(<OriginUiNotificationItem {...defaultProps} unread={true} />);
        // Unread indicator dot is a span with rounded-full
        const dot = container.querySelector("span.rounded-full");
        expect(dot).toBeInTheDocument();
    });

    it("does not render unread indicator when unread is false", () => {
        const { container } = render(<OriginUiNotificationItem {...defaultProps} unread={false} />);
        const dot = container.querySelector(".bg-primary.size-2.rounded-full");
        expect(dot).not.toBeInTheDocument();
    });

    it("applies primary icon styling when unread", () => {
        const { container } = render(<OriginUiNotificationItem {...defaultProps} unread={true} />);
        const iconWrapper = container.querySelector("[class*='bg-primary/10']");
        expect(iconWrapper).toBeInTheDocument();
    });

    it("applies muted icon styling when read", () => {
        const { container } = render(<OriginUiNotificationItem {...defaultProps} unread={false} />);
        const iconWrapper = container.querySelector("[class*='bg-muted']");
        expect(iconWrapper).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(
            <OriginUiNotificationItem {...defaultProps} className="my-notif" />,
        );
        expect(container.firstChild).toHaveClass("my-notif");
    });
});
