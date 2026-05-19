import { render, screen } from "@testing-library/react";
import {
    Item,
    ItemGroup,
    ItemSeparator,
    ItemMedia,
    ItemContent,
    ItemTitle,
    ItemDescription,
    ItemActions,
    ItemHeader,
    ItemFooter,
} from "@/components/ui/item";

describe("ItemGroup", () => {
    it("renders with role=list", () => {
        render(<ItemGroup />);
        expect(screen.getByRole("list")).toBeInTheDocument();
    });

    it("has data-slot=item-group", () => {
        render(<ItemGroup />);
        expect(screen.getByRole("list")).toHaveAttribute("data-slot", "item-group");
    });

    it("renders children", () => {
        render(
            <ItemGroup>
                <span>child</span>
            </ItemGroup>,
        );
        expect(screen.getByText("child")).toBeInTheDocument();
    });
});

describe("ItemSeparator", () => {
    it("renders with data-slot=item-separator", () => {
        const { container } = render(<ItemSeparator />);
        expect(container.firstChild).toHaveAttribute("data-slot", "item-separator");
    });
});

describe("Item", () => {
    it("renders as a div by default", () => {
        const { container } = render(<Item>content</Item>);
        expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("applies default variant classes", () => {
        const { container } = render(<Item>content</Item>);
        expect(container.firstChild).toHaveClass("border-transparent");
    });

    it("applies outline variant", () => {
        const { container } = render(<Item variant="outline">content</Item>);
        expect(container.firstChild).toHaveClass("border-border");
    });

    it("applies muted variant", () => {
        const { container } = render(<Item variant="muted">content</Item>);
        expect(container.firstChild).toHaveClass("bg-muted/50");
    });

    it("applies sm size", () => {
        const { container } = render(<Item size="sm">content</Item>);
        expect(container.firstChild).toHaveClass("px-3");
    });

    it("applies xs size", () => {
        const { container } = render(<Item size="xs">content</Item>);
        expect(container.firstChild).toHaveClass("px-2.5");
    });

    it("renders as an anchor when render prop is provided", () => {
        const { container } = render(<Item render={<a href="/test" />}>content</Item>);
        expect(container.querySelector("a")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Item className="custom-item">content</Item>);
        expect(container.firstChild).toHaveClass("custom-item");
    });
});

describe("ItemMedia", () => {
    it("has data-slot=item-media", () => {
        const { container } = render(<ItemMedia />);
        expect(container.firstChild).toHaveAttribute("data-slot", "item-media");
    });

    it("renders with default variant", () => {
        const { container } = render(<ItemMedia />);
        expect(container.firstChild).toHaveAttribute("data-variant", "default");
    });

    it("renders with icon variant", () => {
        const { container } = render(<ItemMedia variant="icon" />);
        expect(container.firstChild).toHaveAttribute("data-variant", "icon");
    });

    it("renders with image variant", () => {
        const { container } = render(<ItemMedia variant="image" />);
        expect(container.firstChild).toHaveAttribute("data-variant", "image");
    });
});

describe("ItemContent", () => {
    it("has data-slot=item-content", () => {
        const { container } = render(<ItemContent />);
        expect(container.firstChild).toHaveAttribute("data-slot", "item-content");
    });
});

describe("ItemTitle", () => {
    it("renders children", () => {
        render(<ItemTitle>Profile</ItemTitle>);
        expect(screen.getByText("Profile")).toBeInTheDocument();
    });

    it("has data-slot=item-title", () => {
        const { container } = render(<ItemTitle>Title</ItemTitle>);
        expect(container.firstChild).toHaveAttribute("data-slot", "item-title");
    });
});

describe("ItemDescription", () => {
    it("renders children", () => {
        render(<ItemDescription>Some description</ItemDescription>);
        expect(screen.getByText("Some description")).toBeInTheDocument();
    });

    it("has data-slot=item-description", () => {
        render(<ItemDescription>Desc</ItemDescription>);
        expect(screen.getByText("Desc")).toHaveAttribute("data-slot", "item-description");
    });
});

describe("ItemActions", () => {
    it("has data-slot=item-actions", () => {
        const { container } = render(<ItemActions />);
        expect(container.firstChild).toHaveAttribute("data-slot", "item-actions");
    });

    it("renders children", () => {
        render(
            <ItemActions>
                <button>Edit</button>
            </ItemActions>,
        );
        expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
    });
});

describe("ItemHeader", () => {
    it("has data-slot=item-header", () => {
        const { container } = render(<ItemHeader />);
        expect(container.firstChild).toHaveAttribute("data-slot", "item-header");
    });
});

describe("ItemFooter", () => {
    it("has data-slot=item-footer", () => {
        const { container } = render(<ItemFooter />);
        expect(container.firstChild).toHaveAttribute("data-slot", "item-footer");
    });
});
