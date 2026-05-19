import { render, screen } from "@testing-library/react";
import {
    Empty,
    EmptyHeader,
    EmptyTitle,
    EmptyDescription,
    EmptyContent,
    EmptyMedia,
} from "@/components/ui/empty";

describe("Empty", () => {
    it("renders with data-slot=empty", () => {
        const { container } = render(<Empty />);
        expect(container.firstChild).toHaveAttribute("data-slot", "empty");
    });

    it("renders children", () => {
        render(
            <Empty>
                <span>No data</span>
            </Empty>,
        );
        expect(screen.getByText("No data")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Empty className="custom-empty" />);
        expect(container.firstChild).toHaveClass("custom-empty");
    });
});

describe("EmptyHeader", () => {
    it("renders with data-slot=empty-header", () => {
        const { container } = render(<EmptyHeader />);
        expect(container.firstChild).toHaveAttribute("data-slot", "empty-header");
    });
});

describe("EmptyTitle", () => {
    it("renders children", () => {
        render(<EmptyTitle>No items found</EmptyTitle>);
        expect(screen.getByText("No items found")).toBeInTheDocument();
    });

    it("has data-slot=empty-title", () => {
        const { container } = render(<EmptyTitle>Title</EmptyTitle>);
        expect(container.firstChild).toHaveAttribute("data-slot", "empty-title");
    });
});

describe("EmptyDescription", () => {
    it("renders children", () => {
        render(<EmptyDescription>Try adding something</EmptyDescription>);
        expect(screen.getByText("Try adding something")).toBeInTheDocument();
    });

    it("has data-slot=empty-description", () => {
        const { container } = render(<EmptyDescription>Desc</EmptyDescription>);
        expect(container.firstChild).toHaveAttribute("data-slot", "empty-description");
    });
});

describe("EmptyContent", () => {
    it("renders children", () => {
        render(
            <EmptyContent>
                <button>Add</button>
            </EmptyContent>,
        );
        expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
    });

    it("has data-slot=empty-content", () => {
        const { container } = render(<EmptyContent />);
        expect(container.firstChild).toHaveAttribute("data-slot", "empty-content");
    });
});

describe("EmptyMedia", () => {
    it("renders with data-slot=empty-icon", () => {
        const { container } = render(<EmptyMedia />);
        expect(container.firstChild).toHaveAttribute("data-slot", "empty-icon");
    });

    it("renders with default variant", () => {
        const { container } = render(<EmptyMedia />);
        expect(container.firstChild).toHaveAttribute("data-variant", "default");
    });

    it("renders with icon variant", () => {
        const { container } = render(<EmptyMedia variant="icon" />);
        expect(container.firstChild).toHaveAttribute("data-variant", "icon");
    });

    it("applies custom className", () => {
        const { container } = render(<EmptyMedia className="custom-media" />);
        expect(container.firstChild).toHaveClass("custom-media");
    });
});
