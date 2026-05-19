import { render, screen } from "@testing-library/react";
import {
    Field,
    FieldLabel,
    FieldDescription,
    FieldError,
    FieldSuccess,
    FieldGroup,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldContent,
    FieldTitle,
} from "@/components/ui/field";

describe("FieldSet", () => {
    it("renders a fieldset element", () => {
        const { container } = render(<FieldSet />);
        expect(container.querySelector("fieldset")).toBeInTheDocument();
    });

    it("has data-slot=field-set", () => {
        const { container } = render(<FieldSet />);
        expect(container.querySelector("fieldset")).toHaveAttribute("data-slot", "field-set");
    });

    it("applies custom className", () => {
        const { container } = render(<FieldSet className="custom-fs" />);
        expect(container.querySelector("fieldset")).toHaveClass("custom-fs");
    });
});

describe("FieldLegend", () => {
    it("renders a legend element", () => {
        const { container } = render(<FieldLegend>Legend</FieldLegend>);
        expect(container.querySelector("legend")).toBeInTheDocument();
    });

    it("has default legend variant", () => {
        const { container } = render(<FieldLegend>Legend</FieldLegend>);
        expect(container.querySelector("legend")).toHaveAttribute("data-variant", "legend");
    });

    it("accepts label variant", () => {
        const { container } = render(<FieldLegend variant="label">Label</FieldLegend>);
        expect(container.querySelector("legend")).toHaveAttribute("data-variant", "label");
    });
});

describe("FieldGroup", () => {
    it("has data-slot=field-group", () => {
        const { container } = render(<FieldGroup />);
        expect(container.firstChild).toHaveAttribute("data-slot", "field-group");
    });
});

describe("Field", () => {
    it("renders with role=group", () => {
        render(<Field />);
        expect(screen.getByRole("group")).toBeInTheDocument();
    });

    it("has data-slot=field", () => {
        render(<Field />);
        expect(screen.getByRole("group")).toHaveAttribute("data-slot", "field");
    });

    it("applies vertical orientation by default", () => {
        render(<Field />);
        expect(screen.getByRole("group")).toHaveAttribute("data-orientation", "vertical");
    });

    it("applies horizontal orientation", () => {
        render(<Field orientation="horizontal" />);
        expect(screen.getByRole("group")).toHaveAttribute("data-orientation", "horizontal");
    });

    it("applies responsive orientation", () => {
        render(<Field orientation="responsive" />);
        expect(screen.getByRole("group")).toHaveAttribute("data-orientation", "responsive");
    });

    it("applies custom className", () => {
        render(<Field className="custom-field" />);
        expect(screen.getByRole("group")).toHaveClass("custom-field");
    });
});

describe("FieldContent", () => {
    it("has data-slot=field-content", () => {
        const { container } = render(<FieldContent />);
        expect(container.firstChild).toHaveAttribute("data-slot", "field-content");
    });
});

describe("FieldLabel", () => {
    it("renders a label element", () => {
        const { container } = render(<FieldLabel>Label</FieldLabel>);
        expect(container.querySelector("label")).toBeInTheDocument();
    });

    it("has data-slot=field-label", () => {
        const { container } = render(<FieldLabel>Label</FieldLabel>);
        expect(container.querySelector("label")).toHaveAttribute("data-slot", "field-label");
    });
});

describe("FieldTitle", () => {
    it("renders children", () => {
        render(<FieldTitle>Title</FieldTitle>);
        expect(screen.getByText("Title")).toBeInTheDocument();
    });

    it("has data-slot=field-label", () => {
        const { container } = render(<FieldTitle>Title</FieldTitle>);
        expect(container.firstChild).toHaveAttribute("data-slot", "field-label");
    });
});

describe("FieldDescription", () => {
    it("renders children", () => {
        render(<FieldDescription>Helper text</FieldDescription>);
        expect(screen.getByText("Helper text")).toBeInTheDocument();
    });

    it("has data-slot=field-description", () => {
        render(<FieldDescription>Desc</FieldDescription>);
        expect(screen.getByText("Desc")).toHaveAttribute("data-slot", "field-description");
    });
});

describe("FieldSeparator", () => {
    it("has data-slot=field-separator", () => {
        const { container } = render(<FieldSeparator />);
        expect(container.firstChild).toHaveAttribute("data-slot", "field-separator");
    });

    it("renders without content children", () => {
        const { container } = render(<FieldSeparator />);
        expect(container.firstChild).toHaveAttribute("data-content", "false");
    });

    it("renders with children content", () => {
        const { container } = render(<FieldSeparator>OR</FieldSeparator>);
        expect(container.firstChild).toHaveAttribute("data-content", "true");
        expect(screen.getByText("OR")).toBeInTheDocument();
    });
});

describe("FieldError", () => {
    it("renders nothing when no children and no errors", () => {
        const { container } = render(<FieldError />);
        expect(container.firstChild).not.toBeInTheDocument();
    });

    it("renders nothing when errors array is empty", () => {
        const { container } = render(<FieldError errors={[]} />);
        expect(container.firstChild).not.toBeInTheDocument();
    });

    it("renders children when provided", () => {
        render(<FieldError>Something went wrong</FieldError>);
        expect(screen.getByRole("alert")).toHaveTextContent("Something went wrong");
    });

    it("renders a single error message from errors array", () => {
        render(<FieldError errors={[{ message: "Required" }]} />);
        expect(screen.getByRole("alert")).toHaveTextContent("Required");
    });

    it("renders multiple unique errors as a list", () => {
        render(<FieldError errors={[{ message: "Too short" }, { message: "Invalid format" }]} />);
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText("Too short")).toBeInTheDocument();
        expect(screen.getByText("Invalid format")).toBeInTheDocument();
    });

    it("deduplicates errors with the same message", () => {
        render(<FieldError errors={[{ message: "Required" }, { message: "Required" }]} />);
        // Should show only one instance
        expect(screen.getAllByText("Required")).toHaveLength(1);
    });

    it("handles undefined entries in errors array", () => {
        render(<FieldError errors={[undefined, { message: "Error" }]} />);
        expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<FieldError className="custom-err">Error</FieldError>);
        expect(screen.getByRole("alert")).toHaveClass("custom-err");
    });

    it("renders nothing when all errors have undefined messages", () => {
        render(<FieldError errors={[{ message: undefined }]} />);
        // The single unique error has undefined message, renders nothing visible
        expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
});

describe("FieldSuccess", () => {
    it("renders nothing when no children and no messages", () => {
        const { container } = render(<FieldSuccess />);
        expect(container.firstChild).not.toBeInTheDocument();
    });

    it("renders nothing when messages array is empty", () => {
        const { container } = render(<FieldSuccess messages={[]} />);
        expect(container.firstChild).not.toBeInTheDocument();
    });

    it("renders children when provided", () => {
        render(<FieldSuccess>Saved!</FieldSuccess>);
        expect(screen.getByRole("status")).toHaveTextContent("Saved!");
    });

    it("renders a single success message from messages array", () => {
        render(<FieldSuccess messages={[{ message: "All good" }]} />);
        expect(screen.getByRole("status")).toHaveTextContent("All good");
    });

    it("renders multiple unique success messages as a list", () => {
        render(<FieldSuccess messages={[{ message: "Saved" }, { message: "Synced" }]} />);
        expect(screen.getByRole("status")).toBeInTheDocument();
        expect(screen.getByText("Saved")).toBeInTheDocument();
        expect(screen.getByText("Synced")).toBeInTheDocument();
    });

    it("deduplicates messages with the same text", () => {
        render(<FieldSuccess messages={[{ message: "OK" }, { message: "OK" }]} />);
        expect(screen.getAllByText("OK")).toHaveLength(1);
    });

    it("handles undefined entries in messages array", () => {
        render(<FieldSuccess messages={[undefined, { message: "Success" }]} />);
        expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<FieldSuccess className="custom-ok">OK</FieldSuccess>);
        expect(screen.getByRole("status")).toHaveClass("custom-ok");
    });

    it("renders nothing when all messages have undefined message", () => {
        render(<FieldSuccess messages={[{ message: undefined }]} />);
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });
});
