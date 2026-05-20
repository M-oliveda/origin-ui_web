"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function InputPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Input</h1>
                <p className="text-muted-foreground text-sm">
                    A standard text input field for forms. Built on the native{" "}
                    <code className="text-xs">{"<input>"}</code> element with CVA variants for
                    visual style and responsive sizing. Supports all native input types including
                    text, email, password, number, and more.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Input>"}</code> component wrapping a
                    native input element with{" "}
                    <code className="text-xs">data-slot=&quot;input&quot;</code>. Styled via CVA
                    with two axes: <code className="text-xs">variant</code> (visual style) and{" "}
                    <code className="text-xs">size</code> (dimensions). Both produce responsive
                    output across breakpoints.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm space-y-2">
                        <Input placeholder="Type something..." />
                        <div className="text-muted-foreground flex items-center gap-4 text-[10px]">
                            <span>data-slot=&quot;input&quot;</span>
                            <span>variant=&quot;default&quot;</span>
                            <span>size=&quot;default&quot;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Two visual variants control the input&apos;s resting appearance.
                </p>
                <div className="max-w-sm space-y-3">
                    {[
                        {
                            v: "default" as const,
                            label: "Default",
                            desc: "Bordered input with background. Standard choice for most forms.",
                        },
                        {
                            v: "ghost" as const,
                            label: "Ghost",
                            desc: "Transparent border, hover background. For inline editing or minimal UI.",
                        },
                    ].map((item) => (
                        <div key={item.v} className="border-border space-y-2 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                variant=&quot;{item.v}&quot;
                            </code>
                            <Input variant={item.v} placeholder={`${item.label} input`} />
                            <p className="text-muted-foreground/80 text-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Responsive Sizes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Three sizes that scale automatically across breakpoints using Tailwind media
                    queries.
                </p>
                <div className="max-w-sm space-y-3">
                    {[
                        {
                            s: "sm" as const,
                            label: "Small",
                            bp: "h-7 / sm:h-8 / lg:h-9",
                            use: "Compact forms, table filters, inline controls",
                        },
                        {
                            s: "default" as const,
                            label: "Default",
                            bp: "h-8 / sm:h-9 / lg:h-10",
                            use: "Standard forms, settings pages",
                        },
                        {
                            s: "lg" as const,
                            label: "Large",
                            bp: "h-10 / sm:h-11 / lg:h-12",
                            use: "Hero forms, onboarding, search bars",
                        },
                    ].map((item) => (
                        <div key={item.s} className="border-border space-y-2 rounded-lg border p-4">
                            <div className="flex items-center gap-2">
                                <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                    size=&quot;{item.s}&quot;
                                </code>
                                <code className="text-muted-foreground text-xs">{item.bp}</code>
                            </div>
                            <Input size={item.s} placeholder={item.label} />
                            <p className="text-muted-foreground/80 text-xs">{item.use}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input Types */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Input Types</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The component supports all native HTML input types. The browser provides
                    built-in validation and UI for specialized types.
                </p>
                <div className="max-w-sm space-y-3">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Text (default)</p>
                        <Input placeholder="Enter text..." />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Email</p>
                        <Input type="email" placeholder="you@example.com" />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Password</p>
                        <Input type="password" placeholder="Password" />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Number</p>
                        <Input type="number" placeholder="0" />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Search</p>
                        <Input type="search" placeholder="Search..." />
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Inputs respond to focus, hover, disabled, and validation states. The focus ring
                    uses <code className="text-xs">focus-visible</code> for keyboard-only display.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Default</p>
                        <Input placeholder="Resting" />
                    </div>
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Focused</p>
                        <Input placeholder="Focused" className="border-ring ring-ring/50 ring-3" />
                    </div>
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Disabled</p>
                        <Input placeholder="Disabled" disabled />
                    </div>
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Invalid</p>
                        <Input placeholder="Invalid" aria-invalid />
                    </div>
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Valid</p>
                        <Input placeholder="Valid" data-valid />
                    </div>
                </div>
            </div>

            {/* With Labels */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">With Labels</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Always pair inputs with a <code className="text-xs">{"<Label>"}</code> connected
                    via <code className="text-xs">htmlFor</code>. This enables click-to-focus and
                    provides an accessible name.
                </p>
                <div className="max-w-sm space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="demo-email">Email</Label>
                        <Input id="demo-email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="demo-password">Password</Label>
                        <Input id="demo-password" type="password" />
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
                                    Always pair with a label.
                                </strong>{" "}
                                Even if visually hidden, every input needs an accessible name via
                                label, aria-label, or aria-labelledby.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use the right input type.
                                </strong>{" "}
                                Email, number, tel, and url types enable mobile keyboards and
                                browser validation.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Provide helpful placeholders.
                                </strong>{" "}
                                Show the expected format (e.g., &quot;you@example.com&quot;) but
                                never use placeholder as a substitute for a label.
                            </li>
                            <li>
                                <strong className="text-foreground">Show validation inline.</strong>{" "}
                                Use aria-invalid and pair with a visible error message near the
                                field.
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
                                    Don&apos;t use placeholder as a label.
                                </strong>{" "}
                                Placeholders disappear on input and cannot be relied on for
                                accessibility.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t override responsive sizes inline.
                                </strong>{" "}
                                Adding manual h-* classes breaks the design token chain.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t disable without explanation.
                                </strong>{" "}
                                Disabled inputs should have a tooltip or nearby text explaining why.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t rely on color alone for errors.
                                </strong>{" "}
                                Always pair the red ring with a text error message.
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
                            Focus ring uses <code className="text-xs">focus-visible</code> &mdash;
                            keyboard-only, not on mouse click.
                        </li>
                        <li>
                            <code className="text-xs">aria-invalid</code> triggers a destructive
                            ring for validation errors.
                        </li>
                        <li>
                            <code className="text-xs">data-valid</code> triggers a success ring for
                            confirmed-valid fields.
                        </li>
                        <li>
                            <code className="text-xs">disabled</code> sets pointer-events: none and
                            reduced opacity.
                        </li>
                        <li>
                            File inputs have special styling &mdash; the button portion is styled
                            via <code className="text-xs">file:</code> pseudo-class.
                        </li>
                        <li>
                            Selection color uses{" "}
                            <code className="text-xs">
                                selection:bg-primary selection:text-primary-foreground
                            </code>
                            .
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Input } from "@/components/ui/input"

// Basic
<Input placeholder="Default input" />
<Input type="email" placeholder="Email address" />
<Input type="password" placeholder="Password" />

// Variants
<Input variant="default" placeholder="Default" />
<Input variant="ghost" placeholder="Ghost" />

// Sizes — responsive scaling
<Input size="sm" placeholder="Small" />     {/* h-7 → h-8 → h-9 */}
<Input placeholder="Default" />              {/* h-8 → h-9 → h-10 */}
<Input size="lg" placeholder="Large" />     {/* h-10 → h-11 → h-12 */}

// States
<Input disabled placeholder="Disabled" />
<Input aria-invalid placeholder="Invalid" />
<Input data-valid placeholder="Valid" />

// With label
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />`}
                />
            </div>
        </div>
    );
}
