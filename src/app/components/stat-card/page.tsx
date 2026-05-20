"use client";

import { OriginUiStatCard } from "@/components/branding/origin-ui-stat-card";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Check,
    X,
    DollarSign,
    Users,
    Activity,
    Package,
    BarChart3,
    TrendingUp,
} from "lucide-react";

export default function StatCardPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">StatCard</h1>
                <p className="text-muted-foreground text-sm">
                    A dashboard metric card displaying a key number with a label, icon, and optional
                    trend indicator. Built on <code className="text-xs">Card</code> — layout and
                    sizing follow the same rules.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The card header contains the label and icon. The card content shows the large
                    value and an optional change line with a trending arrow.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <div className="w-full max-w-xs">
                        <OriginUiStatCard
                            icon={DollarSign}
                            label="Revenue"
                            value="$45,231"
                            change="+20.1% from last month"
                            trend="up"
                        />
                    </div>
                </div>
            </div>

            {/* Trend variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Trend Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">trend</code> prop controls the arrow direction and
                    color. Omit it (or the <code className="text-xs">change</code> prop) for a
                    neutral metric with no trend indicator.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Trend up
                        </p>
                        <OriginUiStatCard
                            icon={TrendingUp}
                            label="Revenue"
                            value="$45,231"
                            change="+20.1% from last month"
                            trend="up"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Trend down
                        </p>
                        <OriginUiStatCard
                            icon={Activity}
                            label="Bounce Rate"
                            value="24.5%"
                            change="-3.2% from last month"
                            trend="down"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            No trend
                        </p>
                        <OriginUiStatCard icon={Package} label="Total Orders" value="1,429" />
                    </div>
                </div>
            </div>

            {/* Dashboard grid */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Dashboard Grid</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    StatCards are designed to sit in a responsive grid at the top of a dashboard
                    layout.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <OriginUiStatCard
                        icon={DollarSign}
                        label="Revenue"
                        value="$45,231"
                        change="+20.1%"
                        trend="up"
                    />
                    <OriginUiStatCard
                        icon={Users}
                        label="Active Users"
                        value="2,350"
                        change="+12.5%"
                        trend="up"
                    />
                    <OriginUiStatCard
                        icon={Activity}
                        label="Bounce Rate"
                        value="24.5%"
                        change="-3.2%"
                        trend="down"
                    />
                    <OriginUiStatCard
                        icon={BarChart3}
                        label="Conversion"
                        value="3.6%"
                        change="+0.4%"
                        trend="up"
                    />
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
                                    Show 3–6 stat cards together.
                                </strong>{" "}
                                A row of key metrics gives context at a glance; fewer than three
                                feels sparse, more than six is overwhelming.
                            </li>
                            <li>
                                <strong className="text-foreground">Use contextual icons.</strong>{" "}
                                The icon reinforces the metric category — dollar for revenue, users
                                for people, activity for rates.
                            </li>
                            <li>
                                <strong className="text-foreground">Keep values concise.</strong>{" "}
                                Format large numbers ($45K not $45,231) to maintain readability at
                                small card sizes.
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
                                    Don&apos;t use for non-numeric content.
                                </strong>{" "}
                                If the value is text or a status, use a different card variant.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix trend directions without clear labeling.
                                </strong>{" "}
                                A mix of up/down arrows in a grid reads as noise — provide enough
                                context in the change string.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t omit the label.
                                </strong>{" "}
                                The large value alone is meaningless without the label telling users
                                what they&apos;re looking at.
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
                            <code className="text-xs">icon</code> (required) — a{" "}
                            <code className="text-xs">LucideIcon</code> component displayed in the
                            card header.
                        </li>
                        <li>
                            <code className="text-xs">label</code> (required) — the metric name
                            displayed as the card description.
                        </li>
                        <li>
                            <code className="text-xs">value</code> (required) — the formatted metric
                            value shown in large bold text.
                        </li>
                        <li>
                            <code className="text-xs">change</code> (optional) — a short change
                            string shown below the value.
                        </li>
                        <li>
                            <code className="text-xs">trend</code> (optional) —{" "}
                            <code className="text-xs">&quot;up&quot; | &quot;down&quot;</code>.
                            Shows a <code className="text-xs">TrendingUp</code> (success color) or{" "}
                            <code className="text-xs">TrendingDown</code> (error color) icon next to
                            the change string.
                        </li>
                        <li>
                            <code className="text-xs">className</code> — forwarded to the root{" "}
                            <code className="text-xs">Card</code> element.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiStatCard } from "@/components/branding/origin-ui-stat-card"
import { DollarSign, Users, Activity } from "lucide-react"

// Dashboard grid
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <OriginUiStatCard
    icon={DollarSign}
    label="Revenue"
    value="$45,231"
    change="+20.1% from last month"
    trend="up"
  />
  <OriginUiStatCard
    icon={Users}
    label="Active Users"
    value="2,350"
    change="+12.5% from last month"
    trend="up"
  />
  <OriginUiStatCard
    icon={Activity}
    label="Bounce Rate"
    value="24.5%"
    change="-3.2% from last month"
    trend="down"
  />
  // No trend indicator
  <OriginUiStatCard
    icon={Package}
    label="Total Orders"
    value="1,429"
  />
</div>`}
                />
            </div>
        </div>
    );
}
