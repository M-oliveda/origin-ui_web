import { render, screen } from "@testing-library/react";
import { OriginInputComponent } from "@/components/branding/origin-ui-input";
import { Mail } from "lucide-react";

describe("OriginInputComponent", () => {
    it("renders an input element", () => {
        render(<OriginInputComponent />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders a label when provided", () => {
        render(<OriginInputComponent label="Email" />);
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("does not render a label when omitted", () => {
        render(<OriginInputComponent />);
        expect(screen.queryByRole("label")).not.toBeInTheDocument();
    });

    it("renders the icon when provided", () => {
        const { container } = render(<OriginInputComponent icon={Mail} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("applies error color to field icon when validationState is error", () => {
        const { container } = render(<OriginInputComponent icon={Mail} validationState="error" />);
        const fieldIcon = container.querySelector(".relative svg");
        expect(fieldIcon).toHaveClass("text-error");
    });

    it("applies success color to field icon when validationState is success", () => {
        const { container } = render(
            <OriginInputComponent icon={Mail} validationState="success" />,
        );
        const fieldIcons = container.querySelectorAll(".relative svg");
        expect(fieldIcons[0]).toHaveClass("text-success");
    });

    it("does not render icon area when no icon", () => {
        const { container } = render(<OriginInputComponent validationState="idle" />);
        const icons = container.querySelectorAll("svg");
        expect(icons).toHaveLength(0);
    });

    it("renders error message on error state", () => {
        render(<OriginInputComponent validationState="error" errorMessage="Invalid email" />);
        expect(screen.getByRole("alert")).toHaveTextContent("Invalid email");
    });

    it("does not render error message when state is idle", () => {
        render(<OriginInputComponent validationState="idle" errorMessage="Invalid" />);
        expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("renders success message on success state", () => {
        render(<OriginInputComponent validationState="success" successMessage="Looks good!" />);
        expect(screen.getByText("Looks good!")).toBeInTheDocument();
    });

    it("does not render success message when state is idle", () => {
        render(<OriginInputComponent validationState="idle" successMessage="OK" />);
        expect(screen.queryByText("OK")).not.toBeInTheDocument();
    });

    it("sets aria-invalid when validation state is error", () => {
        render(<OriginInputComponent validationState="error" />);
        expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    });

    it("does not set aria-invalid when validation state is idle", () => {
        render(<OriginInputComponent validationState="idle" />);
        expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
    });

    it("does not set aria-invalid when validation state is success", () => {
        render(<OriginInputComponent validationState="success" />);
        expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
    });

    it("renders validation icon on success", () => {
        const { container } = render(<OriginInputComponent validationState="success" />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders validation icon on error", () => {
        const { container } = render(<OriginInputComponent validationState="error" />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("uses provided id for input and label", () => {
        render(<OriginInputComponent label="Name" id="my-input" />);
        const label = screen.getByText("Name");
        expect(label).toHaveAttribute("for", "my-input");
        expect(screen.getByLabelText("Name")).toHaveAttribute("id", "my-input");
    });

    it("applies custom className", () => {
        const { container } = render(<OriginInputComponent className="custom" />);
        expect(container.firstChild).toHaveClass("custom");
    });
});
