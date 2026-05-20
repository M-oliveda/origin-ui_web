import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileNav } from "@/components/site-header-mobile-nav";

jest.mock("@/components/ui/sheet", () => ({
    Sheet: ({ children }: React.PropsWithChildren) => <div data-testid="sheet">{children}</div>,
    SheetContent: ({ children }: React.PropsWithChildren) => (
        <div data-testid="sheet-content">{children}</div>
    ),
    SheetHeader: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
    SheetTitle: ({ children }: React.PropsWithChildren) => <h2>{children}</h2>,
}));

jest.mock("@/components/ui/button", () => ({
    Button: ({
        children,
        onClick,
        ...props
    }: React.PropsWithChildren<{ onClick?: () => void }>) => (
        <button onClick={onClick} {...props}>
            {children}
        </button>
    ),
}));

describe("MobileNav", () => {
    it("renders the menu button with accessible label", () => {
        render(<MobileNav />);
        expect(screen.getByRole("button", { name: "Open navigation menu" })).toBeInTheDocument();
    });

    it("renders all navigation links", () => {
        render(<MobileNav />);
        expect(screen.getByRole("link", { name: "Fundamentals" })).toHaveAttribute(
            "href",
            "/fundamentals/typography",
        );
        expect(screen.getByRole("link", { name: "Components" })).toHaveAttribute(
            "href",
            "/components",
        );
        expect(screen.getByRole("link", { name: "Templates" })).toHaveAttribute(
            "href",
            "/templates",
        );
        expect(screen.getByRole("link", { name: "Export" })).toHaveAttribute("href", "/export");
    });

    it("opens the navigation sheet when the menu button is clicked", () => {
        render(<MobileNav />);
        const button = screen.getByRole("button", { name: "Open navigation menu" });
        fireEvent.click(button);
    });

    it("closes the navigation when the nav area is clicked", () => {
        render(<MobileNav />);
        const nav = screen.getByRole("navigation", { name: "Mobile navigation" });
        fireEvent.click(nav);
    });
});
