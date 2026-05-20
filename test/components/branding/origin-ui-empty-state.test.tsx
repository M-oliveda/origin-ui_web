import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OriginUiEmptyState } from "@/components/branding/origin-ui-empty-state";
import { Inbox } from "lucide-react";

describe("OriginUiEmptyState", () => {
    it("renders the title", () => {
        render(<OriginUiEmptyState title="Nothing here" />);
        expect(screen.getByRole("heading", { name: "Nothing here" })).toBeInTheDocument();
    });

    it("renders with default Inbox icon when no icon provided", () => {
        const { container } = render(<OriginUiEmptyState title="Empty" />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders with a custom icon", () => {
        const { container } = render(<OriginUiEmptyState title="Empty" icon={Inbox} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders description when provided", () => {
        render(<OriginUiEmptyState title="Empty" description="No items yet" />);
        expect(screen.getByText("No items yet")).toBeInTheDocument();
    });

    it("does not render description when omitted", () => {
        render(<OriginUiEmptyState title="Empty" />);
        expect(screen.queryByText("No items yet")).not.toBeInTheDocument();
    });

    it("renders action button when actionLabel provided", () => {
        render(<OriginUiEmptyState title="Empty" actionLabel="Add item" />);
        expect(screen.getByRole("button", { name: "Add item" })).toBeInTheDocument();
    });

    it("does not render action button when actionLabel omitted", () => {
        render(<OriginUiEmptyState title="Empty" />);
        expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("calls onAction when action button is clicked", async () => {
        const user = userEvent.setup();
        const onAction = jest.fn();
        render(<OriginUiEmptyState title="Empty" actionLabel="Do it" onAction={onAction} />);
        await user.click(screen.getByRole("button", { name: "Do it" }));
        expect(onAction).toHaveBeenCalledTimes(1);
    });

    it("applies custom className", () => {
        const { container } = render(<OriginUiEmptyState title="Empty" className="my-class" />);
        expect(container.firstChild).toHaveClass("my-class");
    });
});
