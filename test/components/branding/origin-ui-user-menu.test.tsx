import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("@/components/ui/dropdown-menu", () => ({
    DropdownMenu: ({ children }: React.PropsWithChildren) => (
        <div data-testid="user-menu">{children}</div>
    ),
    DropdownMenuTrigger: ({ children }: React.PropsWithChildren) => (
        <button data-testid="user-menu-trigger">{children}</button>
    ),
    DropdownMenuContent: ({ children }: React.PropsWithChildren) => (
        <div data-testid="user-menu-content">{children}</div>
    ),
    DropdownMenuLabel: ({ children }: React.PropsWithChildren) => (
        <div data-testid="user-menu-label">{children}</div>
    ),
    DropdownMenuSeparator: () => <hr data-testid="user-menu-sep" />,
    DropdownMenuItem: ({
        children,
        onClick,
    }: React.PropsWithChildren<{ onClick?: () => void }>) => (
        <button data-testid="user-menu-item" onClick={onClick}>
            {children}
        </button>
    ),
}));

jest.mock("@/components/ui/avatar", () => ({
    Avatar: ({ children }: React.PropsWithChildren) => <div data-testid="avatar">{children}</div>,
    AvatarFallback: ({ children }: React.PropsWithChildren) => (
        <span data-testid="avatar-fallback">{children}</span>
    ),
}));

import { OriginUiUserMenu } from "@/components/branding/origin-ui-user-menu";

describe("OriginUiUserMenu", () => {
    it("renders with default props", () => {
        render(<OriginUiUserMenu />);
        expect(screen.getByTestId("user-menu")).toBeInTheDocument();
    });

    it("renders initials in avatar fallback", () => {
        render(<OriginUiUserMenu initials="JD" />);
        expect(screen.getByTestId("avatar-fallback")).toHaveTextContent("JD");
    });

    it("renders name in menu label", () => {
        render(<OriginUiUserMenu name="Jane Doe" />);
        expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    });

    it("renders email in menu label", () => {
        render(<OriginUiUserMenu email="jane@example.com" />);
        expect(screen.getByText("jane@example.com")).toBeInTheDocument();
    });

    it("renders Profile, Billing, Settings, Log out menu items", () => {
        render(<OriginUiUserMenu />);
        expect(screen.getByText("Profile")).toBeInTheDocument();
        expect(screen.getByText("Billing")).toBeInTheDocument();
        expect(screen.getByText("Settings")).toBeInTheDocument();
        expect(screen.getByText("Log out")).toBeInTheDocument();
    });

    it("calls onProfile when Profile is clicked", async () => {
        const user = userEvent.setup();
        const onProfile = jest.fn();
        render(<OriginUiUserMenu onProfile={onProfile} />);
        await user.click(screen.getByRole("button", { name: "Profile" }));
        expect(onProfile).toHaveBeenCalledTimes(1);
    });

    it("calls onBilling when Billing is clicked", async () => {
        const user = userEvent.setup();
        const onBilling = jest.fn();
        render(<OriginUiUserMenu onBilling={onBilling} />);
        await user.click(screen.getByRole("button", { name: "Billing" }));
        expect(onBilling).toHaveBeenCalledTimes(1);
    });

    it("calls onSettings when Settings is clicked", async () => {
        const user = userEvent.setup();
        const onSettings = jest.fn();
        render(<OriginUiUserMenu onSettings={onSettings} />);
        await user.click(screen.getByRole("button", { name: "Settings" }));
        expect(onSettings).toHaveBeenCalledTimes(1);
    });

    it("calls onLogout when Log out is clicked", async () => {
        const user = userEvent.setup();
        const onLogout = jest.fn();
        render(<OriginUiUserMenu onLogout={onLogout} />);
        await user.click(screen.getByRole("button", { name: "Log out" }));
        expect(onLogout).toHaveBeenCalledTimes(1);
    });
});
