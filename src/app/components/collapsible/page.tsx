"use client";

import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, ChevronDown, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CollapsiblePage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Collapsible</h1>
                <p className="text-muted-foreground text-sm">
                    An interactive section that can be toggled open or closed. Built on{" "}
                    <code className="text-xs">@base-ui/react/collapsible</code>. Unlike Accordion,
                    Collapsible is a single standalone region — not a group of items.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The root <code className="text-xs">{"<Collapsible>"}</code> wraps a{" "}
                    <code className="text-xs">{"<CollapsibleTrigger>"}</code> (the toggle control)
                    and a <code className="text-xs">{"<CollapsibleContent>"}</code> (the collapsible
                    body).
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <Collapsible className="max-w-sm space-y-2">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold">Collapsible root</h4>
                            <CollapsibleTrigger className="border-border hover:bg-muted inline-flex size-8 items-center justify-center rounded-lg border text-sm">
                                <ChevronDown className="size-4" />
                            </CollapsibleTrigger>
                        </div>
                        <div className="border-border rounded-md border px-4 py-3 text-sm">
                            Always visible item
                        </div>
                        <CollapsibleContent className="space-y-2">
                            <div className="border-border text-muted-foreground rounded-md border px-4 py-3 text-sm">
                                Hidden item 1
                            </div>
                            <div className="border-border text-muted-foreground rounded-md border px-4 py-3 text-sm">
                                Hidden item 2
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>

            {/* Basic Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Basic Usage</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The trigger can be any interactive element. The content panel animates open and
                    closed.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <Collapsible className="max-w-sm space-y-2">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold">3 dependencies tagged</h4>
                            <CollapsibleTrigger className="border-border hover:bg-muted inline-flex size-8 items-center justify-center rounded-lg border text-sm">
                                <ChevronDown className="size-4" />
                            </CollapsibleTrigger>
                        </div>
                        <div className="border-border rounded-md border px-4 py-3 font-mono text-sm">
                            @radix-ui/primitives
                        </div>
                        <CollapsibleContent className="space-y-2">
                            <div className="border-border rounded-md border px-4 py-3 font-mono text-sm">
                                @radix-ui/colors
                            </div>
                            <div className="border-border rounded-md border px-4 py-3 font-mono text-sm">
                                @base-ui/react
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>

            {/* Button Trigger */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Button Trigger</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Style the trigger with button classes for more prominent &quot;Show more&quot;
                    expanders. Use controlled state to toggle the label.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="max-w-md space-y-3"
                    >
                        <div className="border-border rounded-lg border p-4">
                            <p className="text-sm">
                                This is the always-visible summary content. It gives enough context
                                to decide whether the full details are needed.
                            </p>
                        </div>
                        <CollapsibleContent className="space-y-3">
                            <div className="border-border rounded-lg border p-4">
                                <p className="text-muted-foreground text-sm">
                                    Extended details are revealed here. This section is hidden by
                                    default and requires user intent to expand.
                                </p>
                            </div>
                            <div className="border-border rounded-lg border p-4">
                                <p className="text-muted-foreground text-sm">
                                    Additional information that most users don&apos;t need at first
                                    glance.
                                </p>
                            </div>
                        </CollapsibleContent>
                        <CollapsibleTrigger
                            className={cn(
                                buttonVariants({ variant: "outline", size: "sm" }),
                                "w-full gap-2",
                            )}
                        >
                            <ChevronsUpDown className="size-4" />
                            {isOpen ? "Show less" : "Show more"}
                        </CollapsibleTrigger>
                    </Collapsible>
                </div>
            </div>

            {/* Design Guidelines */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Design Guidelines</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-500/30 bg-green-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <Check className="size-4 text-green-600 dark:text-green-400" />
                            <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                                Do
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Use for a single expandable region.
                                </strong>{" "}
                                Collapsible is for one section; Accordion is for a list of related
                                sections.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Always show some content by default.
                                </strong>{" "}
                                The always-visible part should give enough context for the user to
                                decide whether to expand.
                            </li>
                            <li>
                                <strong className="text-foreground">Indicate state clearly.</strong>{" "}
                                Rotate a chevron icon or swap trigger labels to show whether the
                                panel is open or closed.
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg border-2 border-red-500/30 bg-red-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <X className="size-4 text-red-600 dark:text-red-400" />
                            <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                                Don&apos;t
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t hide required information.
                                </strong>{" "}
                                If the content is mandatory to complete a task, show it directly.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for navigation.
                                </strong>{" "}
                                Collapsible is for content disclosure, not for routing between
                                pages.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget the trigger label.
                                </strong>{" "}
                                Icon-only triggers need an{" "}
                                <code className="text-xs">aria-label</code> for screen readers.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="border-border rounded-lg border p-5">
                    <h4 className="mb-2 text-sm font-medium">Accessibility</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">CollapsibleTrigger</code> renders as a{" "}
                            <code className="text-xs">{"<button>"}</code> with{" "}
                            <code className="text-xs">aria-expanded</code> managed automatically.
                        </li>
                        <li>
                            Use the <code className="text-xs">render</code> prop to replace the
                            default button element — pass a function or React element (Base UI
                            render prop, not <code className="text-xs">asChild</code>).
                        </li>
                        <li>
                            Control open state with <code className="text-xs">open</code> +{" "}
                            <code className="text-xs">onOpenChange</code>, or use{" "}
                            <code className="text-xs">defaultOpen</code> for uncontrolled.
                        </li>
                        <li>
                            Keyboard: <kbd className="rounded border px-1 text-xs">Space</kbd> /{" "}
                            <kbd className="rounded border px-1 text-xs">Enter</kbd> toggle the
                            panel when the trigger is focused.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import {
  Collapsible, CollapsibleTrigger, CollapsibleContent
} from "@/components/ui/collapsible"

// Basic (uncontrolled)
<Collapsible>
  <div className="flex items-center justify-between">
    <h4 className="text-sm font-semibold">3 items tagged</h4>
    <CollapsibleTrigger className="inline-flex size-8 items-center justify-center rounded-lg border">
      <ChevronDown className="size-4" />
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/colors</div>
    <div className="rounded-md border px-4 py-3 text-sm">@base-ui/react</div>
  </CollapsibleContent>
</Collapsible>

// Controlled with toggling label
const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleContent>Content here</CollapsibleContent>
  <CollapsibleTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}>
    {open ? "Show less" : "Show more"}
  </CollapsibleTrigger>
</Collapsible>

// Custom element via render prop (Base UI pattern — not asChild)
<CollapsibleTrigger render={(props) => <button {...props} className="my-btn" />}>
  Toggle
</CollapsibleTrigger>`}
                />
            </div>
        </div>
    );
}
