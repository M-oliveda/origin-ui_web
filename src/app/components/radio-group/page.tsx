"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function RadioGroupPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">RadioGroup</h1>
                <p className="text-muted-foreground text-sm">
                    A group of radio buttons where only one option can be selected at a time. Built
                    on the <code className="text-xs">@base-ui/react</code> RadioGroup primitive with
                    circular indicators, expanded click targets, and managed selection state.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A <code className="text-xs">{"<RadioGroup>"}</code> container with a grid layout
                    holds multiple <code className="text-xs">{"<RadioGroupItem>"}</code> elements.
                    Each item renders as a circle with a centered indicator dot when selected. The
                    group manages single-selection state automatically.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="default" id="anatomy-r1" />
                            <Label htmlFor="anatomy-r1">Default</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="comfortable" id="anatomy-r2" />
                            <Label htmlFor="anatomy-r2">Comfortable</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="compact" id="anatomy-r3" />
                            <Label htmlFor="anatomy-r3">Compact</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Vertical (default)
                        </p>
                        <RadioGroup defaultValue="email">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="email" id="ex-email" />
                                <Label htmlFor="ex-email">Email</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="sms" id="ex-sms" />
                                <Label htmlFor="ex-sms">SMS</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="push" id="ex-push" />
                                <Label htmlFor="ex-push">Push notification</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            With disabled option
                        </p>
                        <RadioGroup defaultValue="light">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="light" id="ex-light" />
                                <Label htmlFor="ex-light">Light</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="dark" id="ex-dark" />
                                <Label htmlFor="ex-dark">Dark</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="system" id="ex-system" disabled />
                                <Label htmlFor="ex-system" className="text-muted-foreground">
                                    System (unavailable)
                                </Label>
                            </div>
                        </RadioGroup>
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
                                    Use for mutually exclusive options.
                                </strong>{" "}
                                When the user must pick exactly one option from a set.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Always pre-select a default.
                                </strong>{" "}
                                Radio groups should always have one option selected.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep options to 2-7 items.
                                </strong>{" "}
                                Longer lists should use a Select or Combobox instead.
                            </li>
                            <li>
                                <strong className="text-foreground">Stack vertically.</strong>{" "}
                                Vertical layout is easier to scan than horizontal.
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
                                    Don&apos;t use for multiple selections.
                                </strong>{" "}
                                Use Checkbox for selecting multiple items.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for binary on/off.
                                </strong>{" "}
                                Use Switch for settings that take immediate effect.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t show without labels.
                                </strong>{" "}
                                Each radio needs descriptive text for accessibility.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t start without a selection.
                                </strong>{" "}
                                An empty radio group creates confusion.
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
                            Uses Base UI RadioGroup &mdash; manages{" "}
                            <code className="text-xs">aria-checked</code> and roving tabindex.
                        </li>
                        <li>Arrow keys navigate between items; Space/Enter selects.</li>
                        <li>
                            The indicator dot (size-2, white) appears centered on checked state.
                        </li>
                        <li>
                            After pseudo-element expands click target for WCAG touch target
                            compliance.
                        </li>
                        <li>
                            <code className="text-xs">aria-invalid</code> triggers destructive ring
                            on all items.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>

// Controlled
const [value, setValue] = useState("comfortable")
<RadioGroup value={value} onValueChange={setValue}>
  ...
</RadioGroup>`}
                />
            </div>
        </div>
    );
}
