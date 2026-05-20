import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme-provider";

jest.mock("next-themes", () => ({
    ThemeProvider: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
        <div data-testid="next-themes-provider" data-attribute={props.attribute as string}>
            {children}
        </div>
    ),
}));

describe("ThemeProvider", () => {
    it("renders children inside NextThemesProvider", () => {
        render(
            <ThemeProvider>
                <span data-testid="child">content</span>
            </ThemeProvider>,
        );
        expect(screen.getByTestId("next-themes-provider")).toBeInTheDocument();
        expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("passes props through to NextThemesProvider", () => {
        render(<ThemeProvider attribute="class" />);
        const provider = screen.getByTestId("next-themes-provider");
        expect(provider).toHaveAttribute("data-attribute", "class");
    });
});
