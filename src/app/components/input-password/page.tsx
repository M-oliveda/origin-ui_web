"use client";

import { OriginInputPassword } from "@/components/branding/origin-ui-input-password";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function InputPasswordPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">InputPassword</h1>
                <p className="text-muted-foreground text-sm">
                    A password input with a show/hide toggle, a leading lock icon that reflects
                    overall validity, and a configurable list of validation rules that turn green or
                    red in real-time as the user types.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A label + input wrapper built on{" "}
                    <code className="text-xs">OriginInputComponent</code> principles. The leading
                    lock icon changes color when all rules pass (success) or any fail (error). The
                    eye button on the right toggles visibility. The rules list renders below the
                    input — each rule shows a circle (no input), check (passing), or X (failing).
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <div className="w-full max-w-xs">
                        <OriginInputPassword
                            label="Create Password"
                            placeholder="Enter a strong password"
                        />
                    </div>
                </div>
            </div>

            {/* Default rules */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Default Rules</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Five default rules cover the most common password requirements. Type in the
                    field below to see the rules update in real-time.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="max-w-xs">
                        <OriginInputPassword
                            label="Create Password"
                            placeholder="Enter a strong password"
                        />
                    </div>
                    <div className="text-muted-foreground mt-4 space-y-1 text-xs">
                        <p className="text-foreground font-medium">Default rules:</p>
                        <ul className="list-inside list-disc space-y-0.5">
                            <li>At least 8 characters</li>
                            <li>One uppercase letter</li>
                            <li>One lowercase letter</li>
                            <li>One number</li>
                            <li>One special character (!@#$...)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Custom rules */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Custom Rules</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass a <code className="text-xs">rules</code> array to override the defaults.
                    Each rule is an object with a <code className="text-xs">key</code>,{" "}
                    <code className="text-xs">label</code>, and a{" "}
                    <code className="text-xs">test</code> function.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="max-w-xs">
                        <OriginInputPassword
                            label="Custom Rules"
                            placeholder="Min 12 characters..."
                            rules={[
                                {
                                    key: "length",
                                    label: "At least 12 characters",
                                    test: (v: string) => v.length >= 12,
                                },
                                {
                                    key: "upper",
                                    label: "One uppercase letter",
                                    test: (v: string) => /[A-Z]/.test(v),
                                },
                                {
                                    key: "digit",
                                    label: "Two or more numbers",
                                    test: (v: string) => (v.match(/\d/g) || []).length >= 2,
                                },
                                {
                                    key: "no-spaces",
                                    label: "No spaces",
                                    test: (v: string) => !/\s/.test(v),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* No rules */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Without Rules</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass an empty array to disable the rules list. Useful for &quot;confirm
                    password&quot; or login fields where rule display is not needed.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="max-w-xs">
                        <OriginInputPassword
                            label="Confirm Password"
                            placeholder="Re-enter your password"
                            rules={[]}
                        />
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Empty (idle)
                        </p>
                        <OriginInputPassword label="Password" placeholder="Enter password" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Partially filled
                        </p>
                        <OriginInputPassword
                            label="Password"
                            placeholder="Enter password"
                            defaultValue="Hello1"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            All rules passing
                        </p>
                        <OriginInputPassword
                            label="Password"
                            placeholder="Enter password"
                            defaultValue="Hello1World!"
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
                                    Always provide a show/hide toggle.
                                </strong>{" "}
                                Forcing users to type blind increases errors, especially on mobile.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Show rules proactively, not reactively.
                                </strong>{" "}
                                Displaying requirements before the user types prevents frustration
                                at submission time.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use custom rules for domain-specific requirements.
                                </strong>{" "}
                                Override defaults when your system has different strength
                                requirements.
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
                                    Don&apos;t enforce excessive complexity rules.
                                </strong>{" "}
                                Studies show very complex requirements (special char + no sequences)
                                lead to weaker passwords overall.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use InputPassword for confirm-password fields.
                                </strong>{" "}
                                The rules list is confusing for a repeat-entry field — pass{" "}
                                <code className="text-xs">rules={"{[]}"}</code> or use a plain
                                input.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t disable the show/hide button.
                                </strong>{" "}
                                Accessibility guidelines recommend always allowing password
                                visibility.
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
                    <h4 className="mb-2 text-sm font-medium">Props & Accessibility</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">label</code> (optional, default:
                            &quot;Password&quot;) — rendered as a linked{" "}
                            <code className="text-xs">{"<Label>"}</code>.
                        </li>
                        <li>
                            <code className="text-xs">rules</code> (optional, default: 5 built-in
                            rules) — array of <code className="text-xs">PasswordRule</code> objects.
                        </li>
                        <li>
                            <code className="text-xs">
                                {
                                    "PasswordRule: { key: string; label: string; test: (value: string) => boolean }"
                                }
                            </code>
                        </li>
                        <li>
                            Supports controlled mode via <code className="text-xs">value</code> +{" "}
                            <code className="text-xs">onChange</code>, or uncontrolled via{" "}
                            <code className="text-xs">defaultValue</code>.
                        </li>
                        <li>
                            The rules list has{" "}
                            <code className="text-xs">
                                aria-label=&quot;Password requirements&quot;
                            </code>
                            . The eye button has a descriptive{" "}
                            <code className="text-xs">aria-label</code> that updates with state.
                        </li>
                        <li>
                            <code className="text-xs">aria-invalid</code> is set automatically when
                            the user has typed and not all rules pass.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginInputPassword } from "@/components/branding/origin-ui-input-password"

// Default rules (8+ chars, uppercase, lowercase, number, special char)
<OriginInputPassword
  label="Create Password"
  placeholder="Enter a strong password"
/>

// Custom rules
<OriginInputPassword
  label="New Password"
  rules={[
    { key: "length", label: "At least 12 characters", test: (v) => v.length >= 12 },
    { key: "upper", label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
    { key: "digit", label: "Two numbers", test: (v) => (v.match(/\\d/g) || []).length >= 2 },
  ]}
/>

// No rules (confirm password, login)
<OriginInputPassword
  label="Confirm Password"
  rules={[]}
/>

// Controlled
<OriginInputPassword
  label="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>`}
                />
            </div>
        </div>
    );
}
