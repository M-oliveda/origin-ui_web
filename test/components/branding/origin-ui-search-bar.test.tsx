import { render, screen } from "@testing-library/react";
import { OriginUiSearchBar } from "@/components/branding/origin-ui-search-bar";

describe("OriginUiSearchBar", () => {
    it("renders an input with default placeholder", () => {
        render(<OriginUiSearchBar />);
        expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    it("renders with custom placeholder", () => {
        render(<OriginUiSearchBar placeholder="Find something..." />);
        expect(screen.getByPlaceholderText("Find something...")).toBeInTheDocument();
    });

    it("renders search icon", () => {
        const { container } = render(<OriginUiSearchBar />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders keyboard shortcut when shortcut provided", () => {
        render(<OriginUiSearchBar shortcut="⌘K" />);
        expect(screen.getByText("⌘K")).toBeInTheDocument();
    });

    it("does not render keyboard shortcut when not provided", () => {
        render(<OriginUiSearchBar />);
        expect(screen.queryByRole("term")).not.toBeInTheDocument();
    });

    it("applies custom className to wrapper", () => {
        const { container } = render(<OriginUiSearchBar className="search-wrapper" />);
        expect(container.firstChild).toHaveClass("search-wrapper");
    });

    it("passes additional props to the Input", () => {
        render(<OriginUiSearchBar disabled />);
        const input = screen.getByRole("textbox");
        expect(input).toBeDisabled();
    });
});
