"use client";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupButton,
    InputGroupText,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, CheckCircle2, X, Search, Mail, Eye, DollarSign, Copy } from "lucide-react";

export default function InputGroupPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">InputGroup</h1>
                <p className="text-muted-foreground text-sm">
                    Combines an input with addons like icons, buttons, or text labels. Uses{" "}
                    <code className="text-xs">role=&quot;group&quot;</code> with a shared border
                    container and flexible addon positioning via{" "}
                    <code className="text-xs">align</code> prop.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    An <code className="text-xs">{"<InputGroup>"}</code> container wraps an{" "}
                    <code className="text-xs">{"<InputGroupInput>"}</code> and one or more{" "}
                    <code className="text-xs">{"<InputGroupAddon>"}</code> elements. Addons position
                    themselves via the <code className="text-xs">align</code> prop:{" "}
                    <code className="text-xs">inline-start</code>,{" "}
                    <code className="text-xs">inline-end</code>,{" "}
                    <code className="text-xs">block-start</code>, or{" "}
                    <code className="text-xs">block-end</code>.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm">
                        <InputGroup>
                            <InputGroupAddon align="inline-start">
                                <Mail className="text-muted-foreground size-4" />
                            </InputGroupAddon>
                            <InputGroupInput placeholder="Email address" />
                            <InputGroupAddon align="inline-end">
                                <Search className="text-muted-foreground size-4" />
                            </InputGroupAddon>
                        </InputGroup>
                        <div className="text-muted-foreground mt-2 flex items-center gap-4 text-[10px]">
                            <span>role=&quot;group&quot;</span>
                            <span>data-slot=&quot;input-group&quot;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Addon Positions */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Addon Positions</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Addons can be positioned at any edge of the input group.
                </p>
                <div className="max-w-sm space-y-4">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            inline-start (leading icon)
                        </p>
                        <InputGroup>
                            <InputGroupAddon align="inline-start">
                                <Search className="text-muted-foreground size-4" />
                            </InputGroupAddon>
                            <InputGroupInput placeholder="Search..." />
                        </InputGroup>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            inline-end (trailing icon)
                        </p>
                        <InputGroup>
                            <InputGroupInput placeholder="Password" type="password" />
                            <InputGroupAddon align="inline-end">
                                <Eye className="text-muted-foreground size-4" />
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Both sides</p>
                        <InputGroup>
                            <InputGroupAddon align="inline-start">
                                <DollarSign className="text-muted-foreground size-4" />
                            </InputGroupAddon>
                            <InputGroupInput placeholder="0.00" type="number" />
                            <InputGroupAddon align="inline-end">
                                <span className="text-muted-foreground text-xs">USD</span>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
            </div>

            {/* Sub-components */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sub-components</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Beyond addons and inputs, the group also supports buttons and text elements.
                </p>
                <div className="max-w-sm space-y-4">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With button</p>
                        <InputGroup>
                            <InputGroupInput placeholder="Enter code..." />
                            <InputGroupButton>
                                <Copy className="size-4" />
                            </InputGroupButton>
                        </InputGroup>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With text addon</p>
                        <InputGroup>
                            <InputGroupText>https://</InputGroupText>
                            <InputGroupInput placeholder="example.com" />
                        </InputGroup>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="max-w-sm space-y-4">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Disabled</p>
                        <InputGroup>
                            <InputGroupAddon align="inline-start">
                                <Mail className="text-muted-foreground size-4" />
                            </InputGroupAddon>
                            <InputGroupInput placeholder="Disabled" disabled />
                        </InputGroup>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Invalid</p>
                        <InputGroup>
                            <InputGroupAddon align="inline-start">
                                <Mail className="text-muted-foreground size-4" />
                            </InputGroupAddon>
                            <InputGroupInput
                                placeholder="Invalid"
                                aria-invalid
                                defaultValue="not-an-email"
                            />
                        </InputGroup>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Valid</p>
                        <InputGroup data-valid={true}>
                            <InputGroupAddon align="inline-start">
                                <CheckCircle2 className="text-success size-4" />
                            </InputGroupAddon>
                            <InputGroupInput placeholder="Email" defaultValue="hello@example.com" />
                        </InputGroup>
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
                                    Use icons to clarify input purpose.
                                </strong>{" "}
                                A search icon, mail icon, or currency symbol helps users understand
                                the expected input.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep addons lightweight.
                                </strong>{" "}
                                Addons should support the input, not compete with it. Icons and
                                short text work best.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use InputGroupButton for actions.
                                </strong>{" "}
                                Actions like copy, toggle visibility, or submit should use the
                                dedicated button sub-component.
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
                                    Don&apos;t overload with multiple addons.
                                </strong>{" "}
                                More than two addons creates visual clutter.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use decorative-only icons.
                                </strong>{" "}
                                Every addon should convey meaning or enable an action.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t nest input groups.
                                </strong>{" "}
                                Each group should be a single level of composition.
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
                            The container uses{" "}
                            <code className="text-xs">role=&quot;group&quot;</code> to communicate
                            the grouping relationship.
                        </li>
                        <li>
                            Addons with{" "}
                            <code className="text-xs">align=&quot;inline-start&quot;</code> use
                            absolute positioning &mdash; the input&apos;s padding is adjusted
                            automatically.
                        </li>
                        <li>
                            InputGroupButton defaults to{" "}
                            <code className="text-xs">type=&quot;button&quot;</code> to prevent
                            accidental form submission.
                        </li>
                        <li>
                            The group supports both InputGroupInput and InputGroupTextarea for
                            multi-line addons.
                        </li>
                        <li>
                            Pass <code className="text-xs">data-valid=&quot;true&quot;</code> on
                            InputGroup for a success-green border and ring; pass{" "}
                            <code className="text-xs">aria-invalid</code> on the inner input for the
                            destructive state.
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
  InputGroup, InputGroupAddon, InputGroupInput,
  InputGroupButton, InputGroupText
} from "@/components/ui/input-group"
import { Mail, Search, CheckCircle2 } from "lucide-react"

// Leading icon
<InputGroup>
  <InputGroupAddon align="inline-start">
    <Mail className="size-4 text-muted-foreground" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Email" />
</InputGroup>

// Trailing icon
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <Search className="size-4 text-muted-foreground" />
  </InputGroupAddon>
</InputGroup>

// Invalid state (destructive ring)
<InputGroup>
  <InputGroupAddon align="inline-start">
    <Mail className="size-4 text-muted-foreground" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Email" aria-invalid />
</InputGroup>

// Valid state (success ring)
<InputGroup data-valid={true}>
  <InputGroupAddon align="inline-start">
    <CheckCircle2 className="size-4 text-success" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Email" defaultValue="hello@example.com" />
</InputGroup>

// With text prefix (padded)
<InputGroup>
  <InputGroupText>https://</InputGroupText>
  <InputGroupInput placeholder="example.com" />
</InputGroup>`}
                />
            </div>
        </div>
    );
}
