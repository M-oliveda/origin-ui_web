"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

const TAGS = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`);

const MESSAGES = [
    { user: "Alice", text: "Hey, are you around?", time: "9:01 AM" },
    { user: "Bob", text: "Yeah, just got in. What's up?", time: "9:03 AM" },
    { user: "Alice", text: "We need to review the PR before standup.", time: "9:04 AM" },
    { user: "Bob", text: "On it — give me 10 minutes.", time: "9:05 AM" },
    { user: "Alice", text: "Perfect, I'll share the link now.", time: "9:05 AM" },
    { user: "Bob", text: "Got it. Looks good at first glance.", time: "9:12 AM" },
    { user: "Alice", text: "Left a few comments on the second file.", time: "9:14 AM" },
    { user: "Bob", text: "Addressed them. Ready for another pass.", time: "9:22 AM" },
];

export default function ScrollAreaPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">ScrollArea</h1>
                <p className="text-muted-foreground text-sm">
                    A custom scrollable container with styled, OS-consistent scrollbars. Built on{" "}
                    <code className="text-xs">@base-ui/react/scroll-area</code>. Supports both
                    vertical and horizontal scrolling.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<ScrollArea>"}</code> is the root. It wraps a
                    viewport and injects a styled <code className="text-xs">{"<ScrollBar>"}</code>{" "}
                    automatically. The internal <code className="text-xs">ScrollBar</code> can also
                    be used standalone for a horizontal scrollbar.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <ScrollArea className="border-border h-48 w-full max-w-xs rounded-lg border p-4">
                        <div className="space-y-3">
                            {Array.from({ length: 12 }, (_, i) => (
                                <p key={i} className="text-sm">
                                    Item {i + 1}
                                </p>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid gap-6 sm:grid-cols-2">
                    {/* Tag list */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Tag List
                        </p>
                        <ScrollArea className="border-border h-48 rounded-lg border p-4">
                            <div className="space-y-1">
                                {TAGS.map((tag) => (
                                    <div
                                        key={tag}
                                        className="hover:bg-muted rounded-md px-3 py-1.5 text-sm"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Message log */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Message Log
                        </p>
                        <ScrollArea className="border-border h-48 rounded-lg border p-4">
                            <div className="space-y-3">
                                {MESSAGES.map((msg, i) => (
                                    <div key={i} className="space-y-0.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-medium">{msg.user}</span>
                                            <span className="text-muted-foreground/60 text-xs">
                                                {msg.time}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm">{msg.text}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </div>

            {/* Horizontal scroll */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Horizontal Scroll</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Set <code className="text-xs">w-max</code> on the inner content and constrain
                    the container width to enable horizontal scrolling.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <ScrollArea className="border-border w-full rounded-lg border">
                        <div className="flex w-max gap-4 p-4">
                            {Array.from({ length: 15 }, (_, i) => (
                                <div
                                    key={i}
                                    className="border-border bg-muted flex h-20 w-32 shrink-0 items-center justify-center rounded-lg border text-sm font-medium"
                                >
                                    Item {i + 1}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
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
                                <strong className="text-foreground">Set an explicit height.</strong>{" "}
                                Without a fixed height the scroll area collapses to fit its content
                                and scrolling never activates.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use for overflow within a layout region.
                                </strong>{" "}
                                Sidebars, log panels, tag pickers, and message feeds are good
                                candidates.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Prefer scrollable containers over page scroll for panels.
                                </strong>{" "}
                                Isolating scroll to a region keeps the rest of the layout stable.
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
                                    Don&apos;t wrap the whole page.
                                </strong>{" "}
                                Page-level scrolling should use the native browser scroll, not a
                                custom ScrollArea.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for short lists.
                                </strong>{" "}
                                If all items fit without scrolling, the custom scrollbar is
                                unnecessary visual noise.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget keyboard access.
                                </strong>{" "}
                                The viewport is focusable — users should be able to scroll with
                                arrow keys once it receives focus.
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
                            The viewport receives <code className="text-xs">focus-visible</code>{" "}
                            ring styles — keyboard users can focus it and scroll with arrow keys.
                        </li>
                        <li>
                            Custom scrollbars are hidden from the accessibility tree via{" "}
                            <code className="text-xs">aria-hidden</code>; native scroll semantics
                            are preserved on the viewport.
                        </li>
                        <li>
                            Use <code className="text-xs">ScrollBar</code> directly with{" "}
                            <code className="text-xs">orientation=&quot;horizontal&quot;</code> when
                            you need both axes independently styled.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { ScrollArea } from "@/components/ui/scroll-area"

// Vertical scroll
<ScrollArea className="h-48 w-full rounded-lg border p-4">
  {items.map((item) => (
    <div key={item.id}>{item.label}</div>
  ))}
</ScrollArea>

// Horizontal scroll
<ScrollArea className="w-full rounded-lg border">
  <div className="flex w-max gap-4 p-4">
    {items.map((item) => (
      <div key={item.id} className="w-32 shrink-0">{item.label}</div>
    ))}
  </div>
</ScrollArea>`}
                />
            </div>
        </div>
    );
}
