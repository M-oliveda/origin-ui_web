"use client";

import { useId } from "react";
import { CircleCheck, CircleAlert, type LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type ValidationState = "idle" | "success" | "error";

export function OriginInputComponent({
    label,
    icon: Icon,
    validationState = "idle",
    errorMessage,
    successMessage,
    className,
    id: externalId,
    ...props
}: React.ComponentProps<typeof Input> & {
    label?: string;
    icon?: LucideIcon;
    validationState?: ValidationState;
    errorMessage?: string;
    successMessage?: string;
}) {
    const autoId = useId();
    const inputId = externalId ?? autoId;

    return (
        <div className={cn("flex w-full flex-col gap-1.5", className)}>
            {label && (
                <Label htmlFor={inputId} className="text-sm font-medium">
                    {label}
                </Label>
            )}
            <div className="relative">
                {Icon && (
                    <Icon
                        className={cn(
                            "absolute top-1/2 left-3 size-4 -translate-y-1/2",
                            validationState === "error" && "text-error",
                            validationState === "success" && "text-success",
                            validationState === "idle" && "text-muted-foreground",
                        )}
                    />
                )}
                <Input
                    id={inputId}
                    aria-invalid={validationState === "error" || undefined}
                    className={cn(
                        Icon && "pl-9",
                        validationState === "success" &&
                            "border-success ring-success/20 focus-visible:border-success focus-visible:ring-success/20 ring-3",
                    )}
                    {...props}
                />
                {validationState === "success" && (
                    <CircleCheck className="text-success absolute top-1/2 right-3 size-4 -translate-y-1/2" />
                )}
                {validationState === "error" && (
                    <CircleAlert className="text-error absolute top-1/2 right-3 size-4 -translate-y-1/2" />
                )}
            </div>
            {validationState === "error" && errorMessage && (
                <p role="alert" className="text-error text-sm">
                    {errorMessage}
                </p>
            )}
            {validationState === "success" && successMessage && (
                <p className="text-success text-sm">{successMessage}</p>
            )}
        </div>
    );
}
