"use client";

import { useId, useMemo, useState } from "react";
import { Eye, EyeOff, Lock, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface PasswordRule {
    /** Unique key for this rule */
    key: string;
    /** Human-readable label shown next to the indicator */
    label: string;
    /** Returns true when the rule passes for the given value */
    test: (value: string) => boolean;
}

export const defaultPasswordRules: PasswordRule[] = [
    {
        key: "min-length",
        label: "At least 8 characters",
        test: (v) => v.length >= 8,
    },
    {
        key: "uppercase",
        label: "One uppercase letter",
        test: (v) => /[A-Z]/.test(v),
    },
    {
        key: "lowercase",
        label: "One lowercase letter",
        test: (v) => /[a-z]/.test(v),
    },
    {
        key: "number",
        label: "One number",
        test: (v) => /\d/.test(v),
    },
    {
        key: "special",
        label: "One special character (!@#$...)",
        test: (v) => /[^A-Za-z0-9]/.test(v),
    },
];

export function OriginInputPassword({
    label = "Password",
    rules = defaultPasswordRules,
    value: controlledValue,
    onChange,
    className,
    id: externalId,
    ...props
}: Omit<React.ComponentProps<typeof Input>, "type"> & {
    label?: string;
    rules?: PasswordRule[];
}) {
    const autoId = useId();
    const inputId = externalId ?? autoId;
    const [visible, setVisible] = useState(false);
    const [internalValue, setInternalValue] = useState("");

    const currentValue = controlledValue !== undefined ? String(controlledValue) : internalValue;

    const ruleResults = useMemo(
        () =>
            rules.map((rule) => ({
                ...rule,
                passed: rule.test(currentValue),
            })),
        [rules, currentValue],
    );

    const allPassed = ruleResults.every((r) => r.passed);
    const hasInput = currentValue.length > 0;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInternalValue(e.target.value);
        onChange?.(e);
    }

    return (
        <div className={cn("flex w-full flex-col gap-1.5", className)}>
            {label && (
                <Label htmlFor={inputId} className="text-sm font-medium">
                    {label}
                </Label>
            )}
            <div className="relative">
                <Lock
                    className={cn(
                        "absolute top-1/2 left-3 size-4 -translate-y-1/2",
                        hasInput && allPassed && "text-success",
                        hasInput && !allPassed && "text-error",
                        !hasInput && "text-muted-foreground",
                    )}
                />
                <Input
                    id={inputId}
                    type={visible ? "text" : "password"}
                    value={currentValue}
                    onChange={handleChange}
                    aria-invalid={(hasInput && !allPassed) || undefined}
                    className={cn(
                        "pr-10 pl-9",
                        hasInput &&
                            allPassed &&
                            "border-success ring-success/20 focus-visible:border-success focus-visible:ring-success/20 ring-3",
                    )}
                    {...props}
                />
                <button
                    type="button"
                    tabIndex={-1}
                    aria-label={visible ? "Hide password" : "Show password"}
                    onClick={() => setVisible((v) => !v)}
                    className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
                >
                    {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
            </div>

            {rules.length > 0 && (
                <ul className="mt-1 flex flex-col gap-1" aria-label="Password requirements">
                    {ruleResults.map((rule) => (
                        <li
                            key={rule.key}
                            className={cn(
                                "flex items-center gap-1.5 text-sm transition-colors",
                                !hasInput && "text-muted-foreground",
                                hasInput && rule.passed && "text-success",
                                hasInput && !rule.passed && "text-error",
                            )}
                        >
                            {hasInput && rule.passed ? (
                                <Check className="size-3.5" />
                            ) : hasInput && !rule.passed ? (
                                <X className="size-3.5" />
                            ) : (
                                <span className="inline-block size-3.5 rounded-full border border-current" />
                            )}
                            {rule.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
