"use client";

import {
    Progress,
    ProgressTrack,
    ProgressIndicator,
    ProgressLabel,
    ProgressValue,
} from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function ProgressPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
                <p className="text-muted-foreground text-sm">
                    A horizontal progress bar for conveying determinate completion status. Built on
                    the <code className="text-xs">@base-ui/react</code> Progress primitive with
                    composable <code className="text-xs">ProgressLabel</code> and{" "}
                    <code className="text-xs">ProgressValue</code> sub-components for contextual
                    display.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Progress>"}</code> is the root wrapper that accepts
                    a <code className="text-xs">value</code> prop (0–100).{" "}
                    <code className="text-xs">ProgressTrack</code> provides the background rail and{" "}
                    <code className="text-xs">ProgressIndicator</code> fills it. Optional{" "}
                    <code className="text-xs">ProgressLabel</code> and{" "}
                    <code className="text-xs">ProgressValue</code> sit outside the track.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-md space-y-3">
                        <Progress value={60}>
                            <ProgressTrack>
                                <ProgressIndicator />
                            </ProgressTrack>
                        </Progress>
                        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-[10px]">
                            <span>Progress (value=60)</span>
                            <span>ProgressTrack</span>
                            <span>ProgressIndicator</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass any integer 0–100 to <code className="text-xs">value</code> to control fill
                    amount.
                </p>
                <div className="space-y-3">
                    {[
                        { value: 25, label: "25% — early stage" },
                        { value: 60, label: "60% — in progress" },
                        { value: 100, label: "100% — complete" },
                    ].map((item) => (
                        <div
                            key={item.value}
                            className="border-border space-y-2 rounded-lg border p-4"
                        >
                            <code className="text-muted-foreground text-xs">
                                value={item.value}
                            </code>
                            <Progress value={item.value}>
                                <ProgressTrack>
                                    <ProgressIndicator />
                                </ProgressTrack>
                            </Progress>
                            <p className="text-muted-foreground/80 text-xs">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* With Label and Value */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">With Label and Value</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">ProgressLabel</code> provides a semantic text
                    description and <code className="text-xs">ProgressValue</code> displays the
                    numeric percentage. Both are flex siblings of{" "}
                    <code className="text-xs">ProgressTrack</code> inside the root.
                </p>
                <div className="space-y-3">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Label only</p>
                        <Progress value={45}>
                            <ProgressLabel>Uploading files…</ProgressLabel>
                            <ProgressTrack>
                                <ProgressIndicator />
                            </ProgressTrack>
                        </Progress>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Label + Value</p>
                        <Progress value={72}>
                            <ProgressLabel>Profile completion</ProgressLabel>
                            <ProgressValue />
                            <ProgressTrack>
                                <ProgressIndicator />
                            </ProgressTrack>
                        </Progress>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Storage quota example
                        </p>
                        <Progress value={88}>
                            <ProgressLabel>Storage used</ProgressLabel>
                            <ProgressValue />
                            <ProgressTrack>
                                <ProgressIndicator />
                            </ProgressTrack>
                        </Progress>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Empty (0%)</p>
                        <Progress value={0}>
                            <ProgressTrack>
                                <ProgressIndicator />
                            </ProgressTrack>
                        </Progress>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Mid (50%)</p>
                        <Progress value={50}>
                            <ProgressTrack>
                                <ProgressIndicator />
                            </ProgressTrack>
                        </Progress>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Complete (100%)</p>
                        <Progress value={100}>
                            <ProgressTrack>
                                <ProgressIndicator />
                            </ProgressTrack>
                        </Progress>
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
                                    Pair with a label for context.
                                </strong>{" "}
                                A bare progress bar without a label leaves users guessing what is
                                progressing.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Show the value when precision matters.
                                </strong>{" "}
                                Use <code className="text-xs">ProgressValue</code> for uploads,
                                installs, and quota scenarios.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use for determinate progress only.
                                </strong>{" "}
                                You must know the total — otherwise use Spinner.
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
                                    Don&apos;t use for indeterminate loading.
                                </strong>{" "}
                                If you don&apos;t know the duration or percentage, use a Spinner
                                instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t animate fake progress.
                                </strong>{" "}
                                Simulating progress where none exists erodes user trust.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t omit the track.
                                </strong>{" "}
                                <code className="text-xs">ProgressTrack</code> provides the
                                background rail — rendering the indicator alone breaks the visual.
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
                            Built on Base UI Progress primitive &mdash; sets{" "}
                            <code className="text-xs">role=&quot;progressbar&quot;</code>,{" "}
                            <code className="text-xs">aria-valuenow</code>,{" "}
                            <code className="text-xs">aria-valuemin</code>, and{" "}
                            <code className="text-xs">aria-valuemax</code> automatically.
                        </li>
                        <li>
                            <code className="text-xs">ProgressLabel</code> is linked to the
                            progressbar via the primitive&apos;s labelling mechanism.
                        </li>
                        <li>
                            <code className="text-xs">ProgressValue</code> renders a{" "}
                            <code className="text-xs">tabular-nums</code> percentage with{" "}
                            <code className="text-xs">ml-auto</code> for right-alignment.
                        </li>
                        <li>
                            The indicator uses <code className="text-xs">transition-all</code> for
                            smooth fills on value updates.
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
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

// Basic
<Progress value={60}>
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>

// With label
<Progress value={45}>
  <ProgressLabel>Uploading files…</ProgressLabel>
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>

// With label and value percentage
<Progress value={72}>
  <ProgressLabel>Profile completion</ProgressLabel>
  <ProgressValue />
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>`}
                />
            </div>
        </div>
    );
}
