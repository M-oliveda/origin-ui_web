"use client";

import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function SeparatorPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Separator</h1>
                <p className="text-muted-foreground text-sm">
                    A thin visual divider for separating sections of content. Built on{" "}
                    <code className="text-xs">@base-ui/react/separator</code>. Supports{" "}
                    <code className="text-xs">horizontal</code> (default) and{" "}
                    <code className="text-xs">vertical</code> orientations.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Separator>"}</code> renders as a{" "}
                    <code className="text-xs">{"<div>"}</code> with{" "}
                    <code className="text-xs">data-slot=&quot;separator&quot;</code> and{" "}
                    <code className="text-xs">role=&quot;separator&quot;</code>. Width and height
                    are set via <code className="text-xs">data-horizontal</code> /{" "}
                    <code className="text-xs">data-vertical</code> attribute selectors.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="space-y-3">
                        <p className="text-sm">Above the separator</p>
                        <Separator />
                        <p className="text-sm">Below the separator</p>
                    </div>
                </div>
            </div>

            {/* Orientations */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Orientations</h3>
                <Separator />
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-5">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Horizontal
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm">Section One</p>
                            <Separator />
                            <p className="text-sm">Section Two</p>
                            <Separator />
                            <p className="text-sm">Section Three</p>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Vertical
                        </p>
                        <div className="flex h-5 items-center gap-3 text-sm">
                            <span>Blog</span>
                            <Separator orientation="vertical" />
                            <span>Docs</span>
                            <Separator orientation="vertical" />
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Common use cases */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Common Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Separators are frequently used in navigation breadcrumbs, menu dividers, and
                    form section breaks.
                </p>
                <div className="border-border space-y-6 rounded-lg border p-6">
                    {/* Nav divider */}
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Breadcrumb-style
                        </p>
                        <div className="text-muted-foreground flex h-5 items-center gap-3 text-sm">
                            <span className="text-foreground">Home</span>
                            <Separator orientation="vertical" />
                            <span className="text-foreground">Products</span>
                            <Separator orientation="vertical" />
                            <span>Details</span>
                        </div>
                    </div>
                    <Separator />
                    {/* Form section */}
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Form sections
                        </p>
                        <div className="max-w-sm space-y-3">
                            <p className="text-sm font-medium">Personal Information</p>
                            <Separator />
                            <p className="text-muted-foreground text-sm">Name, email, phone</p>
                            <p className="text-sm font-medium">Billing Details</p>
                            <Separator />
                            <p className="text-muted-foreground text-sm">Card, address, invoices</p>
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
                                    Use to separate distinct content groups.
                                </strong>{" "}
                                Separators work best between conceptually different sections.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use vertical orientation inside flex rows.
                                </strong>{" "}
                                Breadcrumbs, tab bars, and inline metadata lists are common
                                patterns.
                            </li>
                            <li>
                                <strong className="text-foreground">Rely on spacing too.</strong> A
                                separator combined with adequate margin creates a clear visual
                                break.
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
                                    Don&apos;t overuse as decoration.
                                </strong>{" "}
                                Too many separators fragment the layout without adding clarity.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t replace whitespace with separators.
                                </strong>{" "}
                                Generous margins between elements are often enough.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use vertical separators without a fixed height
                                    container.
                                </strong>{" "}
                                Without an explicit height the separator will collapse to zero.
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
                            Renders with <code className="text-xs">role=&quot;separator&quot;</code>{" "}
                            and <code className="text-xs">aria-orientation</code> set automatically
                            by the base-ui primitive.
                        </li>
                        <li>
                            Purely decorative separators should pass{" "}
                            <code className="text-xs">aria-hidden=&quot;true&quot;</code> to remove
                            them from the accessibility tree.
                        </li>
                        <li>
                            Vertical separators require the parent container to have an explicit
                            height — otherwise the separator collapses.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Separator } from "@/components/ui/separator"

// Horizontal (default)
<Separator />

// Vertical — parent must have a height
<div className="flex h-5 items-center gap-3">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>

// Decorative (hidden from screen readers)
<Separator aria-hidden="true" />`}
                />
            </div>
        </div>
    );
}
