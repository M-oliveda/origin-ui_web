"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function TextareaPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
                <p className="text-muted-foreground text-sm">
                    A multi-line text input for longer form content. Uses{" "}
                    <code className="text-xs">field-sizing: content</code> for automatic height
                    adjustment and responsive minimum heights across breakpoints.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Textarea>"}</code> component wrapping a
                    native textarea element with{" "}
                    <code className="text-xs">data-slot=&quot;textarea&quot;</code>. Minimum heights
                    scale responsively: min-h-14 on mobile, sm:min-h-16, lg:min-h-20.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm">
                        <Textarea placeholder="Type your message here..." />
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="max-w-sm space-y-4">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Default</p>
                        <Textarea placeholder="Type your message here..." />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With label</p>
                        <Label htmlFor="demo-bio">Bio</Label>
                        <Textarea id="demo-bio" placeholder="Tell us about yourself..." />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Disabled</p>
                        <Textarea placeholder="Disabled textarea" disabled />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Invalid</p>
                        <Textarea placeholder="Required field" aria-invalid />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Valid</p>
                        <Textarea placeholder="Looks good!" data-valid />
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
                                    Use for multi-line content.
                                </strong>{" "}
                                Descriptions, comments, messages, and notes are ideal use cases.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pair with a label and character count.
                                </strong>{" "}
                                Users need to know the purpose and any length constraints.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Let the auto-sizing work.
                                </strong>{" "}
                                The field-sizing: content property grows the textarea with content.
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
                                    Don&apos;t use for single-line input.
                                </strong>{" "}
                                Use Input for names, emails, or short values.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t set fixed heights.
                                </strong>{" "}
                                Let the responsive min-height and auto-sizing handle the dimensions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget maxLength.
                                </strong>{" "}
                                Set a reasonable limit and show remaining characters.
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
                            Focus ring uses <code className="text-xs">focus-visible</code> for
                            keyboard navigation.
                        </li>
                        <li>
                            <code className="text-xs">aria-invalid</code> triggers the destructive
                            ring style.
                        </li>
                        <li>
                            <code className="text-xs">data-valid</code> triggers the success border
                            and ring style.
                        </li>
                        <li>
                            Uses <code className="text-xs">field-sizing: content</code> for native
                            auto-grow behavior.
                        </li>
                        <li>Responsive min heights: min-h-14 (base), sm:min-h-16, lg:min-h-20.</li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Textarea } from "@/components/ui/textarea"

// Basic
<Textarea placeholder="Type your message here..." />

// With label
<Label htmlFor="bio">Bio</Label>
<Textarea id="bio" placeholder="Tell us about yourself..." />

// Disabled
<Textarea placeholder="Disabled" disabled />

// With max length
<Textarea maxLength={500} placeholder="Up to 500 characters..." />

// Valid state
<Textarea data-valid placeholder="Looks good!" />`}
                />
            </div>
        </div>
    );
}
