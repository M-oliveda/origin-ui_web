import { type LucideIcon, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function OriginUiEmptyState({
    icon: Icon = Inbox,
    title,
    description,
    actionLabel,
    onAction,
    className,
}: {
    icon?: LucideIcon;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "border-border flex flex-col items-center justify-center rounded-lg border border-dashed px-6 py-12 text-center",
                className,
            )}
        >
            <div className="bg-muted mb-4 inline-flex size-12 items-center justify-center rounded-full">
                <Icon className="text-muted-foreground size-6" />
            </div>
            <h3 className="text-base font-semibold">{title}</h3>
            {description && (
                <p className="text-muted-foreground mt-1 max-w-xs text-sm">{description}</p>
            )}
            {actionLabel && (
                <Button onClick={onAction} className="mt-4">
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}
