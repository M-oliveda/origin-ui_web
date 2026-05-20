import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/site-header";

jest.mock("@/components/theme-toggle", () => ({
    ThemeToggle: () => <button data-testid="theme-toggle">Toggle Theme</button>,
}));

jest.mock("@/components/ui/separator", () => ({
    Separator: () => <hr data-testid="separator" />,
}));

describe("SiteHeader", () => {
    it("renders the site logo link", () => {
        render(<SiteHeader />);
        const logo = screen.getByRole("link", { name: "Origin UI" });
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("href", "/");
    });

    it("renders Fundamentals navigation link", () => {
        render(<SiteHeader />);
        const link = screen.getByRole("link", { name: "Fundamentals" });
        expect(link).toHaveAttribute("href", "/fundamentals/typography");
    });

    it("renders Components navigation link", () => {
        render(<SiteHeader />);
        const link = screen.getByRole("link", { name: "Components" });
        expect(link).toHaveAttribute("href", "/components");
    });

    it("renders Templates navigation link", () => {
        render(<SiteHeader />);
        const link = screen.getByRole("link", { name: "Templates" });
        expect(link).toHaveAttribute("href", "/templates");
    });

    it("renders Export navigation link", () => {
        render(<SiteHeader />);
        const link = screen.getByRole("link", { name: "Export" });
        expect(link).toHaveAttribute("href", "/export");
    });

    it("renders the theme toggle", () => {
        render(<SiteHeader />);
        expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
    });

    it("renders the separator", () => {
        render(<SiteHeader />);
        expect(screen.getByTestId("separator")).toBeInTheDocument();
    });
});
