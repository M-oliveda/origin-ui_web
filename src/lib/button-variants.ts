import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md [a]:hover:bg-primary/90",
                outline:
                    "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-xs aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
                ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
                destructive:
                    "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-7 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 sm:h-8 sm:gap-1 sm:px-2.5 lg:h-9 lg:gap-1.5 lg:px-3 lg:has-data-[icon=inline-end]:pr-2 lg:has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
                default:
                    "h-8 gap-1 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 sm:h-9 sm:gap-1.5 sm:px-3 sm:has-data-[icon=inline-end]:pr-2 sm:has-data-[icon=inline-start]:pl-2 lg:h-10 lg:gap-2 lg:px-4 lg:has-data-[icon=inline-end]:pr-3 lg:has-data-[icon=inline-start]:pl-3",
                lg: "h-10 gap-2 px-4 text-base has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 sm:h-11 sm:gap-2 sm:px-5 sm:has-data-[icon=inline-end]:pr-3.5 sm:has-data-[icon=inline-start]:pl-3.5 lg:h-12 lg:gap-2.5 lg:px-6 lg:has-data-[icon=inline-end]:pr-4 lg:has-data-[icon=inline-start]:pl-4 [&_svg:not([class*='size-'])]:size-5",
                icon: "size-8 sm:size-9 lg:size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export { buttonVariants };
export type { VariantProps };
