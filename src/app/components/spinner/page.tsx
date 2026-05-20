"use client";

import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function SpinnerPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Spinner</h1>
                <p className="text-muted-foreground text-sm">
                    A spinning loading indicator for indeterminate async operations. Built as an SVG
                    component using <code className="text-xs">Loader2Icon</code> from lucide-react
                    with <code className="text-xs">animate-spin</code>,{" "}
                    <code className="text-xs">role=&quot;status&quot;</code>, and a built-in
                    accessible label.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Spinner>"}</code> SVG element with{" "}
                    <code className="text-xs">role=&quot;status&quot;</code> and{" "}
                    <code className="text-xs">aria-label=&quot;Loading&quot;</code>. Default size is{" "}
                    <code className="text-xs">size-4</code>. Override via className.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Spinner />
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>role=&quot;status&quot;</span>
                            <span>aria-label=&quot;Loading&quot;</span>
                            <span>animate-spin</span>
                            <span>size-4 default</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sizes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Override size via a Tailwind <code className="text-xs">size-*</code> className.
                    Use the smallest size that remains legible in context.
                </p>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { label: "Small", cls: "size-4", use: "Inline, buttons" },
                        { label: "Medium", cls: "size-6", use: "Cards, panels" },
                        { label: "Large", cls: "size-8", use: "Full-page overlays" },
                    ].map((item) => (
                        <div
                            key={item.cls}
                            className="border-border flex flex-col items-center gap-3 rounded-lg border p-4"
                        >
                            <Spinner className={item.cls} />
                            <div className="text-center">
                                <code className="text-muted-foreground text-xs">{item.cls}</code>
                                <p className="text-muted-foreground/80 mt-0.5 text-[10px]">
                                    {item.use}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* In Context */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">In Context</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The most common usage patterns — loading buttons and inline text indicators.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Loading button</p>
                        <div className="flex flex-wrap gap-2">
                            <Button disabled>
                                <Spinner />
                                Saving…
                            </Button>
                            <Button variant="outline" disabled>
                                <Spinner />
                                Loading
                            </Button>
                        </div>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Inline text</p>
                        <p className="text-muted-foreground flex items-center gap-2 text-sm">
                            <Spinner className="size-3.5" />
                            Syncing changes…
                        </p>
                        <p className="text-muted-foreground flex items-center gap-2 text-sm">
                            <Spinner className="size-3.5" />
                            Generating report…
                        </p>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Centered in container
                        </p>
                        <div className="border-border flex h-20 items-center justify-center rounded-md border border-dashed">
                            <Spinner className="size-6" />
                        </div>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Muted color</p>
                        <div className="flex items-center gap-2">
                            <Spinner className="text-muted-foreground" />
                            <span className="text-muted-foreground text-sm">
                                Background task running
                            </span>
                        </div>
                    </div>
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
                                    Use for unknown durations.
                                </strong>{" "}
                                Spinner is best when you can&apos;t measure completion — network
                                requests, AI generation, async operations.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pair with disabled state on triggers.
                                </strong>{" "}
                                Disable the button or form that initiated the action while the
                                spinner is visible.
                            </li>
                            <li>
                                <strong className="text-foreground">Add a label in context.</strong>{" "}
                                &quot;Saving…&quot; or &quot;Loading&quot; beside the spinner
                                prevents ambiguity.
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
                                    Don&apos;t use when progress is quantifiable.
                                </strong>{" "}
                                If you know the percentage, use Progress instead — it gives users
                                more useful feedback.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t show spinner for instant operations.
                                </strong>{" "}
                                Under ~200ms, a spinner causes more confusion than it prevents.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t spin indefinitely without a timeout.
                                </strong>{" "}
                                After a reasonable threshold, show an error state with a retry
                                option.
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
                            <code className="text-xs">role=&quot;status&quot;</code> announces to
                            screen readers that a loading state is active.
                        </li>
                        <li>
                            Built-in <code className="text-xs">aria-label=&quot;Loading&quot;</code>{" "}
                            gives the SVG an accessible name without extra markup.
                        </li>
                        <li>
                            When used inside a button, pair with{" "}
                            <code className="text-xs">disabled</code> and add visible or{" "}
                            <code className="text-xs">sr-only</code> text to describe the action
                            (e.g., &quot;Saving…&quot;).
                        </li>
                        <li>
                            Animation uses <code className="text-xs">animate-spin</code> — respects{" "}
                            <code className="text-xs">prefers-reduced-motion</code> via
                            Tailwind&apos;s motion utilities.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Spinner } from "@/components/ui/spinner"

// Default (size-4)
<Spinner />

// Custom sizes
<Spinner className="size-6" />
<Spinner className="size-8" />

// Loading button
<Button disabled>
  <Spinner />
  Saving…
</Button>

// Inline text
<p className="flex items-center gap-2">
  <Spinner className="size-3.5" />
  Syncing changes…
</p>

// Centered in a container
<div className="flex h-40 items-center justify-center">
  <Spinner className="size-6" />
</div>`}
                />
            </div>
        </div>
    );
}
