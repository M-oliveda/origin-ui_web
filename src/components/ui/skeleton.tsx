import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="skeleton"
            className={cn(
                "from-muted via-muted/50 to-muted animate-[shimmer_1.5s_ease-in-out_infinite] rounded-md bg-linear-to-r bg-size-[200%_100%]",
                className,
            )}
            {...props}
        />
    );
}

export { Skeleton };
