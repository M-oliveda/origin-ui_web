import { render, screen } from "@testing-library/react";
import { OriginUiPageHeader } from "@/components/branding/origin-ui-page-header";

describe("OriginUiPageHeader", () => {
    it("renders the title", () => {
        render(<OriginUiPageHeader title="Dashboard" />);
        expect(screen.getByRole("heading", { name: "Dashboard" })).toBeInTheDocument();
    });

    it("renders description when provided", () => {
        render(<OriginUiPageHeader title="Dashboard" description="Overview of your data" />);
        expect(screen.getByText("Overview of your data")).toBeInTheDocument();
    });

    it("does not render description when omitted", () => {
        render(<OriginUiPageHeader title="Dashboard" />);
        expect(screen.queryByText("Overview of your data")).not.toBeInTheDocument();
    });

    it("renders actions when provided", () => {
        render(<OriginUiPageHeader title="Dashboard" actions={<button>New Item</button>} />);
        expect(screen.getByRole("button", { name: "New Item" })).toBeInTheDocument();
    });

    it("does not render actions container when omitted", () => {
        const { container } = render(<OriginUiPageHeader title="Dashboard" />);
        // No button should be rendered
        expect(container.querySelector("button")).not.toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(
            <OriginUiPageHeader title="Dashboard" className="my-header" />,
        );
        expect(container.firstChild).toHaveClass("my-header");
    });
});
