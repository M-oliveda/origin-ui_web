import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

import { CopyToken } from "../copy-token";

const spacingScale = [
    { name: "0", px: "0px", rem: "0rem" },
    { name: "px", px: "1px", rem: "1px" },
    { name: "0.5", px: "2px", rem: "0.125rem" },
    { name: "1", px: "4px", rem: "0.25rem" },
    { name: "1.5", px: "6px", rem: "0.375rem" },
    { name: "2", px: "8px", rem: "0.5rem" },
    { name: "2.5", px: "10px", rem: "0.625rem" },
    { name: "3", px: "12px", rem: "0.75rem" },
    { name: "3.5", px: "14px", rem: "0.875rem" },
    { name: "4", px: "16px", rem: "1rem" },
    { name: "5", px: "20px", rem: "1.25rem" },
    { name: "6", px: "24px", rem: "1.5rem" },
    { name: "7", px: "28px", rem: "1.75rem" },
    { name: "8", px: "32px", rem: "2rem" },
    { name: "9", px: "36px", rem: "2.25rem" },
    { name: "10", px: "40px", rem: "2.5rem" },
    { name: "11", px: "44px", rem: "2.75rem" },
    { name: "12", px: "48px", rem: "3rem" },
    { name: "14", px: "56px", rem: "3.5rem" },
    { name: "16", px: "64px", rem: "4rem" },
    { name: "20", px: "80px", rem: "5rem" },
    { name: "24", px: "96px", rem: "6rem" },
    { name: "28", px: "112px", rem: "7rem" },
    { name: "32", px: "128px", rem: "8rem" },
    { name: "36", px: "144px", rem: "9rem" },
    { name: "40", px: "160px", rem: "10rem" },
    { name: "44", px: "176px", rem: "11rem" },
    { name: "48", px: "192px", rem: "12rem" },
    { name: "52", px: "208px", rem: "13rem" },
    { name: "56", px: "224px", rem: "14rem" },
    { name: "60", px: "240px", rem: "15rem" },
    { name: "64", px: "256px", rem: "16rem" },
    { name: "72", px: "288px", rem: "18rem" },
    { name: "80", px: "320px", rem: "20rem" },
    { name: "96", px: "384px", rem: "24rem" },
];

const breakpoints = [
    { name: "sm", minWidth: "640px", rem: "40rem", css: "@media (min-width: 640px)" },
    { name: "md", minWidth: "768px", rem: "48rem", css: "@media (min-width: 768px)" },
    { name: "lg", minWidth: "1024px", rem: "64rem", css: "@media (min-width: 1024px)" },
    { name: "xl", minWidth: "1280px", rem: "80rem", css: "@media (min-width: 1280px)" },
    { name: "2xl", minWidth: "1536px", rem: "96rem", css: "@media (min-width: 1536px)" },
];

const containers = [
    { name: "3xs", width: "16rem", px: "256px" },
    { name: "2xs", width: "18rem", px: "288px" },
    { name: "xs", width: "20rem", px: "320px" },
    { name: "sm", width: "24rem", px: "384px" },
    { name: "md", width: "28rem", px: "448px" },
    { name: "lg", width: "32rem", px: "512px" },
    { name: "xl", width: "36rem", px: "576px" },
    { name: "2xl", width: "42rem", px: "672px" },
    { name: "3xl", width: "48rem", px: "768px" },
    { name: "4xl", width: "56rem", px: "896px" },
    { name: "5xl", width: "64rem", px: "1024px" },
    { name: "6xl", width: "72rem", px: "1152px" },
    { name: "7xl", width: "80rem", px: "1280px" },
];

const zIndexScale = [
    { name: "z-0", value: "0" },
    { name: "z-10", value: "10" },
    { name: "z-20", value: "20" },
    { name: "z-30", value: "30" },
    { name: "z-40", value: "40" },
    { name: "z-50", value: "50" },
    { name: "z-auto", value: "auto" },
];

const aspectRatios = [
    { name: "aspect-auto", value: "auto", desc: "Browser default" },
    { name: "aspect-square", value: "1 / 1", desc: "Square" },
    { name: "aspect-video", value: "16 / 9", desc: "Widescreen video" },
];

export default function SpacingPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Spacing & Grid</h1>
                <p className="text-muted-foreground text-sm">
                    Spacing scale, responsive breakpoints, container sizes, z-index layers, and
                    aspect ratios.
                </p>
                <Separator />
            </div>

            {/* Spacing Scale */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Spacing Scale</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Base unit: <code className="text-xs">--spacing: 0.25rem</code> (4px). All values
                    are multiples of this base. Use with <code className="text-xs">p-*</code>,{" "}
                    <code className="text-xs">m-*</code>, <code className="text-xs">gap-*</code>,{" "}
                    <code className="text-xs">w-*</code>, <code className="text-xs">h-*</code>, etc.
                </p>
                <div className="space-y-1.5">
                    {spacingScale.map((item) => (
                        <div key={item.name} className="flex items-center gap-4">
                            <CopyToken value={item.name} className="w-10 shrink-0 text-right" />
                            <div
                                className="bg-primary h-4 rounded-sm"
                                style={{ width: item.px === "0px" ? "1px" : item.px }}
                            />
                            <span className="text-muted-foreground text-xs">
                                {item.px}{" "}
                                <span className="text-muted-foreground/60">({item.rem})</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Breakpoints */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Breakpoints</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Mobile-first responsive design breakpoints. Prefix any utility with the
                    breakpoint name to apply it at that screen size and above.
                </p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Prefix</TableHead>
                            <TableHead>Min Width</TableHead>
                            <TableHead>Rem</TableHead>
                            <TableHead>CSS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {breakpoints.map((bp) => (
                            <TableRow key={bp.name}>
                                <TableCell>
                                    <CopyToken value={`${bp.name}:`} />
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {bp.minWidth}
                                </TableCell>
                                <TableCell className="text-muted-foreground">{bp.rem}</TableCell>
                                <TableCell>
                                    <code className="text-muted-foreground text-xs">{bp.css}</code>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Container Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Container Sizes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Named max-width values for constraining content width. Use with{" "}
                    <code className="text-xs">max-w-*</code> or{" "}
                    <code className="text-xs">@container</code> queries.
                </p>
                <div className="space-y-2">
                    {containers.map((item) => (
                        <div key={item.name} className="flex items-center gap-4">
                            <CopyToken value={item.name} className="w-12 shrink-0 text-right" />
                            <div className="flex-1">
                                <div
                                    className="bg-primary/80 h-4 rounded-sm"
                                    style={{
                                        width: `min(${item.px}, 100%)`,
                                    }}
                                />
                            </div>
                            <span className="text-muted-foreground w-28 shrink-0 text-xs">
                                {item.px}{" "}
                                <span className="text-muted-foreground/60">({item.width})</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Z-Index */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Z-Index</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Stacking order utilities for controlling layer precedence. Use consistent values
                    to avoid z-index conflicts.
                </p>
                <div className="flex items-end gap-3">
                    {zIndexScale.map((item, i) => (
                        <div key={item.name} className="flex flex-col items-center gap-2">
                            <div
                                className="border-border bg-primary/10 text-foreground flex w-16 items-center justify-center rounded-md border text-xs font-medium"
                                style={{
                                    height: item.value === "auto" ? "40px" : `${24 + i * 12}px`,
                                }}
                            >
                                {item.value}
                            </div>
                            <CopyToken value={item.name} className="text-[10px]" />
                        </div>
                    ))}
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Class</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>CSS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {zIndexScale.map((item) => (
                            <TableRow key={item.name}>
                                <TableCell>
                                    <CopyToken value={item.name} />
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {item.value}
                                </TableCell>
                                <TableCell>
                                    <code className="text-muted-foreground text-xs">
                                        z-index: {item.value}
                                    </code>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Aspect Ratios */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Aspect Ratios</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Control the proportional relationship between an element&apos;s width and
                    height.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {aspectRatios.map((item) => (
                        <div key={item.name} className="space-y-2">
                            <div
                                className="border-primary/30 bg-primary/5 w-full rounded-lg border-2 border-dashed"
                                style={{
                                    aspectRatio: item.value === "auto" ? "3 / 2" : item.value,
                                }}
                            >
                                <div className="text-muted-foreground flex h-full items-center justify-center text-sm">
                                    {item.value}
                                </div>
                            </div>
                            <div className="text-center">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 text-xs">{item.desc}</p>
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
                    Common spacing patterns showing how tokens combine in real layouts. Consistent
                    spacing creates rhythm and reduces visual noise.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Card padding
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="border-primary/30 rounded-lg border-2 border-dashed p-3">
                                <div className="bg-primary/10 rounded px-3 py-2 text-xs">
                                    p-3 &mdash; Compact
                                </div>
                            </div>
                            <div className="border-primary/30 rounded-lg border-2 border-dashed p-4">
                                <div className="bg-primary/10 rounded px-3 py-2 text-xs">
                                    p-4 &mdash; Default
                                </div>
                            </div>
                            <div className="border-primary/30 rounded-lg border-2 border-dashed p-6">
                                <div className="bg-primary/10 rounded px-3 py-2 text-xs">
                                    p-6 &mdash; Spacious
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Stack spacing
                        </p>
                        <div className="flex gap-8">
                            <div className="space-y-2">
                                <div className="bg-primary/40 h-3 w-24 rounded" />
                                <div className="bg-primary/40 h-3 w-20 rounded" />
                                <div className="bg-primary/40 h-3 w-28 rounded" />
                                <p className="text-muted-foreground pt-1 text-[10px]">
                                    space-y-2 (tight)
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-primary/40 h-3 w-24 rounded" />
                                <div className="bg-primary/40 h-3 w-20 rounded" />
                                <div className="bg-primary/40 h-3 w-28 rounded" />
                                <p className="text-muted-foreground pt-1 text-[10px]">
                                    space-y-4 (default)
                                </p>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-primary/40 h-3 w-24 rounded" />
                                <div className="bg-primary/40 h-3 w-20 rounded" />
                                <div className="bg-primary/40 h-3 w-28 rounded" />
                                <p className="text-muted-foreground pt-1 text-[10px]">
                                    space-y-8 (sections)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Grid gap
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-primary/10 text-muted-foreground flex h-12 items-center justify-center rounded-lg text-xs"
                                >
                                    gap-4
                                </div>
                            ))}
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
                                <strong className="text-foreground">Use the 4px base grid.</strong>{" "}
                                All spacing values are multiples of 4px. Stick to the scale for
                                consistent rhythm across components.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use gap for grid and flex layouts.
                                </strong>{" "}
                                Prefer <code className="text-xs">gap-*</code> over margins on
                                children &mdash; it simplifies removal and reordering of items.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use space-y for vertical stacks.
                                </strong>{" "}
                                <code className="text-xs">space-y-4</code> for related content,{" "}
                                <code className="text-xs">space-y-8</code> for section separation.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Constrain content with max-w.
                                </strong>{" "}
                                Use named container tokens (
                                <code className="text-xs">max-w-4xl</code>,{" "}
                                <code className="text-xs">max-w-prose</code>) to keep line lengths
                                readable.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Design mobile-first breakpoints.
                                </strong>{" "}
                                Start with the base (mobile) layout and progressively enhance at{" "}
                                <code className="text-xs">sm:</code>,{" "}
                                <code className="text-xs">md:</code>,{" "}
                                <code className="text-xs">lg:</code>.
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
                                    Don&apos;t use arbitrary spacing values.
                                </strong>{" "}
                                Avoid <code className="text-xs">p-[13px]</code> or{" "}
                                <code className="text-xs">gap-[7px]</code>. Stick to the scale so
                                spacing stays predictable and harmonious.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix margin directions in a stack.
                                </strong>{" "}
                                Use either <code className="text-xs">space-y-*</code> or individual{" "}
                                <code className="text-xs">mt-*</code> values, never both. Mixing
                                causes hard-to-debug double spacing.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t skip breakpoints.
                                </strong>{" "}
                                Going straight from base to <code className="text-xs">lg:</code>{" "}
                                leaves tablet users with a suboptimal layout. Design for at least
                                base, <code className="text-xs">sm:</code>, and{" "}
                                <code className="text-xs">lg:</code>.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t hard-code z-index values.
                                </strong>{" "}
                                Use the z-index scale tokens (<code className="text-xs">z-10</code>{" "}
                                through <code className="text-xs">z-50</code>) to prevent stacking
                                conflicts.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t set fixed aspect ratios with padding hacks.
                                </strong>{" "}
                                Use the native <code className="text-xs">aspect-*</code> utilities
                                instead of the legacy padding-bottom technique.
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
                                Touch targets must be at least 44&times;44px (WCAG 2.5.8). Use
                                padding and min-height to meet this even when visual size is
                                smaller.
                            </li>
                            <li>
                                Ensure adequate spacing between interactive elements (at least 8px)
                                to prevent accidental taps on mobile.
                            </li>
                            <li>
                                Content must be accessible at 400% zoom without horizontal scrolling
                                (WCAG 1.4.10). Use responsive breakpoints and{" "}
                                <code className="text-xs">max-w-*</code> to support reflow.
                            </li>
                            <li>
                                Avoid using spacing alone to convey grouping. Combine spacing with
                                borders, headings, or semantic HTML (
                                <code className="text-xs">fieldset</code>,{" "}
                                <code className="text-xs">section</code>) for screen reader users.
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
                    code={`// Spacing utilities (multiples of 4px base)
<div className="p-4">16px padding</div>
<div className="m-6">24px margin</div>
<div className="gap-3">12px gap</div>

// Vertical stacks
<div className="space-y-4">  {/* 16px between items */}
  <Card />
  <Card />
</div>

// Responsive breakpoints (mobile-first)
<div className="p-4 sm:p-6 lg:p-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    ...
  </div>
</div>

// Container widths
<div className="mx-auto max-w-4xl">Content</div>

// Z-index layers
<div className="z-10">Base layer</div>
<div className="z-20">Dropdown</div>
<div className="z-30">Sticky header</div>
<div className="z-40">Modal overlay</div>
<div className="z-50">Toast / tooltip</div>

// Aspect ratios
<div className="aspect-video">16:9 video</div>
<div className="aspect-square">1:1 square</div>`}
                />
            </div>
        </div>
    );
}
