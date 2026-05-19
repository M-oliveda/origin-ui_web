"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function LabelPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Label</h1>
                <p className="text-muted-foreground text-sm">
                    A text label for form controls. Associates with inputs via{" "}
                    <code className="text-xs">htmlFor</code>, enabling click-to-focus and providing
                    an accessible name. Uses{" "}
                    <code className="text-xs">data-slot=&quot;label&quot;</code> with automatic
                    disabled styling from parent Field or peer input states.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Label>"}</code> renders a native{" "}
                    <code className="text-xs">{"<label>"}</code> with consistent text styling. It
                    detects disabled state from both parent Field (group-data-[disabled=true]) and
                    peer input (peer-disabled) elements.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm space-y-2">
                        <Label htmlFor="anatomy-input">Email address</Label>
                        <Input id="anatomy-input" type="email" placeholder="you@example.com" />
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="max-w-sm space-y-4">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With text input</p>
                        <div className="space-y-2">
                            <Label htmlFor="ex-email">Email</Label>
                            <Input id="ex-email" type="email" placeholder="you@example.com" />
                        </div>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            With password input
                        </p>
                        <div className="space-y-2">
                            <Label htmlFor="ex-password">Password</Label>
                            <Input id="ex-password" type="password" />
                        </div>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            With checkbox (inline)
                        </p>
                        <div className="flex items-center gap-2">
                            <Checkbox id="ex-terms" />
                            <Label htmlFor="ex-terms">Accept terms and conditions</Label>
                        </div>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Disabled state</p>
                        <div className="space-y-2">
                            <Label htmlFor="ex-disabled" className="text-muted-foreground">
                                Disabled field
                            </Label>
                            <Input id="ex-disabled" disabled placeholder="Cannot edit" />
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
                                    Always use labels with form controls.
                                </strong>{" "}
                                Every input, select, checkbox, and textarea needs an associated
                                label.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use htmlFor to associate.
                                </strong>{" "}
                                The htmlFor must match the input&apos;s id for click-to-focus and
                                screen reader association.
                            </li>
                            <li>
                                <strong className="text-foreground">Keep labels concise.</strong>{" "}
                                One to three words that clearly describe the expected input.
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
                                    Don&apos;t use placeholder instead of label.
                                </strong>{" "}
                                Placeholders disappear on input and are not reliable for
                                accessibility.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t duplicate labels with placeholder text.
                                </strong>{" "}
                                If the label says &quot;Email&quot;, don&apos;t repeat
                                &quot;Email&quot; as placeholder.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget the htmlFor connection.
                                </strong>{" "}
                                A label without htmlFor doesn&apos;t provide click-to-focus or
                                screen reader association.
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
                            Renders a native <code className="text-xs">{"<label>"}</code> &mdash;
                            full browser accessibility built-in.
                        </li>
                        <li>
                            Uses <code className="text-xs">select-none</code> to prevent accidental
                            text selection on click.
                        </li>
                        <li>
                            Detects disabled state from parent Field via{" "}
                            <code className="text-xs">group-data-[disabled=true]</code>.
                        </li>
                        <li>
                            Detects disabled state from peer input via{" "}
                            <code className="text-xs">peer-disabled</code>.
                        </li>
                        <li>
                            Styling: text-sm, leading-none, font-medium with flex gap-2 for inline
                            icons.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// With text input
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>

// Inline with checkbox
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// With required indicator
<Label htmlFor="name">
  Name <span className="text-destructive">*</span>
</Label>`}
                />
            </div>
        </div>
    );
}
