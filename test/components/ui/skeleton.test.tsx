import { render } from "@testing-library/react";
import { Skeleton } from "@/components/ui/skeleton";

describe("Skeleton", () => {
    it("renders with data-slot=skeleton", () => {
        const { container } = render(<Skeleton />);
        expect(container.firstChild).toHaveAttribute("data-slot", "skeleton");
    });

    it("applies animate shimmer class", () => {
        const { container } = render(<Skeleton />);
        expect(container.firstChild).toHaveClass("rounded-md");
    });

    it("applies custom className", () => {
        const { container } = render(<Skeleton className="h-4 w-24" />);
        expect(container.firstChild).toHaveClass("h-4");
        expect(container.firstChild).toHaveClass("w-24");
    });

    it("renders children", () => {
        const { getByText } = render(
            <Skeleton>
                <span>content</span>
            </Skeleton>,
        );
        expect(getByText("content")).toBeInTheDocument();
    });
});
