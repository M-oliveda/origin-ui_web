import { render, screen } from "@testing-library/react";
import { Badge, badgeVariants } from "@/components/ui/badge";

describe("Badge", () => {
    it("renders children", () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText("New")).toBeInTheDocument();
    });

    it("renders as a span by default", () => {
        const { container } = render(<Badge>Tag</Badge>);
        expect(container.querySelector("span")).toBeInTheDocument();
    });

    it("applies default variant classes", () => {
        const { container } = render(<Badge>Tag</Badge>);
        expect(container.firstChild).toHaveClass("bg-primary");
    });

    it("applies secondary variant", () => {
        const { container } = render(<Badge variant="secondary">Tag</Badge>);
        expect(container.firstChild).toHaveClass("bg-secondary");
    });

    it("applies destructive variant", () => {
        const { container } = render(<Badge variant="destructive">Tag</Badge>);
        expect(container.firstChild).toHaveClass("bg-destructive/10");
    });

    it("applies success variant", () => {
        const { container } = render(<Badge variant="success">Tag</Badge>);
        expect(container.firstChild).toHaveClass("bg-success/10");
    });

    it("applies outline variant", () => {
        const { container } = render(<Badge variant="outline">Tag</Badge>);
        expect(container.firstChild).toHaveClass("border-border");
    });

    it("applies ghost variant", () => {
        const { container } = render(<Badge variant="ghost">Tag</Badge>);
        expect(container.firstChild).toHaveClass("hover:bg-muted");
    });

    it("applies link variant", () => {
        const { container } = render(<Badge variant="link">Tag</Badge>);
        expect(container.firstChild).toHaveClass("text-primary");
    });

    it("applies custom className", () => {
        const { container } = render(<Badge className="custom-badge">Tag</Badge>);
        expect(container.firstChild).toHaveClass("custom-badge");
    });

    it("renders as anchor when render prop is anchor", () => {
        const { container } = render(<Badge render={<a href="/test" />}>Link</Badge>);
        expect(container.querySelector("a")).toBeInTheDocument();
    });

    it("exports badgeVariants with variant classes", () => {
        expect(badgeVariants({ variant: "outline" })).toContain("border-border");
    });
});
