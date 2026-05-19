"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Image } from "lucide-react";

const RATIOS = [
    { ratio: 16 / 9, label: "16:9", desc: "Widescreen video, hero images" },
    { ratio: 4 / 3, label: "4:3", desc: "Traditional display, old monitors" },
    { ratio: 1, label: "1:1", desc: "Profile photos, square thumbnails" },
    { ratio: 3 / 2, label: "3:2", desc: "Photography standard (DSLR)" },
    { ratio: 2 / 3, label: "2:3", desc: "Portrait / mobile screens" },
    { ratio: 21 / 9, label: "21:9", desc: "Ultrawide / cinematic" },
];

export default function AspectRatioPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">AspectRatio</h1>
                <p className="text-muted-foreground text-sm">
                    Constrains a child element to a given aspect ratio using a CSS custom property.
                    A pure div-based implementation that uses{" "}
                    <code className="text-xs">aspect-(--ratio)</code> — no padding-top hack
                    required.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<AspectRatio ratio={n}>"}</code> wrapper.
                    The <code className="text-xs">ratio</code> prop is a number (width ÷ height).
                    The child fills the constrained box using{" "}
                    <code className="text-xs">object-cover</code> or{" "}
                    <code className="text-xs">absolute inset-0</code>.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <div className="w-64">
                        <AspectRatio ratio={16 / 9}>
                            <div className="bg-muted text-muted-foreground flex h-full items-center justify-center gap-2 rounded-lg text-sm">
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image className="size-4" />
                                16:9
                            </div>
                        </AspectRatio>
                    </div>
                </div>
            </div>

            {/* Common ratios */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Common Ratios</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass any numeric ratio to the <code className="text-xs">ratio</code> prop.
                    Express it as a fraction for readability.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {RATIOS.map(({ ratio, label, desc }) => (
                        <div key={label} className="space-y-2">
                            <AspectRatio ratio={ratio}>
                                <div className="border-border bg-muted text-muted-foreground flex h-full items-center justify-center rounded-lg border text-sm font-medium">
                                    {label}
                                </div>
                            </AspectRatio>
                            <p className="text-muted-foreground text-xs">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* With image */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">With Image</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Place an <code className="text-xs">{"<img>"}</code> with{" "}
                    <code className="text-xs">object-cover w-full h-full</code> inside the ratio
                    wrapper to crop it to the target aspect.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                    {[16 / 9, 1, 2 / 3].map((ratio, i) => (
                        <div key={i}>
                            <AspectRatio ratio={ratio}>
                                <div className="from-primary/20 to-primary/5 text-muted-foreground flex h-full items-center justify-center rounded-lg bg-linear-to-br text-xs">
                                    {ratio === 1 ? "1:1" : ratio === 16 / 9 ? "16:9" : "2:3"}
                                </div>
                            </AspectRatio>
                        </div>
                    ))}
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
                                    Use for image and video containers.
                                </strong>{" "}
                                AspectRatio prevents layout shift while media loads by reserving the
                                correct space.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Express the ratio as a fraction.
                                </strong>{" "}
                                <code className="text-xs">ratio={"{16 / 9}"}</code> is more readable
                                than <code className="text-xs">ratio={"{1.777}"}</code>.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Combine with object-cover on images.
                                </strong>{" "}
                                This ensures the image fills the box without distortion.
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
                                    Don&apos;t use for text content.
                                </strong>{" "}
                                Text has natural height; forcing an aspect ratio will cause overflow
                                or awkward whitespace.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use without constraining the wrapper width.
                                </strong>{" "}
                                Without a fixed width, the ratio box will expand to fill its parent.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix absolute-positioned children with padding
                                    offsets.
                                </strong>{" "}
                                The component uses <code className="text-xs">aspect-(--ratio)</code>{" "}
                                — the child should fill via{" "}
                                <code className="text-xs">absolute inset-0</code> or{" "}
                                <code className="text-xs">w-full h-full</code>.
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
                    <h4 className="mb-2 text-sm font-medium">API</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">ratio</code> (required) — a number
                            representing width ÷ height. Stored as a CSS custom property{" "}
                            <code className="text-xs">--ratio</code>.
                        </li>
                        <li>
                            The component renders a plain <code className="text-xs">{"<div>"}</code>{" "}
                            — all standard div props are forwarded.
                        </li>
                        <li>
                            Children should use <code className="text-xs">w-full h-full</code> or{" "}
                            <code className="text-xs">absolute inset-0</code> to fill the box
                            correctly.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

// Image at 16:9
<AspectRatio ratio={16 / 9}>
  <img
    src="/hero.jpg"
    alt="Hero"
    className="h-full w-full rounded-lg object-cover"
  />
</AspectRatio>

// Square placeholder
<AspectRatio ratio={1}>
  <div className="flex h-full items-center justify-center bg-muted rounded-lg">
    1:1
  </div>
</AspectRatio>

// Portrait / mobile frame
<AspectRatio ratio={2 / 3}>
  <div className="h-full w-full rounded-lg bg-muted" />
</AspectRatio>`}
                />
            </div>
        </div>
    );
}
