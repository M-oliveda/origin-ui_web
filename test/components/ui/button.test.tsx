import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, buttonVariants } from "@/components/ui/button";

describe("Button", () => {
    it("renders a button element", () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("has data-slot=button attribute", () => {
        render(<Button>Btn</Button>);
        expect(screen.getByRole("button")).toHaveAttribute("data-slot", "button");
    });

    it("applies default variant classes", () => {
        render(<Button>Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("bg-primary");
    });

    it("applies outline variant", () => {
        render(<Button variant="outline">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("border-border");
    });

    it("applies secondary variant", () => {
        render(<Button variant="secondary">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("bg-secondary");
    });

    it("applies ghost variant", () => {
        render(<Button variant="ghost">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("hover:bg-muted");
    });

    it("applies destructive variant", () => {
        render(<Button variant="destructive">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("bg-destructive/10");
    });

    it("applies link variant", () => {
        render(<Button variant="link">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("text-primary");
    });

    it("applies sm size", () => {
        render(<Button size="sm">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("h-7");
    });

    it("applies lg size", () => {
        render(<Button size="lg">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("h-10");
    });

    it("applies icon size", () => {
        render(<Button size="icon">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("size-8");
    });

    it("applies custom className", () => {
        render(<Button className="custom-btn">Btn</Button>);
        expect(screen.getByRole("button")).toHaveClass("custom-btn");
    });

    it("calls onClick handler", async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click</Button>);
        await user.click(screen.getByRole("button"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("can be disabled", () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("exports buttonVariants with size classes", () => {
        expect(buttonVariants({ size: "lg" })).toContain("h-10");
    });
});
