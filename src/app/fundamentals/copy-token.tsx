"use client";

import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function CopyToken({
    value,
    label,
    className,
}: {
    value: string;
    label?: string;
    className?: string;
}) {
    return (
        <button
            type="button"
            onClick={() => {
                navigator.clipboard.writeText(value);
                toast.success(`Copied: ${value}`, { duration: 1500 });
            }}
            className={cn(
                "bg-muted text-muted-foreground hover:bg-muted-foreground/20 hover:text-foreground cursor-pointer rounded px-1.5 py-0.5 font-mono text-xs transition-colors",
                className,
            )}
            aria-label={`Copy ${label || value}`}
        >
            {label || value}
        </button>
    );
}
