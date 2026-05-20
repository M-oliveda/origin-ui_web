"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";

export function OriginUiSearchBar({
    placeholder = "Search...",
    shortcut,
    className,
    ...props
}: React.ComponentProps<typeof Input> & {
    shortcut?: string;
}) {
    return (
        <div className={cn("relative", className)}>
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input placeholder={placeholder} className="pr-12 pl-9" {...props} />
            {shortcut && (
                <div className="absolute top-1/2 right-2 -translate-y-1/2">
                    <Kbd>{shortcut}</Kbd>
                </div>
            )}
        </div>
    );
}
