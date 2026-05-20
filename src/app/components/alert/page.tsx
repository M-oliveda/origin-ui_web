"use client";

import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Info, AlertCircle, AlertTriangle, Terminal } from "lucide-react";

export default function AlertPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
                <p className="text-muted-foreground text-sm">
                    A callout for important contextual messages. Composes{" "}
                    <code className="text-xs">AlertTitle</code>,{" "}
                    <code className="text-xs">AlertDescription</code>, and an optional{" "}
                    <code className="text-xs">AlertAction</code> for dismissal or follow-up actions.
                    Uses <code className="text-xs">role=&quot;alert&quot;</code> for screen reader
                    announcements.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Alert>"}</code> is a grid container with{" "}
                    <code className="text-xs">data-slot=&quot;alert&quot;</code> and a prominent
                    left border. An SVG icon child automatically shifts title and description to a
                    second column. <code className="text-xs">AlertAction</code> is absolutely
                    positioned top-right.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-lg space-y-2">
                        <Alert>
                            <Info className="size-4" />
                            <AlertTitle>Alert Title</AlertTitle>
                            <AlertDescription>
                                Alert description text providing supporting detail.
                            </AlertDescription>
                        </Alert>
                        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-[10px]">
                            <span>data-slot=&quot;alert&quot;</span>
                            <span>role=&quot;alert&quot;</span>
                            <span>SVG shifts to col 1</span>
                            <span>AlertAction → absolute top-right</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Two variants communicate intent through color and border styling.
                </p>
                <div className="space-y-3">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">
                            variant=&quot;default&quot;
                        </code>
                        <Alert>
                            <Info className="size-4" />
                            <AlertTitle>Information</AlertTitle>
                            <AlertDescription>
                                Your session will expire in 30 minutes. Save your work to avoid
                                losing changes.
                            </AlertDescription>
                        </Alert>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">
                            variant=&quot;destructive&quot;
                        </code>
                        <Alert variant="destructive">
                            <AlertCircle className="size-4" />
                            <AlertTitle>Payment failed</AlertTitle>
                            <AlertDescription>
                                Your card was declined. Please update your payment method to
                                continue.
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </div>

            {/* With Action */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">With Action</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">AlertAction</code> renders absolutely at the top-right
                    corner. Use it for dismiss buttons or compact follow-up CTAs.
                </p>
                <div className="space-y-3">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Dismissible</p>
                        <Alert>
                            <Info className="size-4" />
                            <AlertTitle>New feature available</AlertTitle>
                            <AlertDescription>
                                Keyboard shortcuts are now available. Press{" "}
                                <kbd className="bg-muted rounded px-1 py-0.5 text-xs">?</kbd> to
                                view them.
                            </AlertDescription>
                            <AlertAction>
                                <Button variant="ghost" size="sm" className="size-7 p-0">
                                    <X className="size-3.5" />
                                    <span className="sr-only">Dismiss</span>
                                </Button>
                            </AlertAction>
                        </Alert>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With CTA</p>
                        <Alert>
                            <Terminal className="size-4" />
                            <AlertTitle>CLI update available</AlertTitle>
                            <AlertDescription>
                                Version 2.1.0 is available with performance improvements.
                            </AlertDescription>
                            <AlertAction>
                                <Button variant="outline" size="sm" className="h-7 text-xs">
                                    Update
                                </Button>
                            </AlertAction>
                        </Alert>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">No icon</p>
                        <Alert>
                            <AlertTitle>No icon variant</AlertTitle>
                            <AlertDescription>
                                Icon is optional — title and description span the full width.
                            </AlertDescription>
                        </Alert>
                    </div>
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With icon</p>
                        <Alert>
                            <AlertTriangle className="size-4" />
                            <AlertTitle>With icon</AlertTitle>
                            <AlertDescription>Icon shifts content to column 2.</AlertDescription>
                        </Alert>
                    </div>
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Title only</p>
                        <Alert>
                            <Info className="size-4" />
                            <AlertTitle>Title only alert</AlertTitle>
                        </Alert>
                    </div>
                    <div className="border-border flex flex-col gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Description only
                        </p>
                        <Alert>
                            <AlertDescription>
                                Description-only alerts work well for brief notices without a
                                heading.
                            </AlertDescription>
                        </Alert>
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
                                    Pair with a relevant icon.
                                </strong>{" "}
                                Icons give users instant context before they read the text.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep descriptions concise.
                                </strong>{" "}
                                One or two sentences — link to docs for deeper explanations.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use destructive for real errors.
                                </strong>{" "}
                                Reserve{" "}
                                <code className="text-xs">variant=&quot;destructive&quot;</code> for
                                failures that need immediate attention.
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
                                <strong className="text-foreground">Don&apos;t nest alerts.</strong>{" "}
                                Place a single alert per context — stacking them loses hierarchy.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use destructive for warnings.
                                </strong>{" "}
                                Use <code className="text-xs">default</code> with a warning icon for
                                non-critical cautions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t replace toasts with alerts.
                                </strong>{" "}
                                Alerts are inline and persistent; use Toaster for transient
                                feedback.
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
                            <code className="text-xs">role=&quot;alert&quot;</code> on the root
                            announces content to screen readers on mount.
                        </li>
                        <li>
                            Icon child (SVG) causes <code className="text-xs">AlertTitle</code> and{" "}
                            <code className="text-xs">AlertDescription</code> to receive{" "}
                            <code className="text-xs">col-start-2</code> automatically.
                        </li>
                        <li>
                            <code className="text-xs">AlertAction</code> is{" "}
                            <code className="text-xs">absolute top-2 right-2</code> — include{" "}
                            <code className="text-xs">sr-only</code> label on icon-only actions.
                        </li>
                        <li>
                            The left border (<code className="text-xs">border-l-4</code>) provides a
                            visual affordance beyond color alone.
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
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert"
import { Info, AlertCircle } from "lucide-react"

// Default
<Alert>
  <Info className="size-4" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Your free trial expires in 3 days.</AlertDescription>
</Alert>

// Destructive
<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Failed to save changes. Please try again.</AlertDescription>
</Alert>

// With dismiss action
<Alert>
  <Info className="size-4" />
  <AlertTitle>Update available</AlertTitle>
  <AlertDescription>Version 2.0 is ready to install.</AlertDescription>
  <AlertAction>
    <button aria-label="Dismiss"><X /></button>
  </AlertAction>
</Alert>`}
                />
            </div>
        </div>
    );
}
