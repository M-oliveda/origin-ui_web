import React, { useSyncExternalStore } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock react so we can control useSyncExternalStore to test SSR (not-mounted) branch
jest.mock("react", () => {
    const actual = jest.requireActual<typeof React>("react");
    return {
        ...actual,
        useSyncExternalStore: jest.fn((...args: Parameters<typeof actual.useSyncExternalStore>) =>
            actual.useSyncExternalStore(...args),
        ),
    };
});

const mockSetTheme = jest.fn();

jest.mock("next-themes", () => ({
    useTheme: jest.fn(() => ({ theme: "light", setTheme: mockSetTheme })),
}));

jest.mock("@/components/ui/dropdown-menu", () => ({
    DropdownMenu: ({ children }: React.PropsWithChildren) => <>{children}</>,
    DropdownMenuTrigger: ({ children }: React.PropsWithChildren) => (
        <button data-testid="toggle-trigger">{children}</button>
    ),
    DropdownMenuContent: ({ children }: React.PropsWithChildren) => (
        <div data-testid="toggle-content">{children}</div>
    ),
    DropdownMenuItem: ({
        children,
        onClick,
    }: React.PropsWithChildren<{ onClick?: () => void }>) => (
        <button data-testid="toggle-item" onClick={onClick}>
            {children}
        </button>
    ),
}));

import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

const mockUseSyncExternalStore = jest.mocked(useSyncExternalStore);
const mockUseTheme = jest.mocked(useTheme as jest.Mock);

describe("ThemeToggle", () => {
    beforeEach(() => {
        mockSetTheme.mockClear();
        // Default: browser environment — mounted = true
        mockUseSyncExternalStore.mockImplementation(
            (...args: Parameters<typeof useSyncExternalStore>) =>
                jest
                    .requireActual<typeof React>("react")
                    .useSyncExternalStore(...(args as Parameters<typeof useSyncExternalStore>)),
        );
        mockUseTheme.mockReturnValue({ theme: "light", setTheme: mockSetTheme });
    });

    describe("SSR (not mounted)", () => {
        it("renders a static button with Toggle theme label", () => {
            mockUseSyncExternalStore.mockReturnValueOnce(false);
            render(<ThemeToggle />);
            const button = screen.getByRole("button");
            expect(button).toBeInTheDocument();
            expect(screen.getByText("Toggle theme")).toBeInTheDocument();
        });

        it("invokes getServerSnapshot for SSR", () => {
            let serverSnapshot: boolean | undefined;
            mockUseSyncExternalStore.mockImplementation(
                (_subscribe, _getSnapshot, getServerSnapshot) => {
                    serverSnapshot = getServerSnapshot?.() === true;
                    return false;
                },
            );
            render(<ThemeToggle />);
            expect(serverSnapshot).toBe(false);
            expect(screen.getByRole("button")).toBeInTheDocument();
        });
    });

    describe("mounted (client)", () => {
        it("renders with trigger button when mounted", () => {
            render(<ThemeToggle />);
            expect(screen.getByTestId("toggle-trigger")).toBeInTheDocument();
            expect(screen.getByText("Toggle theme")).toBeInTheDocument();
        });

        it("renders sun icon branch when theme is light", () => {
            mockUseTheme.mockReturnValue({ theme: "light", setTheme: mockSetTheme });
            const { container } = render(<ThemeToggle />);
            expect(container.querySelector("svg")).toBeInTheDocument();
        });

        it("renders moon icon branch when theme is dark", () => {
            mockUseTheme.mockReturnValue({ theme: "dark", setTheme: mockSetTheme });
            const { container } = render(<ThemeToggle />);
            expect(container.querySelector("svg")).toBeInTheDocument();
        });

        it("renders monitor icon branch for system/other theme", () => {
            mockUseTheme.mockReturnValue({ theme: "system", setTheme: mockSetTheme });
            const { container } = render(<ThemeToggle />);
            expect(container.querySelector("svg")).toBeInTheDocument();
        });

        it("calls setTheme('light') when Light item is clicked", async () => {
            const user = userEvent.setup();
            render(<ThemeToggle />);
            await user.click(screen.getByRole("button", { name: "Light" }));
            expect(mockSetTheme).toHaveBeenCalledWith("light");
        });

        it("calls setTheme('dark') when Dark item is clicked", async () => {
            const user = userEvent.setup();
            render(<ThemeToggle />);
            await user.click(screen.getByRole("button", { name: "Dark" }));
            expect(mockSetTheme).toHaveBeenCalledWith("dark");
        });

        it("calls setTheme('system') when System item is clicked", async () => {
            const user = userEvent.setup();
            render(<ThemeToggle />);
            await user.click(screen.getByRole("button", { name: "System" }));
            expect(mockSetTheme).toHaveBeenCalledWith("system");
        });
    });
});
