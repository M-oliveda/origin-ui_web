"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
    FieldSuccess,
} from "@/components/ui/field";
import { Check, X } from "lucide-react";

export default function FieldPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Field</h1>
                <p className="text-muted-foreground text-sm">
                    A structured form field wrapper with label, description, and error message
                    support. Provides consistent layout, error display, and orientation options
                    (vertical, horizontal, responsive). Built with 10 composable sub-components.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A <code className="text-xs">{"<Field>"}</code> with{" "}
                    <code className="text-xs">role=&quot;group&quot;</code> wraps a{" "}
                    <code className="text-xs">{"<FieldLabel>"}</code> (or{" "}
                    <code className="text-xs">{"<FieldTitle>"}</code>), the form control, an
                    optional <code className="text-xs">{"<FieldDescription>"}</code>, and an
                    optional <code className="text-xs">{"<FieldError>"}</code>. The field manages
                    layout orientation and passes disabled state to child labels.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm space-y-2">
                        <Label>Username</Label>
                        <Input placeholder="Enter username" />
                        <p className="text-muted-foreground text-xs">
                            This is your public display name.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sub-components */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sub-components</h3>
                <Separator />
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-border border-b">
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Component
                                </th>
                                <th className="text-muted-foreground py-3 text-left font-medium">
                                    Purpose
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                [
                                    "FieldSet",
                                    "Wraps a group of related fields (renders <fieldset>)",
                                ],
                                [
                                    "FieldLegend",
                                    'Legend for a fieldset, variant: "legend" | "label"',
                                ],
                                ["FieldGroup", "Groups fields with consistent spacing"],
                                [
                                    "Field",
                                    "Individual field wrapper, orientation: vertical | horizontal | responsive",
                                ],
                                ["FieldContent", "Content wrapper within a field"],
                                ["FieldLabel", "Label rendered as a <label> element"],
                                ["FieldTitle", "Title text (not a <label>)"],
                                ["FieldDescription", "Helper text below the input"],
                                ["FieldSeparator", "Visual divider with optional text label"],
                                [
                                    "FieldError",
                                    'Error message with role="alert", supports error arrays',
                                ],
                                [
                                    "FieldSuccess",
                                    'Success message with role="status", supports message arrays',
                                ],
                            ].map(([name, desc]) => (
                                <tr key={name} className="border-border border-b last:border-0">
                                    <td className="py-3 pr-4">
                                        <code className="text-xs">{name}</code>
                                    </td>
                                    <td className="text-muted-foreground py-3 text-sm">{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Orientations */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Orientations</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The Field component supports three layout orientations via the{" "}
                    <code className="text-xs">orientation</code> prop.
                </p>
                <div className="space-y-4">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Vertical (default)
                        </p>
                        <div className="max-w-sm space-y-2">
                            <Label htmlFor="vert-name">Full name</Label>
                            <Input id="vert-name" placeholder="John Doe" />
                            <p className="text-muted-foreground text-xs">Enter your legal name.</p>
                        </div>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Horizontal</p>
                        <div className="flex items-center gap-4">
                            <Label htmlFor="horiz-name" className="w-24 shrink-0 text-right">
                                Full name
                            </Label>
                            <Input id="horiz-name" placeholder="John Doe" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Validation States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Validation States</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Fields expose two validation states via data attributes.{" "}
                    <code className="text-xs">data-invalid=&quot;true&quot;</code> turns the field
                    destructive red; <code className="text-xs">data-valid=&quot;true&quot;</code>{" "}
                    turns it success green. <code className="text-xs">{"<FieldError>"}</code> uses{" "}
                    <code className="text-xs">role=&quot;alert&quot;</code> for urgent
                    announcements; <code className="text-xs">{"<FieldSuccess>"}</code> uses{" "}
                    <code className="text-xs">role=&quot;status&quot;</code> for polite
                    confirmations.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Error state</p>
                        <Field data-invalid={true}>
                            <FieldLabel htmlFor="error-email">Email</FieldLabel>
                            <Input
                                id="error-email"
                                placeholder="you@example.com"
                                aria-invalid
                                defaultValue="not-an-email"
                            />
                            <FieldDescription>We&apos;ll never share your email.</FieldDescription>
                            <FieldError>Please enter a valid email address.</FieldError>
                        </Field>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Valid state</p>
                        <Field data-valid={true}>
                            <FieldLabel htmlFor="valid-email">Email</FieldLabel>
                            <Input
                                id="valid-email"
                                placeholder="you@example.com"
                                defaultValue="hello@example.com"
                            />
                            <FieldDescription>We&apos;ll never share your email.</FieldDescription>
                            <FieldSuccess>Looks good!</FieldSuccess>
                        </Field>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4 sm:col-span-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            Multiple errors (deduplicated)
                        </p>
                        <Field data-invalid={true} className="max-w-sm">
                            <FieldLabel htmlFor="error-password">Password</FieldLabel>
                            <Input
                                id="error-password"
                                type="password"
                                aria-invalid
                                defaultValue="abc"
                            />
                            <FieldError
                                errors={[
                                    { message: "Must be at least 8 characters" },
                                    { message: "Must include a number" },
                                    { message: "Must include a number" },
                                ]}
                            />
                        </Field>
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
                                    Use Field for consistent form layout.
                                </strong>{" "}
                                It standardizes spacing, label placement, and error display across
                                all form controls.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Always provide FieldDescription for complex inputs.
                                </strong>{" "}
                                Helper text reduces user confusion and support requests.
                            </li>
                            <li>
                                <strong className="text-foreground">Show errors inline.</strong>{" "}
                                FieldError with role=&quot;alert&quot; ensures screen readers
                                announce errors immediately.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use responsive orientation for wide forms.
                                </strong>{" "}
                                The &quot;responsive&quot; variant uses container queries to switch
                                from vertical to horizontal.
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
                                    Don&apos;t skip the label.
                                </strong>{" "}
                                Even with placeholders, every field needs a FieldLabel for
                                accessibility.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t show errors before interaction.
                                </strong>{" "}
                                Validate on blur or submit, not on mount.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix orientations without FieldSet.
                                </strong>{" "}
                                Group related fields with the same orientation in a FieldSet.
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
                            Field uses <code className="text-xs">role=&quot;group&quot;</code> to
                            communicate field structure.
                        </li>
                        <li>
                            FieldError uses <code className="text-xs">role=&quot;alert&quot;</code>{" "}
                            for live error announcements.
                        </li>
                        <li>
                            FieldSuccess uses{" "}
                            <code className="text-xs">role=&quot;status&quot;</code> for polite
                            confirmation announcements.
                        </li>
                        <li>
                            <code className="text-xs">data-invalid=&quot;true&quot;</code> on Field
                            applies destructive color to all children;{" "}
                            <code className="text-xs">data-valid=&quot;true&quot;</code> applies
                            success color.
                        </li>
                        <li>
                            FieldSet renders a native{" "}
                            <code className="text-xs">{"<fieldset>"}</code> with{" "}
                            <code className="text-xs">{"<legend>"}</code>.
                        </li>
                        <li>
                            Uses container queries (<code className="text-xs">@md</code>) for
                            responsive orientation.
                        </li>
                        <li>Error arrays are automatically deduplicated by message text.</li>
                        <li>
                            Disabled state propagates to child labels via{" "}
                            <code className="text-xs">data-disabled</code>.
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
  Field, FieldLabel, FieldDescription,
  FieldError, FieldSuccess,
  FieldSet, FieldLegend, FieldGroup, FieldContent
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

// Basic field
<Field>
  <FieldLabel>Username</FieldLabel>
  <Input placeholder="Enter username" />
  <FieldDescription>This is your public display name.</FieldDescription>
</Field>

// Error state
<Field data-invalid={true}>
  <FieldLabel>Email</FieldLabel>
  <Input placeholder="Email" aria-invalid />
  <FieldError>Please enter a valid email address.</FieldError>
</Field>

// Valid state
<Field data-valid={true}>
  <FieldLabel>Email</FieldLabel>
  <Input placeholder="Email" defaultValue="hello@example.com" />
  <FieldSuccess>Looks good!</FieldSuccess>
</Field>

// With error array (auto-deduplicated)
<Field data-invalid={true}>
  <FieldLabel>Password</FieldLabel>
  <Input type="password" aria-invalid />
  <FieldError errors={[
    { message: "Must be at least 8 characters" },
    { message: "Must include a number" },
  ]} />
</Field>

// Horizontal layout
<Field orientation="horizontal">
  <FieldLabel>Name</FieldLabel>
  <FieldContent>
    <Input placeholder="John Doe" />
    <FieldDescription>Your full legal name.</FieldDescription>
  </FieldContent>
</Field>

// Fieldset with legend
<FieldSet>
  <FieldLegend>Personal Information</FieldLegend>
  <FieldGroup>
    <Field>
      <FieldLabel>First Name</FieldLabel>
      <Input placeholder="John" />
    </Field>
    <Field>
      <FieldLabel>Last Name</FieldLabel>
      <Input placeholder="Doe" />
    </Field>
  </FieldGroup>
</FieldSet>`}
                />
            </div>
        </div>
    );
}
