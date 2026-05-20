"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CodeBlock({ code, className }: { code: string; className?: string }) {
    const [copied, setCopied] = useState(false);

    function copy() {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <div className={cn("border-border bg-muted/50 relative rounded-lg border", className)}>
            <button
                type="button"
                onClick={copy}
                className="border-border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground absolute top-3 right-3 rounded-md border p-1.5 transition-colors"
                aria-label="Copy code"
            >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            </button>
            <pre className="overflow-x-auto p-4 pr-12 text-sm">
                <code>{code}</code>
            </pre>
        </div>
    );
}
