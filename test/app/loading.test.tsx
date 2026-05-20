import { render } from "@testing-library/react";
import Loading from "@/app/loading";

describe("Loading", () => {
    it("renders six skeleton elements", () => {
        const { container } = render(<Loading />);
        const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
        expect(skeletons).toHaveLength(6);
    });

    it("renders a wrapping container", () => {
        const { container } = render(<Loading />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
