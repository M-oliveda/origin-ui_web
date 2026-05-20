import { render, screen } from "@testing-library/react";
import NotFound, { metadata } from "@/app/not-found";

describe("NotFound", () => {
    beforeEach(() => {
        render(<NotFound />);
    });

    it("renders the 404 label", () => {
        expect(screen.getByText("404")).toBeInTheDocument();
    });

    it("renders page not found heading", () => {
        expect(
            screen.getByRole("heading", { level: 1, name: "Page not found" }),
        ).toBeInTheDocument();
    });

    it("renders the description", () => {
        expect(screen.getByText(/doesn't exist or has been moved/i)).toBeInTheDocument();
    });

    it("renders back to home link pointing to /", () => {
        const link = screen.getByRole("link", { name: "Back to home" });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/");
    });
});

describe("NotFound metadata", () => {
    it("exports a title containing 404", () => {
        expect(metadata.title).toContain("404");
    });

    it("exports a description", () => {
        expect(metadata.description).toBeDefined();
    });
});
