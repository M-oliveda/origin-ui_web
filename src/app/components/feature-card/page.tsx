"use client";

import { OriginUiFeatureCard } from "@/components/branding/origin-ui-feature-card";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Check,
    X,
    Zap,
    Shield,
    Globe,
    Lock,
    BarChart3,
    Layers,
    Bell,
    Code2,
    Database,
    Cpu,
} from "lucide-react";

export default function FeatureCardPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">FeatureCard</h1>
                <p className="text-muted-foreground text-sm">
                    A marketing card for feature grids. Displays an icon in a primary-tinted circle,
                    a title, and a description. Applies a subtle hover border to communicate
                    interactivity.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Built on <code className="text-xs">Card</code>. The{" "}
                    <code className="text-xs">CardHeader</code> contains: a rounded icon container
                    with <code className="text-xs">bg-primary/10</code>, a{" "}
                    <code className="text-xs">CardTitle</code>, and a{" "}
                    <code className="text-xs">CardDescription</code>. The card root adds a{" "}
                    <code className="text-xs">hover:border-ring</code> transition.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <div className="w-full max-w-xs">
                        <OriginUiFeatureCard
                            icon={Zap}
                            title="Lightning Fast"
                            description="Optimized rendering for instant page loads and smooth interactions."
                        />
                    </div>
                </div>
            </div>

            {/* Feature grid — 3 cols */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">3-Column Grid</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The most common layout — a 3-column grid on desktop, 1-column on mobile.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                    <OriginUiFeatureCard
                        icon={Zap}
                        title="Lightning Fast"
                        description="Built for performance with optimized rendering and lazy loading."
                    />
                    <OriginUiFeatureCard
                        icon={Shield}
                        title="Secure by Default"
                        description="Enterprise-grade security with built-in authentication."
                    />
                    <OriginUiFeatureCard
                        icon={Globe}
                        title="Global Scale"
                        description="Deploy worldwide with edge computing and CDN delivery."
                    />
                </div>
            </div>

            {/* Feature grid — 4 cols */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">4-Column Grid</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    For larger feature sets, a 4-column grid with shorter descriptions.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <OriginUiFeatureCard
                        icon={Lock}
                        title="Auth"
                        description="SSO, 2FA, and RBAC built in."
                    />
                    <OriginUiFeatureCard
                        icon={BarChart3}
                        title="Analytics"
                        description="Real-time metrics and dashboards."
                    />
                    <OriginUiFeatureCard
                        icon={Layers}
                        title="Modular"
                        description="Compose only what you need."
                    />
                    <OriginUiFeatureCard
                        icon={Bell}
                        title="Notifications"
                        description="Email, SMS, and push alerts."
                    />
                </div>
            </div>

            {/* Tech features grid */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Technical Features</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Works equally well for developer-focused feature lists.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                    <OriginUiFeatureCard
                        icon={Code2}
                        title="Type-Safe"
                        description="Full TypeScript support with auto-generated types and strict mode."
                    />
                    <OriginUiFeatureCard
                        icon={Database}
                        title="Any Database"
                        description="Adapters for Postgres, MySQL, SQLite, MongoDB and more."
                    />
                    <OriginUiFeatureCard
                        icon={Cpu}
                        title="Edge Ready"
                        description="Runs on Vercel Edge, Cloudflare Workers, and Deno Deploy."
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
                                    Use in groups of 3, 6, or 9.
                                </strong>{" "}
                                Feature grids look balanced in multiples of 3 — matching the
                                3-column grid breakpoint.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep descriptions parallel in length.
                                </strong>{" "}
                                Consistent description lengths create a uniform grid height without
                                gaps.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use icons that reinforce the title.
                                </strong>{" "}
                                The icon is a quick visual cue — it should match the feature&apos;s
                                meaning, not just look nice.
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
                                    Don&apos;t use for interactive cards with actions.
                                </strong>{" "}
                                FeatureCard is display-only — for clickable cards, add a button
                                inside CardContent instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix very long and very short descriptions.
                                </strong>{" "}
                                One card at 3 lines and another at 1 line creates a ragged grid.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use more than 12 feature cards per section.
                                </strong>{" "}
                                More than 12 cards dilutes focus and overwhelms the reader.
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
                            <code className="text-xs">LucideIcon</code> displayed in the{" "}
                            <code className="text-xs">bg-primary/10</code> container.
                        </li>
                        <li>
                            <code className="text-xs">title</code> (required) — rendered as{" "}
                            <code className="text-xs">CardTitle</code> at{" "}
                            <code className="text-xs">text-base</code> size.
                        </li>
                        <li>
                            <code className="text-xs">description</code> (required) — rendered as{" "}
                            <code className="text-xs">CardDescription</code>.
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
                    code={`import { OriginUiFeatureCard } from "@/components/branding/origin-ui-feature-card"
import { Zap, Shield, Globe } from "lucide-react"

<div className="grid gap-4 sm:grid-cols-3">
  <OriginUiFeatureCard
    icon={Zap}
    title="Lightning Fast"
    description="Optimized rendering for instant page loads."
  />
  <OriginUiFeatureCard
    icon={Shield}
    title="Secure by Default"
    description="Enterprise-grade security built in."
  />
  <OriginUiFeatureCard
    icon={Globe}
    title="Global Scale"
    description="Deploy worldwide with edge computing."
  />
</div>`}
                />
            </div>
        </div>
    );
}
