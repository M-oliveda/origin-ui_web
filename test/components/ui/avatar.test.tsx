import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("@base-ui/react/avatar", () => ({
    Avatar: {
        Root: ({ children, className, ...props }: React.ComponentProps<"span">) => (
            <span className={className} {...props}>
                {children}
            </span>
        ),
        Image: ({ className, alt = "", ...props }: React.ComponentProps<"img">) => (
            // eslint-disable-next-line @next/next/no-img-element -- test mock for Base UI Avatar.Image
            <img alt={alt} className={className} {...props} />
        ),
        Fallback: ({ children, className, ...props }: React.ComponentProps<"span">) => (
            <span className={className} {...props}>
                {children}
            </span>
        ),
    },
}));

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarBadge,
    AvatarGroup,
    AvatarGroupCount,
} from "@/components/ui/avatar";

describe("Avatar", () => {
    it("renders with data-slot=avatar", () => {
        const { container } = render(<Avatar />);
        expect(container.firstChild).toHaveAttribute("data-slot", "avatar");
    });

    it("renders with default size", () => {
        const { container } = render(<Avatar />);
        expect(container.firstChild).toHaveAttribute("data-size", "default");
    });

    it("renders with sm size", () => {
        const { container } = render(<Avatar size="sm" />);
        expect(container.firstChild).toHaveAttribute("data-size", "sm");
    });

    it("renders with lg size", () => {
        const { container } = render(<Avatar size="lg" />);
        expect(container.firstChild).toHaveAttribute("data-size", "lg");
    });

    it("applies custom className", () => {
        const { container } = render(<Avatar className="custom-avatar" />);
        expect(container.firstChild).toHaveClass("custom-avatar");
    });

    it("renders fallback text when no image", () => {
        render(
            <Avatar>
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>,
        );
        expect(screen.getByText("JD")).toBeInTheDocument();
    });
});

describe("AvatarFallback", () => {
    it("renders with data-slot=avatar-fallback", () => {
        const { container } = render(
            <Avatar>
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>,
        );
        expect(container.querySelector("[data-slot='avatar-fallback']")).toBeInTheDocument();
    });
});

describe("AvatarImage", () => {
    it("renders with data-slot=avatar-image", () => {
        const { container } = render(
            <Avatar>
                <AvatarImage src="test.png" alt="Test" />
                <AvatarFallback>T</AvatarFallback>
            </Avatar>,
        );
        expect(container.querySelector("[data-slot='avatar-image']")).toBeInTheDocument();
    });

    it("renders image with src and alt", () => {
        render(
            <Avatar>
                <AvatarImage src="test.png" alt="Test" />
            </Avatar>,
        );
        expect(screen.getByRole("img", { name: "Test" })).toHaveAttribute("src", "test.png");
    });
});

describe("AvatarBadge", () => {
    it("renders with data-slot=avatar-badge", () => {
        const { container } = render(
            <Avatar>
                <AvatarBadge />
            </Avatar>,
        );
        expect(container.querySelector("[data-slot='avatar-badge']")).toBeInTheDocument();
    });

    it("renders children", () => {
        render(
            <Avatar>
                <AvatarBadge>
                    <span>3</span>
                </AvatarBadge>
            </Avatar>,
        );
        expect(screen.getByText("3")).toBeInTheDocument();
    });
});

describe("AvatarGroup", () => {
    it("renders with data-slot=avatar-group", () => {
        const { container } = render(<AvatarGroup />);
        expect(container.firstChild).toHaveAttribute("data-slot", "avatar-group");
    });

    it("renders children avatars", () => {
        render(
            <AvatarGroup>
                <Avatar>
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarFallback>B</AvatarFallback>
                </Avatar>
            </AvatarGroup>,
        );
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("B")).toBeInTheDocument();
    });
});

describe("AvatarGroupCount", () => {
    it("renders with data-slot=avatar-group-count", () => {
        const { container } = render(<AvatarGroupCount>+5</AvatarGroupCount>);
        expect(container.firstChild).toHaveAttribute("data-slot", "avatar-group-count");
    });

    it("renders children", () => {
        render(<AvatarGroupCount>+3</AvatarGroupCount>);
        expect(screen.getByText("+3")).toBeInTheDocument();
    });
});
