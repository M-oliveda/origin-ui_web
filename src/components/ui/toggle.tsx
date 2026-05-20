"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
    "group/toggle inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-pressed:bg-muted aria-pressed:text-foreground data-[state=on]:bg-muted data-[state=on]:text-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline:
                    "border-border bg-transparent hover:bg-muted dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-pressed:bg-secondary aria-pressed:text-secondary-foreground",
                ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",
                destructive:
                    "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            },
            size: {
                sm: "h-7 min-w-7 gap-1 px-1.5 sm:h-8 sm:min-w-8 sm:px-2 lg:h-9 lg:min-w-9 lg:px-2.5 [&_svg:not([class*='size-'])]:size-3.5",
                default:
                    "h-8 min-w-8 gap-1 px-2 sm:h-9 sm:min-w-9 sm:gap-1.5 sm:px-2.5 lg:h-10 lg:min-w-10 lg:gap-2 lg:px-3",
                lg: "h-10 min-w-10 gap-2 px-3 text-base sm:h-11 sm:min-w-11 sm:px-3.5 lg:h-12 lg:min-w-12 lg:px-4 [&_svg:not([class*='size-'])]:size-5",
                icon: "size-8 sm:size-9 lg:size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Toggle({
    className,
    variant = "default",
    size = "default",
    ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
    return (
        <TogglePrimitive
            data-slot="toggle"
            className={cn(toggleVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Toggle, toggleVariants };
