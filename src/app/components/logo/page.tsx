"use client";

import { OriginUiLogo } from "@/components/branding/origin-ui-logo";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function LogoPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Logo</h1>
                <p className="text-muted-foreground text-sm">
                    The Origin UI brand mark — a hexagon icon paired with the wordmark. Available in
                    three sizes: <code className="text-xs">sm</code>,{" "}
                    <code className="text-xs">default</code>, and{" "}
                    <code className="text-xs">lg</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The logo is a flex row containing a rounded icon container (primary background,
                    hexagon icon in primary-foreground) and a semibold wordmark. Icon size, gap, and
                    font size all scale together via the <code className="text-xs">size</code> prop.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <OriginUiLogo />
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sizes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Three sizes scale the icon, wordmark, and gap proportionally.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {(["sm", "default", "lg"] as const).map((size) => (
                            <div
                                key={size}
                                className="border-border flex flex-col items-center gap-3 rounded-lg border p-5"
                            >
                                <OriginUiLogo size={size} />
                                <code className="text-muted-foreground text-xs">
                                    size=&quot;{size}&quot;
                                </code>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* On different backgrounds */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Contexts</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The logo has self-contained light and dark mode styles — it switches
                    automatically when the theme changes, with no additional props required.
                </p>
                <div className="border-border bg-background flex items-center justify-center rounded-lg border p-6">
                    <OriginUiLogo />
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
                                    Use the predefined sizes.
                                </strong>{" "}
                                The three size variants maintain correct proportions between icon
                                and wordmark.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use in navigation headers and footers.
                                </strong>{" "}
                                The logo is most at home in site-level navigation bars.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use className for positioning only.
                                </strong>{" "}
                                Pass a <code className="text-xs">className</code> for margins or
                                flex alignment, not for overriding brand colors.
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
                                    Don&apos;t alter the icon or wordmark colors.
                                </strong>{" "}
                                The primary/primary-foreground pairing is intentional and ensures
                                contrast compliance.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t scale with custom font or icon classes.
                                </strong>{" "}
                                Use the <code className="text-xs">size</code> prop to resize —
                                manual overrides break the proportional balance.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use as a generic icon.
                                </strong>{" "}
                                The hexagon icon carries brand meaning; use a separate icon from
                                Lucide for other purposes.
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
                            <code className="text-xs">size</code> —{" "}
                            <code className="text-xs">
                                &quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;
                            </code>{" "}
                            (default: <code className="text-xs">&quot;default&quot;</code>).
                            Controls icon size, gap, and wordmark font size together.
                        </li>
                        <li>
                            <code className="text-xs">className</code> — applied to the outer flex
                            container. Use for margins and alignment.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiLogo } from "@/components/branding/origin-ui-logo"

<OriginUiLogo size="sm" />
<OriginUiLogo />           {/* default */}
<OriginUiLogo size="lg" />

// In a nav header
<nav className="flex items-center justify-between px-6 py-4">
  <OriginUiLogo />
  {/* ...nav items */}
</nav>`}
                />
            </div>
        </div>
    );
}
