import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

import { CopyToken } from "../copy-token";

const typeScale = [
    { name: "text-xs", class: "text-xs", px: "12px" },
    { name: "text-sm", class: "text-sm", px: "14px" },
    { name: "text-base", class: "text-base", px: "16px" },
    { name: "text-lg", class: "text-lg", px: "18px" },
    { name: "text-xl", class: "text-xl", px: "20px" },
    { name: "text-2xl", class: "text-2xl", px: "24px" },
    { name: "text-3xl", class: "text-3xl", px: "30px" },
    { name: "text-4xl", class: "text-4xl", px: "36px" },
    { name: "text-5xl", class: "text-5xl", px: "48px" },
    { name: "text-6xl", class: "text-6xl", px: "60px" },
    { name: "text-7xl", class: "text-7xl", px: "72px" },
    { name: "text-8xl", class: "text-8xl", px: "96px" },
    { name: "text-9xl", class: "text-9xl", px: "128px" },
];

const fontWeights = [
    { name: "Thin", class: "font-thin", weight: 100 },
    { name: "Extra Light", class: "font-extralight", weight: 200 },
    { name: "Light", class: "font-light", weight: 300 },
    { name: "Normal", class: "font-normal", weight: 400 },
    { name: "Medium", class: "font-medium", weight: 500 },
    { name: "Semi Bold", class: "font-semibold", weight: 600 },
    { name: "Bold", class: "font-bold", weight: 700 },
    { name: "Extra Bold", class: "font-extrabold", weight: 800 },
    { name: "Black", class: "font-black", weight: 900 },
];

const letterSpacings = [
    { name: "tracking-tighter", class: "tracking-tighter", value: "-0.05em" },
    { name: "tracking-tight", class: "tracking-tight", value: "-0.025em" },
    { name: "tracking-normal", class: "tracking-normal", value: "0em" },
    { name: "tracking-wide", class: "tracking-wide", value: "0.025em" },
    { name: "tracking-wider", class: "tracking-wider", value: "0.05em" },
    { name: "tracking-widest", class: "tracking-widest", value: "0.1em" },
];

const lineHeights = [
    { name: "leading-none", class: "leading-none", value: "1" },
    { name: "leading-tight", class: "leading-tight", value: "1.25" },
    { name: "leading-snug", class: "leading-snug", value: "1.375" },
    { name: "leading-normal", class: "leading-normal", value: "1.5" },
    { name: "leading-relaxed", class: "leading-relaxed", value: "1.625" },
    { name: "leading-loose", class: "leading-loose", value: "2" },
];

export default function TypographyPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
                <p className="text-muted-foreground text-sm">
                    Font families, type scale, weights, letter spacing, and line heights.
                </p>
                <Separator />
            </div>

            {/* Font Families */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Font Families</h3>
                <Separator />
                <div className="space-y-6">
                    <div className="border-border rounded-lg border p-6">
                        <p className="text-muted-foreground mb-1 text-xs font-medium tracking-widest uppercase">
                            Sans — Space Grotesk
                        </p>
                        <p className="font-sans text-2xl">
                            The quick brown fox jumps over the lazy dog
                        </p>
                        <div className="mt-2">
                            <CopyToken value="font-sans" label="font-sans / --font-sans" />
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-6">
                        <p className="text-muted-foreground mb-1 text-xs font-medium tracking-widest uppercase">
                            Serif — Georgia
                        </p>
                        <p className="font-serif text-2xl">
                            The quick brown fox jumps over the lazy dog
                        </p>
                        <div className="mt-2">
                            <CopyToken value="font-serif" label="font-serif / --font-serif" />
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-6">
                        <p className="text-muted-foreground mb-1 text-xs font-medium tracking-widest uppercase">
                            Mono — System Monospace
                        </p>
                        <p className="font-mono text-2xl">
                            The quick brown fox jumps over the lazy dog
                        </p>
                        <div className="mt-2">
                            <CopyToken value="font-mono" label="font-mono / --font-mono" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Type Scale */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Type Scale</h3>
                <Separator />
                <div className="space-y-4">
                    {typeScale.map((item) => (
                        <div
                            key={item.name}
                            className="border-border flex items-baseline gap-4 overflow-hidden border-b pb-3 last:border-0"
                        >
                            <div className="w-28 shrink-0">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 text-xs">{item.px}</p>
                            </div>
                            <p className={`${item.class} min-w-0`}>Space Grotesk</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Weights */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Font Weights</h3>
                <Separator />
                <div className="space-y-4">
                    {fontWeights.map((item) => (
                        <div
                            key={item.name}
                            className="border-border flex items-baseline gap-4 border-b pb-3 last:border-0"
                        >
                            <div className="w-28 shrink-0">
                                <CopyToken value={item.class} />
                                <p className="text-muted-foreground/60 text-xs">{item.weight}</p>
                            </div>
                            <p className={`${item.class} text-2xl`}>{item.name} — Space Grotesk</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Letter Spacing */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Letter Spacing</h3>
                <Separator />
                <div className="space-y-4">
                    {letterSpacings.map((item) => (
                        <div
                            key={item.name}
                            className="border-border flex items-baseline gap-4 border-b pb-3 last:border-0"
                        >
                            <div className="w-36 shrink-0">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 text-xs">{item.value}</p>
                            </div>
                            <p className={`${item.class} min-w-0 text-xl`}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Line Heights */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Line Heights</h3>
                <Separator />
                <div className="space-y-6">
                    {lineHeights.map((item) => (
                        <div
                            key={item.name}
                            className="border-border flex gap-4 border-b pb-4 last:border-0"
                        >
                            <div className="w-36 shrink-0 pt-1">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 text-xs">{item.value}</p>
                            </div>
                            <p className={`${item.class} max-w-md text-base`}>
                                Typography is the art and technique of arranging type to make
                                written language legible, readable, and appealing when displayed.
                                The arrangement of type involves selecting typefaces, point sizes,
                                line lengths, line spacing, and letter spacing.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Composition Patterns */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Composition Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Common type pairings that create clear visual hierarchy. These patterns combine
                    scale, weight, and color tokens into reusable building blocks.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Page header
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                        <p className="text-muted-foreground mt-1 text-sm">
                            Monitor your key metrics, recent activity, and system health at a
                            glance.
                        </p>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Section header
                        </p>
                        <h3 className="text-lg font-semibold tracking-tight">Recent Activity</h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                            Your latest updates and notifications from the past 7 days.
                        </p>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Stat card
                        </p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                                Monthly Revenue
                            </p>
                        </div>
                        <p className="mt-1 text-3xl font-bold tracking-tight">$24,563</p>
                        <p className="text-muted-foreground mt-0.5 text-xs">
                            +12.5% from last month
                        </p>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Article body
                        </p>
                        <h2 className="text-xl font-semibold tracking-tight">
                            Getting Started with Origin UI
                        </h2>
                        <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                            Origin UI provides a comprehensive set of design tokens and components
                            built on Tailwind CSS. The system emphasizes responsive sizing, semantic
                            color tokens, and accessible defaults to help teams ship consistent
                            interfaces.
                        </p>
                        <p className="text-muted-foreground/60 mt-3 text-xs">
                            Published on March 15, 2025 &mdash; 5 min read
                        </p>
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
                                    Use tracking-tight on headings.
                                </strong>{" "}
                                Text at <code className="text-xs">text-xl</code> and above benefits
                                from tighter letter-spacing for optical balance.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pair bold headings with normal body.
                                </strong>{" "}
                                Use <code className="text-xs">font-semibold</code> or{" "}
                                <code className="text-xs">font-bold</code> for headings and{" "}
                                <code className="text-xs">font-normal</code> for body to create
                                clear weight contrast.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use muted-foreground for secondary text.
                                </strong>{" "}
                                Descriptions, captions, and helper text should use{" "}
                                <code className="text-xs">text-muted-foreground</code> to
                                de-emphasize without hiding.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Stick to the type scale.
                                </strong>{" "}
                                Avoid arbitrary font sizes. The 13-step scale covers every use case
                                from captions to hero headings.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use leading-normal for body text.
                                </strong>{" "}
                                A line-height of 1.5 ensures comfortable reading for multi-line
                                content.
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
                                    Don&apos;t use more than 2 font weights per screen.
                                </strong>{" "}
                                Too many weights compete for attention and flatten the visual
                                hierarchy.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t set body text below text-sm.
                                </strong>{" "}
                                Text smaller than 14px harms readability for most users, especially
                                on mobile devices.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use tracking-wide on body text.
                                </strong>{" "}
                                Wide letter-spacing reduces readability at small sizes. Reserve it
                                for uppercase labels and captions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix font families within a component.
                                </strong>{" "}
                                Use a single family per component. Reserve{" "}
                                <code className="text-xs">font-mono</code> for code snippets and
                                data values.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use leading-none on multi-line text.
                                </strong>{" "}
                                A line-height of 1 causes lines to overlap. Only use it on
                                single-line headings where tight spacing is intentional.
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
                                Use semantic HTML headings (<code className="text-xs">h1</code>
                                &ndash;
                                <code className="text-xs">h6</code>) in logical order. Screen
                                readers use heading levels to build a page outline.
                            </li>
                            <li>
                                WCAG 1.4.12 (Text Spacing) requires text to remain readable when
                                users override line-height to 1.5&times;, letter-spacing to 0.12em,
                                and word-spacing to 0.16em. Avoid fixed heights on text containers.
                            </li>
                            <li>
                                All font sizes must scale with browser zoom. Never use{" "}
                                <code className="text-xs">px</code> units for font-size &mdash;
                                Tailwind&apos;s <code className="text-xs">text-*</code> utilities
                                use <code className="text-xs">rem</code> by default.
                            </li>
                            <li>
                                Ensure a minimum contrast ratio of 4.5:1 for body text and 3:1 for
                                large text (18px+ or 14px+ bold) per WCAG 1.4.3.
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
                    code={`// Page header
<h1 className="text-3xl font-bold tracking-tight">Page Title</h1>
<p className="text-sm text-muted-foreground">Page description</p>

// Section header
<h3 className="text-lg font-semibold tracking-tight">Section</h3>

// Body text
<p className="text-base leading-relaxed">Body content here.</p>

// Caption / helper text
<p className="text-xs text-muted-foreground">Helper text</p>

// Uppercase label
<p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
  Label
</p>

// Monospace for code
<code className="font-mono text-xs">const x = 42</code>

// Font families
<p className="font-sans">Sans (Space Grotesk)</p>
<p className="font-serif">Serif (Georgia)</p>
<p className="font-mono">Mono (System)</p>`}
                />
            </div>
        </div>
    );
}
