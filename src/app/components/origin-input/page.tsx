"use client";

import { OriginInputComponent } from "@/components/branding/origin-ui-input";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Mail, User, Phone, Search, Building } from "lucide-react";

export default function OriginInputPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Input (Origin)</h1>
                <p className="text-muted-foreground text-sm">
                    A validated input field with an optional leading icon and three visual
                    validation states: <code className="text-xs">idle</code>,{" "}
                    <code className="text-xs">success</code>, and{" "}
                    <code className="text-xs">error</code>. Built on top of the base{" "}
                    <code className="text-xs">Input</code> and{" "}
                    <code className="text-xs">Label</code> components.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A flex column with an optional <code className="text-xs">Label</code> above and
                    a relative-positioned input wrapper below. The leading icon sits at the left; a
                    validation icon (check or alert circle) appears at the right when the state is{" "}
                    <code className="text-xs">success</code> or{" "}
                    <code className="text-xs">error</code>. A feedback message appears below the
                    input.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <div className="w-full max-w-xs space-y-4">
                        <OriginInputComponent
                            label="Username"
                            icon={User}
                            placeholder="Enter your username"
                            validationState="idle"
                        />
                    </div>
                </div>
            </div>

            {/* Validation states */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Validation States</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">validationState</code> prop controls the icon
                    color, input ring, and feedback message visibility.
                </p>
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Idle
                        </p>
                        <OriginInputComponent
                            label="Username"
                            icon={User}
                            placeholder="Enter your username"
                            validationState="idle"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Success
                        </p>
                        <OriginInputComponent
                            label="Email"
                            icon={Mail}
                            defaultValue="mauricio@example.com"
                            validationState="success"
                            successMessage="Email is available"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Error
                        </p>
                        <OriginInputComponent
                            label="Email"
                            icon={Mail}
                            defaultValue="invalid-email"
                            validationState="error"
                            errorMessage="Please enter a valid email address"
                        />
                    </div>
                </div>
            </div>

            {/* With and without icon */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Icon Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The icon prop is optional. Without it, the input renders with standard padding.
                    The icon color changes with the validation state.
                </p>
                <div className="grid max-w-lg gap-4 sm:grid-cols-2">
                    <OriginInputComponent
                        label="With icon"
                        icon={Search}
                        placeholder="Search..."
                        validationState="idle"
                    />
                    <OriginInputComponent
                        label="Without icon"
                        placeholder="Enter value..."
                        validationState="idle"
                    />
                </div>
            </div>

            {/* Form example */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Form Example</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Multiple validated inputs in a form layout.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="max-w-sm space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <OriginInputComponent
                                label="First Name"
                                icon={User}
                                placeholder="John"
                                validationState="success"
                                successMessage="Looks good!"
                            />
                            <OriginInputComponent
                                label="Last Name"
                                icon={User}
                                placeholder="Doe"
                                validationState="idle"
                            />
                        </div>
                        <OriginInputComponent
                            label="Email"
                            icon={Mail}
                            placeholder="you@example.com"
                            defaultValue="not-an-email"
                            validationState="error"
                            errorMessage="Invalid email format"
                        />
                        <OriginInputComponent
                            label="Company"
                            icon={Building}
                            placeholder="Acme Corp"
                            validationState="idle"
                        />
                        <OriginInputComponent
                            label="Phone"
                            icon={Phone}
                            placeholder="+1 (555) 000-0000"
                            defaultValue="+1 (555) 123-4567"
                            validationState="success"
                            successMessage="Valid phone number"
                        />
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
                                    Show validation feedback inline.
                                </strong>{" "}
                                Placing success and error messages directly below the input avoids
                                scroll and form-level confusion.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use icons that match the field type.
                                </strong>{" "}
                                A mail icon on an email field, user icon on a name field — the icon
                                reinforces context.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Validate on blur, not on every keystroke.
                                </strong>{" "}
                                Real-time error messages while typing are frustrating; wait until
                                the user leaves the field.
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
                                    Don&apos;t show error state before the user interacts.
                                </strong>{" "}
                                Pre-emptive error states on empty fields create a hostile first
                                impression.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use vague error messages.
                                </strong>{" "}
                                &quot;Invalid input&quot; is unhelpful — tell the user exactly
                                what&apos;s wrong and how to fix it.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use success state for every valid field.
                                </strong>{" "}
                                Reserve it for fields where confirmation adds value (email
                                availability, username uniqueness).
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
                    <h4 className="mb-2 text-sm font-medium">Props</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">label</code> (optional) — renders a{" "}
                            <code className="text-xs">{"<Label>"}</code> linked to the input via a
                            generated or provided <code className="text-xs">id</code>.
                        </li>
                        <li>
                            <code className="text-xs">icon</code> (optional) — a{" "}
                            <code className="text-xs">LucideIcon</code> absolutely positioned at the
                            left edge. Color adapts to the{" "}
                            <code className="text-xs">validationState</code>.
                        </li>
                        <li>
                            <code className="text-xs">validationState</code> (optional, default:
                            &quot;idle&quot;) —{" "}
                            <code className="text-xs">
                                &quot;idle&quot; | &quot;success&quot; | &quot;error&quot;
                            </code>
                            .
                        </li>
                        <li>
                            <code className="text-xs">errorMessage</code> (optional) — shown below
                            the input only when{" "}
                            <code className="text-xs">validationState === &quot;error&quot;</code>.
                        </li>
                        <li>
                            <code className="text-xs">successMessage</code> (optional) — shown below
                            the input only when{" "}
                            <code className="text-xs">validationState === &quot;success&quot;</code>
                            .
                        </li>
                        <li>
                            All other <code className="text-xs">Input</code> props are forwarded
                            (e.g. <code className="text-xs">value</code>,{" "}
                            <code className="text-xs">onChange</code>,{" "}
                            <code className="text-xs">disabled</code>).
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginInputComponent } from "@/components/branding/origin-ui-input"
import { Mail, User } from "lucide-react"

// Idle state
<OriginInputComponent
  label="Username"
  icon={User}
  placeholder="Enter your username"
  validationState="idle"
/>

// Success state
<OriginInputComponent
  label="Email"
  icon={Mail}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  validationState="success"
  successMessage="Email is available"
/>

// Error state
<OriginInputComponent
  label="Email"
  icon={Mail}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  validationState="error"
  errorMessage="Please enter a valid email address"
/>`}
                />
            </div>
        </div>
    );
}
