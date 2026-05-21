import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

import { CopyToken } from "../copy-token";

const brandPalette = [
    {
        name: "brand-50",
        hex: "#FFFFFF",
        hsl: "0 0% 100%",
        cssVar: "--color-brand-50",
        tw: "bg-brand-50",
    },
    {
        name: "brand-100",
        hex: "#EAE0D5",
        hsl: "31 33% 88%",
        cssVar: "--color-brand-100",
        tw: "bg-brand-100",
    },
    {
        name: "brand-300",
        hex: "#C6AC8F",
        hsl: "32 33% 67%",
        cssVar: "--color-brand-300",
        tw: "bg-brand-300",
    },
    {
        name: "brand-600",
        hex: "#5E503F",
        hsl: "33 20% 31%",
        cssVar: "--color-brand-600",
        tw: "bg-brand-600",
    },
    {
        name: "brand-800",
        hex: "#22333B",
        hsl: "199 27% 18%",
        cssVar: "--color-brand-800",
        tw: "bg-brand-800",
    },
    {
        name: "brand-950",
        hex: "#0A0908",
        hsl: "30 11% 4%",
        cssVar: "--color-brand-950",
        tw: "bg-brand-950",
    },
];

const semanticColors = [
    {
        name: "background",
        lightDesc: "brand-50 (white)",
        darkDesc: "brand-950 (near-black)",
        tw: "bg-background",
        cssVar: "--background",
    },
    {
        name: "foreground",
        lightDesc: "brand-950",
        darkDesc: "brand-100",
        tw: "bg-foreground",
        cssVar: "--foreground",
    },
    {
        name: "primary",
        lightDesc: "brand-800 (dark teal)",
        darkDesc: "brand-100 (warm beige)",
        tw: "bg-primary",
        cssVar: "--primary",
    },
    {
        name: "primary-foreground",
        lightDesc: "brand-50",
        darkDesc: "brand-950",
        tw: "bg-primary-foreground",
        cssVar: "--primary-foreground",
    },
    {
        name: "secondary",
        lightDesc: "brand-100",
        darkDesc: "dark teal shade",
        tw: "bg-secondary",
        cssVar: "--secondary",
    },
    {
        name: "secondary-foreground",
        lightDesc: "brand-950",
        darkDesc: "brand-100",
        tw: "bg-secondary-foreground",
        cssVar: "--secondary-foreground",
    },
    {
        name: "muted",
        lightDesc: "brand-100",
        darkDesc: "dark teal shade",
        tw: "bg-muted",
        cssVar: "--muted",
    },
    {
        name: "muted-foreground",
        lightDesc: "brand-600",
        darkDesc: "brand-300",
        tw: "bg-muted-foreground",
        cssVar: "--muted-foreground",
    },
    {
        name: "accent",
        lightDesc: "brand-100",
        darkDesc: "dark teal shade",
        tw: "bg-accent",
        cssVar: "--accent",
    },
    {
        name: "accent-foreground",
        lightDesc: "brand-950",
        darkDesc: "brand-100",
        tw: "bg-accent-foreground",
        cssVar: "--accent-foreground",
    },
    {
        name: "card",
        lightDesc: "brand-50",
        darkDesc: "199 27% 14%",
        tw: "bg-card",
        cssVar: "--card",
    },
    {
        name: "card-foreground",
        lightDesc: "brand-950",
        darkDesc: "brand-100",
        tw: "bg-card-foreground",
        cssVar: "--card-foreground",
    },
    {
        name: "popover",
        lightDesc: "brand-50",
        darkDesc: "199 27% 14%",
        tw: "bg-popover",
        cssVar: "--popover",
    },
    {
        name: "popover-foreground",
        lightDesc: "brand-950",
        darkDesc: "brand-100",
        tw: "bg-popover-foreground",
        cssVar: "--popover-foreground",
    },
    {
        name: "destructive",
        lightDesc: "error red",
        darkDesc: "error red",
        tw: "bg-destructive",
        cssVar: "--destructive",
    },
    {
        name: "border",
        lightDesc: "brand-100",
        darkDesc: "199 20% 16%",
        tw: "bg-border",
        cssVar: "--border",
    },
    {
        name: "input",
        lightDesc: "brand-100",
        darkDesc: "199 20% 20%",
        tw: "bg-input",
        cssVar: "--input",
    },
    {
        name: "ring",
        lightDesc: "brand-300 (golden)",
        darkDesc: "brand-300 (golden)",
        tw: "bg-ring",
        cssVar: "--ring",
    },
];

const chartColors = [
    {
        name: "chart-1",
        lightDesc: "brand-800",
        darkDesc: "brand-300",
        tw: "bg-chart-1",
        cssVar: "--chart-1",
    },
    {
        name: "chart-2",
        lightDesc: "brand-600",
        darkDesc: "brand-100",
        tw: "bg-chart-2",
        cssVar: "--chart-2",
    },
    {
        name: "chart-3",
        lightDesc: "brand-300",
        darkDesc: "brand-600",
        tw: "bg-chart-3",
        cssVar: "--chart-3",
    },
    {
        name: "chart-4",
        lightDesc: "brand-100",
        darkDesc: "brand-800",
        tw: "bg-chart-4",
        cssVar: "--chart-4",
    },
    {
        name: "chart-5",
        lightDesc: "brand-950",
        darkDesc: "brand-950",
        tw: "bg-chart-5",
        cssVar: "--chart-5",
    },
];

const sidebarColors = [
    {
        name: "sidebar",
        lightDesc: "brand-50",
        darkDesc: "brand-950",
        tw: "bg-sidebar",
        cssVar: "--sidebar",
    },
    {
        name: "sidebar-foreground",
        lightDesc: "brand-950",
        darkDesc: "brand-100",
        tw: "bg-sidebar-foreground",
        cssVar: "--sidebar-foreground",
    },
    {
        name: "sidebar-primary",
        lightDesc: "brand-800",
        darkDesc: "brand-300",
        tw: "bg-sidebar-primary",
        cssVar: "--sidebar-primary",
    },
    {
        name: "sidebar-primary-foreground",
        lightDesc: "brand-50",
        darkDesc: "brand-950",
        tw: "bg-sidebar-primary-foreground",
        cssVar: "--sidebar-primary-foreground",
    },
    {
        name: "sidebar-accent",
        lightDesc: "brand-100",
        darkDesc: "199 20% 12%",
        tw: "bg-sidebar-accent",
        cssVar: "--sidebar-accent",
    },
    {
        name: "sidebar-accent-foreground",
        lightDesc: "brand-950",
        darkDesc: "brand-100",
        tw: "bg-sidebar-accent-foreground",
        cssVar: "--sidebar-accent-foreground",
    },
    {
        name: "sidebar-border",
        lightDesc: "brand-100",
        darkDesc: "199 20% 16%",
        tw: "bg-sidebar-border",
        cssVar: "--sidebar-border",
    },
    {
        name: "sidebar-ring",
        lightDesc: "brand-300",
        darkDesc: "brand-300",
        tw: "bg-sidebar-ring",
        cssVar: "--sidebar-ring",
    },
];

const statusColors = [
    {
        name: "success",
        hex: "#10B981",
        hsl: "160 84% 39%",
        tw: "bg-success",
        cssVar: "--success",
    },
    {
        name: "warning",
        hex: "#F59E0B",
        hsl: "38 92% 50%",
        tw: "bg-warning",
        cssVar: "--warning",
    },
    {
        name: "error",
        hex: "#EF4444",
        hsl: "0 84% 60%",
        tw: "bg-error",
        cssVar: "--error",
    },
    {
        name: "info",
        hex: "#5E503F",
        hsl: "33 20% 31%",
        tw: "bg-info",
        cssVar: "--info",
    },
];

function SemanticColorGrid({
    colors,
}: {
    colors: {
        name: string;
        lightDesc: string;
        darkDesc: string;
        tw: string;
        cssVar: string;
    }[];
}) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((color) => (
                <div
                    key={color.name}
                    className="border-border flex items-center gap-3 rounded-lg border p-3"
                >
                    <div
                        className={`border-border size-10 shrink-0 rounded-md border ${color.tw}`}
                    />
                    <div className="min-w-0">
                        <p className="text-sm font-medium">{color.name}</p>
                        <p className="text-muted-foreground truncate text-xs">
                            Light: {color.lightDesc}
                        </p>
                        <p className="text-muted-foreground truncate text-xs">
                            Dark: {color.darkDesc}
                        </p>
                        <CopyToken
                            value={color.cssVar}
                            className="text-muted-foreground/60 text-xs"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ColorsPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Color Palette</h1>
                <p className="text-muted-foreground text-sm">
                    Brand colors, semantic mappings, chart colors, sidebar colors, and status
                    indicators derived from the Figma source of truth.
                </p>
                <Separator />
            </div>

            {/* Brand Palette */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Brand Palette</h3>
                <Separator />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {brandPalette.map((color) => (
                        <div key={color.name} className="space-y-2">
                            <div
                                className="border-border aspect-square rounded-lg border"
                                style={{
                                    backgroundColor: color.hex,
                                }}
                            />
                            <div>
                                <p className="text-sm font-medium">{color.name}</p>
                                <CopyToken value={color.hex} className="text-xs" />
                                <p className="text-muted-foreground text-xs">{color.hsl}</p>
                                <CopyToken
                                    value={color.tw}
                                    className="text-muted-foreground/60 text-xs"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Semantic Mappings */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Semantic Mappings</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    These tokens change between light and dark mode. The swatches below reflect the
                    current theme. All tokens are defined as CSS custom properties and mapped to
                    Tailwind utility classes.
                </p>
                <SemanticColorGrid colors={semanticColors} />
            </div>

            {/* Chart Colors */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Chart Colors</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Sequential palette for data visualizations. Used by Recharts and other charting
                    libraries.
                </p>
                <div className="border-border flex gap-0 overflow-hidden rounded-lg border">
                    {chartColors.map((color) => (
                        <div key={color.name} className="flex-1">
                            <div className={`h-16 ${color.tw}`} />
                            <div className="p-2 text-center">
                                <p className="text-xs font-medium">{color.name}</p>
                                <CopyToken
                                    value={color.cssVar}
                                    className="text-muted-foreground text-[10px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <SemanticColorGrid colors={chartColors} />
            </div>

            {/* Sidebar Colors */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sidebar Colors</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Dedicated color tokens for sidebar components. These follow the same light/dark
                    mapping pattern as the core semantic tokens.
                </p>
                <SemanticColorGrid colors={sidebarColors} />
            </div>

            {/* Status Colors */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Status Colors</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Fixed-value colors for communicating status and feedback. These do not change
                    between themes.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {statusColors.map((color) => (
                        <div key={color.name} className="space-y-2">
                            <div
                                className="border-border h-20 rounded-lg border"
                                style={{
                                    backgroundColor: color.hex,
                                }}
                            />
                            <div>
                                <p className="text-sm font-medium capitalize">{color.name}</p>
                                <CopyToken value={color.hex} className="text-xs" />
                                <p className="text-muted-foreground text-xs">{color.hsl}</p>
                                <CopyToken
                                    value={color.cssVar}
                                    className="text-muted-foreground/60 text-xs"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Composition Patterns */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Composition Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Common color pairings showing how semantic tokens combine in real components.
                    These patterns adapt automatically between light and dark themes.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Card with emphasis
                        </p>
                        <div className="border-border bg-card rounded-lg border p-4">
                            <h4 className="text-card-foreground text-sm font-semibold">
                                Monthly Revenue
                            </h4>
                            <p className="text-foreground mt-1 text-2xl font-bold">$24,563</p>
                            <p className="text-muted-foreground mt-0.5 text-xs">
                                +12.5% from last month
                            </p>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Status indicators
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                                <span className="bg-success size-1.5 rounded-full" />
                                Active
                            </span>
                            <span className="bg-warning/10 text-warning inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                                <span className="bg-warning size-1.5 rounded-full" />
                                Pending
                            </span>
                            <span className="bg-error/10 text-error inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                                <span className="bg-error size-1.5 rounded-full" />
                                Failed
                            </span>
                            <span className="bg-muted text-muted-foreground inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                                <span className="bg-muted-foreground size-1.5 rounded-full" />
                                Inactive
                            </span>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Primary action + secondary
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium">
                                Primary
                            </div>
                            <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 text-sm font-medium">
                                Secondary
                            </div>
                            <div className="bg-accent text-accent-foreground rounded-lg px-4 py-2 text-sm font-medium">
                                Accent
                            </div>
                            <div className="bg-muted text-muted-foreground rounded-lg px-4 py-2 text-sm font-medium">
                                Muted
                            </div>
                        </div>
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
                                    Use semantic tokens, not brand values directly.
                                </strong>{" "}
                                Write <code className="text-xs">bg-primary</code> instead of{" "}
                                <code className="text-xs">bg-brand-800</code>. Semantic tokens adapt
                                to light/dark mode automatically.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pair foreground tokens with their background.
                                </strong>{" "}
                                Always use <code className="text-xs">text-primary-foreground</code>{" "}
                                on <code className="text-xs">bg-primary</code> to guarantee
                                contrast.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Reserve destructive for irreversible actions.
                                </strong>{" "}
                                The destructive color carries strong semantic weight &mdash; use it
                                only for delete, remove, or error states.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use status colors consistently.
                                </strong>{" "}
                                Green for success, amber for warning, red for error, and brand-600
                                for informational. Never reassign these meanings.
                            </li>
                            <li>
                                <strong className="text-foreground">Test both themes.</strong>{" "}
                                Verify every screen in both light and dark mode. Semantic tokens
                                handle the mapping, but layouts can still look unbalanced.
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
                                    Don&apos;t hardcode hex or HSL values.
                                </strong>{" "}
                                Inline colors bypass the theme system and will break in dark mode.
                                Use CSS variables or Tailwind tokens instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t rely on color alone to convey meaning.
                                </strong>{" "}
                                Always pair color with text labels, icons, or patterns so
                                color-blind users can distinguish states (WCAG 1.4.1).
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use foreground colors on mismatched backgrounds.
                                </strong>{" "}
                                Combining <code className="text-xs">text-card-foreground</code> with{" "}
                                <code className="text-xs">bg-popover</code> may look fine today but
                                can drift on theme updates.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t introduce new color tokens without updating the
                                    theme.
                                </strong>{" "}
                                Ad-hoc colors create inconsistency. Extend the palette through CSS
                                custom properties in the theme file.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use opacity hacks for lighter shades.
                                </strong>{" "}
                                Prefer the actual brand scale (
                                <code className="text-xs">brand-100</code>,{" "}
                                <code className="text-xs">brand-300</code>) over{" "}
                                <code className="text-xs">bg-primary/20</code> for predictable
                                results across backgrounds.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-2 text-sm font-medium">Accessibility</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                All semantic foreground/background pairs meet WCAG 2.1 AA contrast
                                (4.5:1 for normal text, 3:1 for large text).
                            </li>
                            <li>
                                Status colors are paired with text labels and icons &mdash; never
                                rely on color alone to communicate state (WCAG 1.4.1).
                            </li>
                            <li>
                                The <code className="text-xs">--ring</code> token (brand-300)
                                provides a visible focus indicator that meets the 3:1 contrast
                                requirement against both light and dark backgrounds.
                            </li>
                            <li>
                                Dark mode uses carefully chosen HSL values (not simple inversions)
                                to maintain perceived contrast and readability.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`// Semantic background + foreground pairs
<div className="bg-primary text-primary-foreground">Primary</div>
<div className="bg-secondary text-secondary-foreground">Secondary</div>
<div className="bg-muted text-muted-foreground">Muted</div>
<div className="bg-accent text-accent-foreground">Accent</div>
<div className="bg-destructive text-white">Destructive</div>

// Card and popover surfaces
<div className="bg-card text-card-foreground">Card content</div>
<div className="bg-popover text-popover-foreground">Popover content</div>

// Borders and inputs
<div className="border border-border">Bordered element</div>
<input className="border border-input bg-background" />

// Focus ring
<button className="focus-visible:ring-3 focus-visible:ring-ring/50">
  Focusable
</button>

// Status colors (fixed across themes)
<span className="text-success">Success</span>
<span className="text-warning">Warning</span>
<span className="text-error">Error</span>

// CSS custom properties
color: hsl(var(--primary));
background: hsl(var(--background));`}
                />
            </div>
        </div>
    );
}
