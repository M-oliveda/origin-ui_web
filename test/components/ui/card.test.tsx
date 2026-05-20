import { render, screen } from "@testing-library/react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

describe("Card", () => {
    it("renders with data-slot=card", () => {
        const { container } = render(<Card />);
        expect(container.firstChild).toHaveAttribute("data-slot", "card");
    });

    it("applies default size", () => {
        const { container } = render(<Card />);
        expect(container.firstChild).toHaveAttribute("data-size", "default");
    });

    it("applies sm size", () => {
        const { container } = render(<Card size="sm" />);
        expect(container.firstChild).toHaveAttribute("data-size", "sm");
    });

    it("applies custom className", () => {
        const { container } = render(<Card className="my-card" />);
        expect(container.firstChild).toHaveClass("my-card");
    });

    it("renders children", () => {
        render(
            <Card>
                <span>content</span>
            </Card>,
        );
        expect(screen.getByText("content")).toBeInTheDocument();
    });
});

describe("CardHeader", () => {
    it("renders with data-slot=card-header", () => {
        const { container } = render(<CardHeader />);
        expect(container.firstChild).toHaveAttribute("data-slot", "card-header");
    });
});

describe("CardTitle", () => {
    it("renders children", () => {
        render(<CardTitle>My Title</CardTitle>);
        expect(screen.getByText("My Title")).toBeInTheDocument();
    });

    it("has data-slot=card-title", () => {
        const { container } = render(<CardTitle>Title</CardTitle>);
        expect(container.firstChild).toHaveAttribute("data-slot", "card-title");
    });
});

describe("CardDescription", () => {
    it("renders children", () => {
        render(<CardDescription>A description</CardDescription>);
        expect(screen.getByText("A description")).toBeInTheDocument();
    });

    it("has data-slot=card-description", () => {
        const { container } = render(<CardDescription>Desc</CardDescription>);
        expect(container.firstChild).toHaveAttribute("data-slot", "card-description");
    });
});

describe("CardAction", () => {
    it("renders children", () => {
        render(
            <CardAction>
                <button>Action</button>
            </CardAction>,
        );
        expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
    });

    it("has data-slot=card-action", () => {
        const { container } = render(<CardAction />);
        expect(container.firstChild).toHaveAttribute("data-slot", "card-action");
    });
});

describe("CardContent", () => {
    it("renders children", () => {
        render(<CardContent>Body</CardContent>);
        expect(screen.getByText("Body")).toBeInTheDocument();
    });

    it("has data-slot=card-content", () => {
        const { container } = render(<CardContent />);
        expect(container.firstChild).toHaveAttribute("data-slot", "card-content");
    });
});

describe("CardFooter", () => {
    it("renders children", () => {
        render(<CardFooter>Footer</CardFooter>);
        expect(screen.getByText("Footer")).toBeInTheDocument();
    });

    it("has data-slot=card-footer", () => {
        const { container } = render(<CardFooter />);
        expect(container.firstChild).toHaveAttribute("data-slot", "card-footer");
    });
});
