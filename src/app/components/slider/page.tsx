"use client";

import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function SliderPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
                <p className="text-muted-foreground text-sm">
                    A range slider for selecting a numeric value within a range. Built on the{" "}
                    <code className="text-xs">@base-ui/react</code> Slider primitive with a track,
                    progress indicator, and draggable thumb. Supports single value and range
                    (two-thumb) modes.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A <code className="text-xs">{"<Slider>"}</code> renders a
                    control/track/indicator/thumb hierarchy. The track is the full-width background,
                    the indicator shows the selected range, and the thumb is the draggable handle.
                    Multiple thumbs enable range selection.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm space-y-2">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="text-muted-foreground flex items-center gap-4 text-[10px]">
                            <span>data-slot=&quot;slider&quot;</span>
                            <span>track + indicator + thumb</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variations */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variations</h3>
                <Separator />
                <div className="max-w-sm space-y-6">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Single value</p>
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <p className="text-muted-foreground/60 text-xs">
                            One thumb, selecting a single point
                        </p>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Range (two thumbs)
                        </p>
                        <Slider defaultValue={[25, 75]} max={100} step={1} />
                        <p className="text-muted-foreground/60 text-xs">
                            Two thumbs defining a range
                        </p>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With steps</p>
                        <Slider defaultValue={[50]} max={100} step={10} />
                        <p className="text-muted-foreground/60 text-xs">
                            step=10, snaps to increments
                        </p>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Custom range</p>
                        <Slider defaultValue={[200]} min={0} max={1000} step={50} />
                        <p className="text-muted-foreground/60 text-xs">min=0, max=1000, step=50</p>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="max-w-sm space-y-4">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Default</p>
                        <Slider defaultValue={[50]} />
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Disabled</p>
                        <Slider defaultValue={[50]} disabled />
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
                                <strong className="text-foreground">Show the current value.</strong>{" "}
                                Display the selected value next to or above the slider for clarity.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use appropriate step sizes.
                                </strong>{" "}
                                Match the step to the precision needed (1 for age, 10 for volume,
                                etc.).
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use range mode for intervals.
                                </strong>{" "}
                                Price ranges, time windows, and min/max filters benefit from
                                two-thumb mode.
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
                                    Don&apos;t use for precise values.
                                </strong>{" "}
                                If exact numbers matter, pair the slider with a number input.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t hide the range.
                                </strong>{" "}
                                Users need to see min and max to understand the scale.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for very large ranges.
                                </strong>{" "}
                                A slider from 0 to 10000 makes fine control difficult.
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
                            Built on Base UI Slider &mdash; manages{" "}
                            <code className="text-xs">role=&quot;slider&quot;</code>,
                            aria-valuemin/max/now.
                        </li>
                        <li>
                            Arrow keys adjust value by step. Page Up/Down for larger jumps. Home/End
                            for min/max.
                        </li>
                        <li>
                            Focus ring on thumb uses <code className="text-xs">focus-visible</code>{" "}
                            with ring-4 styling.
                        </li>
                        <li>Thumb size: 4x4 with border, shadow, and hover/active ring states.</li>
                        <li>
                            Track height: 2px (h-0.5), progress indicator fills from left to thumb
                            position.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Slider } from "@/components/ui/slider"

// Single value
<Slider defaultValue={[50]} max={100} step={1} />

// Range slider (two thumbs)
<Slider defaultValue={[25, 75]} max={100} step={1} />

// Custom range and step
<Slider defaultValue={[200]} min={0} max={1000} step={50} />

// Disabled
<Slider defaultValue={[50]} disabled />

// Controlled
const [value, setValue] = useState([50])
<Slider value={value} onValueChange={setValue} max={100} step={1} />`}
                />
            </div>
        </div>
    );
}
