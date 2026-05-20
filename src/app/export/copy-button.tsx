"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <Button onClick={handleCopy} variant="outline">
            {copied ? (
                <>
                    <Check data-icon="inline-start" className="size-4" />
                    Copied to clipboard
                </>
            ) : (
                <>
                    <Copy data-icon="inline-start" className="size-4" />
                    Copy DESIGN.md
                </>
            )}
        </Button>
    );
}
