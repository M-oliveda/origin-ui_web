"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function CheckboxPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
                <p className="text-muted-foreground text-sm">
                    A control that allows the user to toggle between checked and unchecked states.
                    Built on the <code className="text-xs">@base-ui/react</code> Checkbox primitive
                    with a check icon indicator, expanded click target, and focus-visible ring.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Checkbox>"}</code> renders a 4x4 sized
                    control with <code className="text-xs">data-slot=&quot;checkbox&quot;</code>. It
                    contains a <code className="text-xs">CheckboxPrimitive.Indicator</code> that
                    shows a check icon when checked. An <code className="text-xs">after</code>{" "}
                    pseudo-element expands the click target beyond the visual boundary.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="anatomy-check" defaultChecked />
                            <Label htmlFor="anatomy-check">Checked state</Label>
                        </div>
                        <div className="text-muted-foreground flex items-center gap-4 text-[10px]">
                            <span>data-slot=&quot;checkbox&quot;</span>
                            <span>aria-checked</span>
                            <span>expanded click target</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Checkbox id="ex-terms" />
                                <Label htmlFor="ex-terms">Accept terms and conditions</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="ex-newsletter" defaultChecked />
                                <Label htmlFor="ex-newsletter">Subscribe to newsletter</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="ex-marketing" />
                                <Label htmlFor="ex-marketing">Receive marketing emails</Label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Checkbox />
                        <p className="text-muted-foreground text-[10px]">Unchecked</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Checkbox defaultChecked />
                        <p className="text-muted-foreground text-[10px]">Checked</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Checkbox className="border-ring ring-ring/50 ring-3" />
                        <p className="text-muted-foreground text-[10px]">Focused</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Checkbox disabled />
                        <p className="text-muted-foreground text-[10px]">Disabled</p>
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
                                Use Label with htmlFor for click-to-toggle and accessibility.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use for independent boolean choices.
                                </strong>{" "}
                                Each checkbox should be independently toggleable.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Group related checkboxes visually.
                                </strong>{" "}
                                Stack related options vertically with consistent spacing.
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
                                    Don&apos;t use for mutually exclusive options.
                                </strong>{" "}
                                Use RadioGroup when only one option can be selected.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use without a label.
                                </strong>{" "}
                                A standalone checkbox without text is not accessible.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for on/off settings.
                                </strong>{" "}
                                Switch is a better pattern for binary settings with immediate
                                effect.
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
                            Built on Base UI Checkbox primitive &mdash; manages{" "}
                            <code className="text-xs">aria-checked</code> automatically.
                        </li>
                        <li>
                            Focus ring uses <code className="text-xs">focus-visible</code> for
                            keyboard-only display.
                        </li>
                        <li>
                            <code className="text-xs">aria-invalid</code> triggers destructive ring
                            for validation.
                        </li>
                        <li>
                            After pseudo-element creates expanded click target (44px minimum touch
                            area).
                        </li>
                        <li>
                            Indicator shows/hides check icon based on{" "}
                            <code className="text-xs">data-checked</code> state.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Basic with label
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// Pre-checked
<Checkbox id="newsletter" defaultChecked />

// Disabled
<Checkbox id="disabled" disabled />

// Controlled
const [checked, setChecked] = useState(false)
<Checkbox checked={checked} onCheckedChange={setChecked} />`}
                />
            </div>
        </div>
    );
}
