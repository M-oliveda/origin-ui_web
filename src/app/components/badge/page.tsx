"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, CheckCircle2, X, Circle, AlertCircle } from "lucide-react";

export default function BadgePage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
                <p className="text-muted-foreground text-sm">
                    A small, inline status label for conveying counts, states, or categories.
                    Supports six visual variants and optional icon slots via{" "}
                    <code className="text-xs">data-[icon]</code> child styling.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Badge>"}</code> renders as a{" "}
                    <code className="text-xs">{"<span>"}</code> via{" "}
                    <code className="text-xs">useRender</code>. The{" "}
                    <code className="text-xs">variant</code> prop controls visual style. SVG
                    children are automatically sized to <code className="text-xs">size-3</code> and
                    aligned inline.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Badge>Label</Badge>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>renders as &lt;span&gt;</span>
                            <span>variant=&quot;default&quot;</span>
                            <span>SVG auto-sized</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Seven variants cover the full semantic range from primary emphasis to subtle
                    decoration.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                        {
                            v: "default" as const,
                            label: "Default",
                            desc: "Primary emphasis. Counts, active states.",
                        },
                        {
                            v: "secondary" as const,
                            label: "Secondary",
                            desc: "Neutral tone. Categories, tags.",
                        },
                        {
                            v: "destructive" as const,
                            label: "Destructive",
                            desc: "Error or critical status.",
                        },
                        {
                            v: "success" as const,
                            label: "Success",
                            desc: "Confirmed or valid status. Green tone.",
                        },
                        {
                            v: "outline" as const,
                            label: "Outline",
                            desc: "Bordered, no fill. Subtle labels.",
                        },
                        {
                            v: "ghost" as const,
                            label: "Ghost",
                            desc: "No border or fill. Lowest visual weight.",
                        },
                        {
                            v: "link" as const,
                            label: "Link",
                            desc: "Underlined on hover. Navigable badges.",
                        },
                    ].map((item) => (
                        <div key={item.v} className="border-border space-y-2 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                variant=&quot;{item.v}&quot;
                            </code>
                            <div>
                                <Badge variant={item.v}>{item.label}</Badge>
                            </div>
                            <p className="text-muted-foreground/80 text-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* With Icons */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">With Icons</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Place any SVG icon as a child — it is automatically sized and aligned. Use a
                    leading icon for status and a trailing icon for actions.
                </p>
                <div className="border-border flex flex-wrap gap-3 rounded-lg border p-6">
                    <Badge>
                        <Circle className="size-2 fill-current" />
                        Active
                    </Badge>
                    <Badge variant="secondary">
                        <Circle className="size-2 fill-current" />
                        Draft
                    </Badge>
                    <Badge variant="destructive">
                        <AlertCircle className="size-3" />
                        Error
                    </Badge>
                    <Badge variant="success">
                        <CheckCircle2 className="size-3" />
                        Verified
                    </Badge>
                    <Badge variant="outline">
                        <Check className="size-3" />
                        Approved
                    </Badge>
                    <Badge variant="outline">
                        42
                        <X className="size-3" />
                    </Badge>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Badge>Default</Badge>
                        <p className="text-muted-foreground text-[10px]">Resting</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Badge variant="destructive">Error</Badge>
                        <p className="text-muted-foreground text-[10px]">Destructive</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Badge variant="success">Valid</Badge>
                        <p className="text-muted-foreground text-[10px]">Success</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Badge className="pointer-events-none opacity-50">Inactive</Badge>
                        <p className="text-muted-foreground text-[10px]">Disabled</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Badge aria-invalid>Invalid</Badge>
                        <p className="text-muted-foreground text-[10px]">Invalid</p>
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
                                <strong className="text-foreground">Keep text short.</strong> One or
                                two words max — badges are labels, not sentences.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pick variant by semantic weight.
                                </strong>{" "}
                                Use <code className="text-xs">destructive</code> only for actual
                                errors, <code className="text-xs">default</code> for primary counts
                                or actions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use icons to reinforce meaning.
                                </strong>{" "}
                                A status dot or check icon adds instant scannability.
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
                                    Don&apos;t use as a button substitute.
                                </strong>{" "}
                                If the badge needs a click handler, use a Button with a small size
                                instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t overload with long text.
                                </strong>{" "}
                                Wrap text breaks the pill shape and looks broken.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix variants for the same concept.
                                </strong>{" "}
                                Pick one variant per semantic meaning and apply it consistently.
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
                            Rendered as <code className="text-xs">{"<span>"}</code> by default via{" "}
                            <code className="text-xs">useRender</code> — pass{" "}
                            <code className="text-xs">render</code> prop to change the element.
                        </li>
                        <li>
                            <code className="text-xs">aria-invalid</code> triggers a destructive
                            ring for validation contexts.
                        </li>
                        <li>
                            Focus ring applies only on{" "}
                            <code className="text-xs">focus-visible</code> — keyboard users see it,
                            mouse users do not.
                        </li>
                        <li>
                            SVG children are{" "}
                            <code className="text-xs">pointer-events-none shrink-0</code> to avoid
                            interfering with click targets.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Badge } from "@/components/ui/badge"

// Variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="link">Link</Badge>

// With icon
<Badge><Circle className="size-2 fill-current" />Active</Badge>
<Badge variant="success"><CheckCircle2 className="size-3" />Verified</Badge>
<Badge variant="destructive"><AlertCircle className="size-3" />Error</Badge>

// Disabled
<Badge className="pointer-events-none opacity-50">Inactive</Badge>

// Render as a different element
<Badge render={<a href="/status" />}>View Status</Badge>`}
                />
            </div>
        </div>
    );
}
