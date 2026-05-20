import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function OriginUiNotificationItem({
    icon: Icon,
    title,
    description,
    time,
    unread = false,
    className,
}: {
    icon: LucideIcon;
    title: string;
    description: string;
    time: string;
    unread?: boolean;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "border-border flex gap-3 rounded-lg border p-3 transition-colors",
                unread && "bg-primary/5",
                className,
            )}
        >
            <div
                className={cn(
                    "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full",
                    unread ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground",
                )}
            >
                <Icon className="size-4" />
            </div>
            <div className="flex-1 space-y-0.5">
                <div className="flex items-start justify-between gap-2">
                    <p className={cn("text-sm", unread && "font-medium")}>{title}</p>
                    {unread && <span className="bg-primary mt-1.5 size-2 shrink-0 rounded-full" />}
                </div>
                <p className="text-muted-foreground text-xs">{description}</p>
                <p className="text-muted-foreground/60 text-xs">{time}</p>
            </div>
        </div>
    );
}
