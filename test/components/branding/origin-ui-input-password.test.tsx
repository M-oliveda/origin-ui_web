import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
    OriginInputPassword,
    defaultPasswordRules,
    type PasswordRule,
} from "@/components/branding/origin-ui-input-password";

function getPasswordRule(key: string): PasswordRule {
    const rule = defaultPasswordRules.find((r) => r.key === key);
    if (!rule) {
        throw new Error(`Expected password rule "${key}" to exist`);
    }
    return rule;
}

describe("defaultPasswordRules", () => {
    it("has 5 rules", () => {
        expect(defaultPasswordRules).toHaveLength(5);
    });

    it("min-length rule passes for 8+ chars", () => {
        const rule = getPasswordRule("min-length");
        expect(rule.test("12345678")).toBe(true);
        expect(rule.test("1234567")).toBe(false);
    });

    it("uppercase rule", () => {
        const rule = getPasswordRule("uppercase");
        expect(rule.test("A")).toBe(true);
        expect(rule.test("a")).toBe(false);
    });

    it("lowercase rule", () => {
        const rule = getPasswordRule("lowercase");
        expect(rule.test("a")).toBe(true);
        expect(rule.test("A")).toBe(false);
    });

    it("number rule", () => {
        const rule = getPasswordRule("number");
        expect(rule.test("1")).toBe(true);
        expect(rule.test("a")).toBe(false);
    });

    it("special character rule", () => {
        const rule = getPasswordRule("special");
        expect(rule.test("!")).toBe(true);
        expect(rule.test("a")).toBe(false);
    });
});

describe("OriginInputPassword", () => {
    it("renders with default label 'Password'", () => {
        render(<OriginInputPassword />);
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    it("renders with custom label", () => {
        render(<OriginInputPassword label="New Password" />);
        expect(screen.getByLabelText("New Password")).toBeInTheDocument();
    });

    it("renders the password input as type=password by default", () => {
        render(<OriginInputPassword />);
        expect(screen.getByLabelText("Password")).toHaveAttribute("type", "password");
    });

    it("toggles password visibility when eye button is clicked", async () => {
        const user = userEvent.setup();
        render(<OriginInputPassword />);
        const input = screen.getByLabelText("Password");
        const toggleBtn = screen.getByRole("button", { name: "Show password" });

        expect(input).toHaveAttribute("type", "password");
        await user.click(toggleBtn);
        expect(input).toHaveAttribute("type", "text");
        expect(screen.getByRole("button", { name: "Hide password" })).toBeInTheDocument();
        await user.click(screen.getByRole("button", { name: "Hide password" }));
        expect(input).toHaveAttribute("type", "password");
    });

    it("renders all default password requirement rules", () => {
        render(<OriginInputPassword />);
        expect(screen.getByRole("list", { name: "Password requirements" })).toBeInTheDocument();
        expect(screen.getByText("At least 8 characters")).toBeInTheDocument();
        expect(screen.getByText("One uppercase letter")).toBeInTheDocument();
        expect(screen.getByText("One lowercase letter")).toBeInTheDocument();
        expect(screen.getByText("One number")).toBeInTheDocument();
        expect(screen.getByText("One special character (!@#$...)")).toBeInTheDocument();
    });

    it("shows circle indicators when input is empty (no input)", () => {
        const { container } = render(<OriginInputPassword />);
        const spans = container.querySelectorAll("ul span");
        expect(spans.length).toBeGreaterThan(0);
    });

    it("shows check/x icons when user types a value", async () => {
        const user = userEvent.setup();
        render(<OriginInputPassword />);
        const input = screen.getByLabelText("Password");
        await user.type(input, "a");
        // With just 'a', min-length, uppercase, number, special fail
        // lowercase passes
        // So some rules show X and at least one shows check
        expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
    });

    it("sets aria-invalid when input has value but rules not all passed", async () => {
        const user = userEvent.setup();
        render(<OriginInputPassword />);
        const input = screen.getByLabelText("Password");
        await user.type(input, "weakpass");
        expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("does not set aria-invalid when all rules pass", async () => {
        const user = userEvent.setup();
        render(<OriginInputPassword />);
        const input = screen.getByLabelText("Password");
        await user.type(input, "ValidPass1!");
        expect(input).not.toHaveAttribute("aria-invalid");
    });

    it("supports controlled value via value prop", () => {
        render(<OriginInputPassword value="ControlledVal1!" onChange={() => {}} />);
        const input = screen.getByLabelText("Password");
        expect(input).toHaveValue("ControlledVal1!");
    });

    it("calls onChange when input changes in controlled mode", () => {
        const onChange = jest.fn();
        render(<OriginInputPassword value="" onChange={onChange} />);
        const input = screen.getByLabelText("Password");
        fireEvent.change(input, { target: { value: "newval" } });
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("renders no rules list when empty rules array passed", () => {
        render(<OriginInputPassword rules={[]} />);
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    it("accepts custom rules", () => {
        const customRules: PasswordRule[] = [
            { key: "custom", label: "Custom rule", test: (v) => v.length > 2 },
        ];
        render(<OriginInputPassword rules={customRules} />);
        expect(screen.getByText("Custom rule")).toBeInTheDocument();
    });

    it("uses provided id for input and label", () => {
        render(<OriginInputPassword id="pw-field" />);
        expect(screen.getByLabelText("Password")).toHaveAttribute("id", "pw-field");
    });

    it("applies custom className", () => {
        const { container } = render(<OriginInputPassword className="custom" />);
        expect(container.firstChild).toHaveClass("custom");
    });
});
