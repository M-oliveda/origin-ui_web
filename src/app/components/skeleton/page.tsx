"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function SkeletonPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
                <p className="text-muted-foreground text-sm">
                    A shimmer placeholder animation for content that is still loading. Mirrors the
                    shape and dimensions of the real content to reduce layout shift and set user
                    expectations.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A single <code className="text-xs">{"<Skeleton>"}</code> div with{" "}
                    <code className="text-xs">data-slot=&quot;skeleton&quot;</code>. The shimmer
                    effect uses a horizontal gradient animation at{" "}
                    <code className="text-xs">bg-[length:200%_100%]</code> on an infinite{" "}
                    <code className="text-xs">shimmer</code> keyframe. Shape and size are entirely
                    controlled by className.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Skeleton className="h-4 w-48" />
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>data-slot=&quot;skeleton&quot;</span>
                            <span>shimmer keyframe</span>
                            <span>rounded-md default</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Compose multiple skeletons to match your real content layout exactly.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Avatar</p>
                        <div className="flex items-center gap-3">
                            <Skeleton className="size-10 rounded-full" />
                            <div className="space-y-1.5">
                                <Skeleton className="h-3 w-24" />
                                <Skeleton className="h-3 w-16" />
                            </div>
                        </div>
                    </div>

                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Text block</p>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-4/6" />
                        </div>
                    </div>

                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Card</p>
                        <div className="space-y-3">
                            <Skeleton className="h-32 w-full rounded-lg" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-3 w-1/2" />
                        </div>
                    </div>

                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">List rows</p>
                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Skeleton className="size-8 rounded-md" />
                                    <div className="flex-1 space-y-1.5">
                                        <Skeleton className="h-3 w-3/4" />
                                        <Skeleton className="h-3 w-1/2" />
                                    </div>
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
                                <strong className="text-foreground">
                                    Mirror real content shapes.
                                </strong>{" "}
                                Match the exact dimensions and border-radius of the element being
                                replaced to prevent layout shift on load.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use for determinate loading.
                                </strong>{" "}
                                Skeleton is best when content will arrive — it tells users what is
                                coming, not just that something is happening.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Compose multiple instances.
                                </strong>{" "}
                                Combine several skeletons to replicate a full section or card
                                layout.
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
                                    Don&apos;t use for indeterminate waits.
                                </strong>{" "}
                                If the content may never arrive or takes an unknown time, use
                                Spinner instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t animate indefinitely.
                                </strong>{" "}
                                If loading exceeds ~5 seconds, switch to an error state or a Spinner
                                with a timeout message.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t add ARIA roles.
                                </strong>{" "}
                                Skeleton is purely decorative — screen readers should rely on live
                                regions for loading announcements, not the skeleton itself.
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
                            <code className="text-xs">data-slot=&quot;skeleton&quot;</code> is
                            purely decorative — no ARIA role needed on the element itself.
                        </li>
                        <li>
                            Use an <code className="text-xs">aria-live</code> region elsewhere to
                            announce when loading completes (e.g., &quot;Content loaded&quot;).
                        </li>
                        <li>
                            Animation uses the <code className="text-xs">shimmer</code> keyframe
                            defined in globals.css with{" "}
                            <code className="text-xs">prefers-reduced-motion</code> handling.
                        </li>
                        <li>
                            Background gradient:{" "}
                            <code className="text-xs">from-muted via-muted/50 to-muted</code> with{" "}
                            <code className="text-xs">bg-[length:200%_100%]</code>.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Skeleton } from "@/components/ui/skeleton"

// Single line
<Skeleton className="h-4 w-48" />

// Avatar with text
<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="space-y-1.5">
    <Skeleton className="h-3 w-24" />
    <Skeleton className="h-3 w-16" />
  </div>
</div>

// Card placeholder
<div className="space-y-3">
  <Skeleton className="h-32 w-full rounded-lg" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-3 w-1/2" />
</div>`}
                />
            </div>
        </div>
    );
}
